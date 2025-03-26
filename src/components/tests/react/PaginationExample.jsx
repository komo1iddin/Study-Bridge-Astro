import React, { useState, useMemo } from "react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious,
  PaginationEllipsis
} from "@/components/ui/react/pagination";

const PaginationExample = () => {
  // Basic pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const itemsPerPage = 10;
  
  // Example data for pagination
  const items = useMemo(() => 
    Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)
  , []);
  
  // Calculate which items to display based on current page
  const displayedItems = useMemo(() => 
    items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  , [items, currentPage, itemsPerPage]);
  
  // Function to handle page changes
  const handlePageChange = (page) => {
    console.log('Page changed:', page);
    setCurrentPage(page);
  };
  
  // Function to generate visible page numbers
  const getPageNumbers = (current, total, maxVisible = 5) => {
    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }
    
    const pages = [];
    const sideItems = Math.floor(maxVisible / 2);
    
    // Always show first page
    pages.push(1);
    
    // If current page is close to the start
    if (current <= sideItems + 1) {
      for (let i = 2; i <= maxVisible - 2; i++) {
        pages.push(i);
      }
      pages.push('ellipsis1');
    } 
    // If current page is close to the end
    else if (current >= total - sideItems) {
      pages.push('ellipsis1');
      for (let i = total - maxVisible + 3; i < total; i++) {
        pages.push(i);
      }
    } 
    // If current page is in the middle
    else {
      pages.push('ellipsis1');
      for (let i = current - Math.floor(sideItems / 2); i <= current + Math.floor(sideItems / 2); i++) {
        pages.push(i);
      }
      pages.push('ellipsis2');
    }
    
    // Always show last page
    pages.push(total);
    
    return pages;
  };
  
  // Get visible page numbers for the main pagination
  const mainPageNumbers = getPageNumbers(currentPage, totalPages, 5);
  
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Pagination Example</h3>
        
        <div className="border rounded-md p-4 mb-4">
          <h4 className="font-medium mb-2">Current Page: {currentPage}</h4>
          <ul className="list-disc pl-5 space-y-1">
            {displayedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Main Pagination */}
        <Pagination className="mb-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            
            {mainPageNumbers.map((page, i) => (
              <PaginationItem key={i}>
                {page === 'ellipsis1' || page === 'ellipsis2' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)} 
                className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Compact Pagination</h4>
            <Pagination className="scale-75 origin-left">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {getPageNumbers(currentPage, 5, 3).map((page, i) => (
                  <PaginationItem key={i}>
                    {page === 'ellipsis1' || page === 'ellipsis2' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < 5 && handlePageChange(currentPage + 1)} 
                    className={currentPage >= 5 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Many Pages</h4>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => {}} 
                    className="pointer-events-none opacity-50"
                  />
                </PaginationItem>
                
                {getPageNumbers(7, 20, 7).map((page, i) => (
                  <PaginationItem key={i}>
                    {page === 'ellipsis1' || page === 'ellipsis2' ? (
                      <PaginationEllipsis />
                    ) : (
                      <PaginationLink
                        isActive={page === 7}
                      >
                        {page}
                      </PaginationLink>
                    )}
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext onClick={() => {}} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationExample; 
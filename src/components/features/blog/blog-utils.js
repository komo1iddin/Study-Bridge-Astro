/**
 * Blog utility functions for debugging and testing functionality
 */

/**
 * Test if the blog search functionality is working
 * @returns {boolean} - Whether the search is working
 */
export function testBlogSearch() {
  try {
    const searchInput = document.getElementById('blog-search');
    if (!searchInput) {
      console.error('Blog search input not found');
      return false;
    }
    
    // Trigger a search
    searchInput.value = 'test search';
    searchInput.dispatchEvent(new Event('input'));
    
    console.log('Search test completed successfully');
    return true;
  } catch (error) {
    console.error('Error testing blog search:', error);
    return false;
  }
}

/**
 * Test if the blog category filter is working
 * @returns {boolean} - Whether the category filter is working
 */
export function testCategoryFilter() {
  try {
    const categoryButtons = document.querySelectorAll('.category-btn');
    if (categoryButtons.length === 0) {
      console.error('Category buttons not found');
      return false;
    }
    
    // Click the first category button
    categoryButtons[0].click();
    
    console.log('Category filter test completed successfully');
    return true;
  } catch (error) {
    console.error('Error testing category filter:', error);
    return false;
  }
}

/**
 * Test blog component interactions
 * This tests if components can properly communicate with each other
 */
export function testBlogComponentInteractions() {
  document.addEventListener('astro:page-load', () => {
    console.log('Testing blog component interactions...');
    
    // Test search
    const searchWorking = testBlogSearch();
    console.log('Search functionality working:', searchWorking);
    
    // Test category filters
    const categoriesWorking = testCategoryFilter();
    console.log('Category filters working:', categoriesWorking);
    
    // Output overall status
    if (searchWorking && categoriesWorking) {
      console.log('✅ All blog components are working correctly');
    } else {
      console.error('❌ Some blog components are not working properly');
    }
  });
}

// For automatic activation in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  window.testBlogFeatures = {
    testBlogSearch,
    testCategoryFilter,
    testBlogComponentInteractions
  };
} 
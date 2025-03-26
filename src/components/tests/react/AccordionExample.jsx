"use client"

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/react/accordion";

export default function AccordionExample() {
  const [expandedItems, setExpandedItems] = useState(["item-1"]);
  
  const handleItemToggle = (itemValue) => {
    if (expandedItems.includes(itemValue)) {
      setExpandedItems(expandedItems.filter(item => item !== itemValue));
    } else {
      setExpandedItems([...expandedItems, itemValue]);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Expanded items: {expandedItems.join(", ")}</h3>
      </div>
      
      <Accordion type="multiple" value={expandedItems} onValueChange={setExpandedItems} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components' aesthetic.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Manually control:</h3>
        <div className="flex gap-2 flex-wrap">
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => handleItemToggle("item-1")}
          >
            Toggle Item 1
          </button>
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => handleItemToggle("item-2")}
          >
            Toggle Item 2
          </button>
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => handleItemToggle("item-3")}
          >
            Toggle Item 3
          </button>
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => setExpandedItems([])}
          >
            Collapse All
          </button>
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => setExpandedItems(["item-1", "item-2", "item-3"])}
          >
            Expand All
          </button>
        </div>
      </div>
    </div>
  );
} 
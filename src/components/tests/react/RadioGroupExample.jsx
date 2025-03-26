"use client"

import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/react/radio-group";
import { Label } from "@/components/ui/react/label";

export default function RadioGroupExample() {
  const [plan, setPlan] = useState("free");
  
  const handlePlanChange = (value) => {
    console.log("Plan changed to:", value);
    setPlan(value);
  };
  
  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Subscription Plan</h2>
      
      <RadioGroup value={plan} onValueChange={handlePlanChange} className="space-y-3">
        <div className="flex items-center space-x-2 py-1">
          <RadioGroupItem value="free" id="free-plan" />
          <Label htmlFor="free-plan" className="font-medium">Free Plan</Label>
        </div>
        
        <div className="flex items-center space-x-2 py-1">
          <RadioGroupItem value="pro" id="pro-plan" />
          <Label htmlFor="pro-plan" className="font-medium">Pro Plan</Label>
        </div>
        
        <div className="flex items-center space-x-2 py-1">
          <RadioGroupItem value="enterprise" id="enterprise-plan" />
          <Label htmlFor="enterprise-plan" className="font-medium">Enterprise Plan</Label>
        </div>
      </RadioGroup>
      
      <div className="mt-4 p-2 bg-slate-100 rounded">
        <p>Selected plan: <strong>{plan}</strong></p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Manually select:</h3>
        <div className="flex gap-2">
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => handlePlanChange("free")}
          >
            Select Free
          </button>
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => handlePlanChange("pro")}
          >
            Select Pro
          </button>
          <button 
            className="px-3 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => handlePlanChange("enterprise")}
          >
            Select Enterprise
          </button>
        </div>
      </div>
    </div>
  );
} 
import React, { useState } from "react";
import { Switch } from "@/components/ui/react/switch";

const SwitchExample = () => {
  const [options, setOptions] = useState([
    { id: 'airplane-mode', label: 'Airplane Mode', checked: false },
    { id: 'wifi', label: 'Wi-Fi', checked: true },
    { id: 'bluetooth', label: 'Bluetooth', checked: true },
    { id: 'notifications', label: 'Notifications', checked: false },
    { id: 'dark-mode', label: 'Dark Mode', checked: false, disabled: false },
  ]);

  // Function to handle switch changes
  const handleSwitchChange = (index, checked) => {
    console.log(`Switch ${options[index].id} changed:`, checked);
    const newOptions = [...options];
    newOptions[index].checked = checked;
    setOptions(newOptions);
  };

  // Toggle all switches
  const toggleAll = (value) => {
    setOptions(options.map(option => ({ ...option, checked: value })));
  };

  // Toggle disabled state for an option
  const toggleDisabled = (index) => {
    const newOptions = [...options];
    newOptions[index].disabled = !newOptions[index].disabled;
    setOptions(newOptions);
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Switch Examples</h3>
        
        <div className="border rounded-md p-4 mb-6">
          <div className="space-y-4">
            {options.map((option, i) => (
              <div key={option.id} className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label htmlFor={option.id} className="text-sm font-medium">{option.label}</label>
                  {option.description && (
                    <p className="text-xs text-muted-foreground">{option.description}</p>
                  )}
                </div>
                <Switch 
                  id={option.id}
                  checked={option.checked}
                  disabled={option.disabled}
                  onCheckedChange={(checked) => handleSwitchChange(i, checked)}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => toggleAll(true)}
          >
            Enable All
          </button>
          <button 
            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => toggleAll(false)}
          >
            Disable All
          </button>
          <button 
            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300" 
            onClick={() => toggleDisabled(4)}
          >
            Toggle "Dark Mode" Disabled State
          </button>
        </div>
        
        <div className="border rounded-md p-4">
          <h4 className="font-medium mb-3">Current Settings</h4>
          <pre className="bg-gray-100 p-2 rounded text-xs">
            {JSON.stringify(options, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample; 
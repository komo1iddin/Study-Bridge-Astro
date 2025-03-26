import React from 'react';
import { Button } from '@/components/ui/react/button';

const ButtonExample = () => {
  return (
    <>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      
      <div className="flex flex-col gap-2 mt-4 w-full">
        <Button size="default" className="w-full">Default Size</Button>
        <Button size="sm" className="w-full">Small Size</Button>
        <Button size="lg" className="w-full">Large Size</Button>
      </div>
      
      <div className="flex gap-2 mt-4">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
      
      <div className="flex gap-2 mt-4">
        <Button>
          <span className="mr-2">⚡</span>
          With Icon
        </Button>
      </div>
    </>
  );
};

export default ButtonExample; 
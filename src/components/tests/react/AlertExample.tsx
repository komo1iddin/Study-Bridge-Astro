import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/react/alert';
import { Info, AlertCircle, CheckCircle } from 'lucide-react';

const AlertExample = () => {
  return (
    <>
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>
          This is a basic informational alert message.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          This is a destructive alert for errors and warnings.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-green-500 text-green-700 bg-green-50">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          This is a custom styled success alert.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-yellow-500 text-yellow-700 bg-yellow-50">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          This is a custom styled warning alert.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AlertExample; 
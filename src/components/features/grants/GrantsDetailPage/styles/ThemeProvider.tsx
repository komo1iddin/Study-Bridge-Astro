import React from 'react';
import './grants.css';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <div className="theme-provider bg-background text-foreground">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Add a key prop to each child if it doesn't already have one
          return React.cloneElement(child, {
            key: child.key || `theme-child-${index}`,
            ...child.props
          });
        }
        return child;
      })}
    </div>
  );
};
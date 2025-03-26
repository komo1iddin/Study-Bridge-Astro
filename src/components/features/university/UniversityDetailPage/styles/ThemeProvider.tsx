import React from 'react';
import './universities.css'; // Add this import

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <div className="theme-provider bg-background text-foreground">
      {children}
    </div>
  );
};
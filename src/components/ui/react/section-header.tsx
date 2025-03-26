import React from 'react';

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  maxWidth?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  maxWidth = "800px",
}) => {
  return (
    <div 
      className="mx-auto text-center mb-8 md:mb-12"
      style={{ maxWidth }}
    >
<h2 
  className="text-3xl font-bold tracking-tight md:text-3xl lg:text-4xl mb-5 animate-fade-in"
>
  {title}
</h2>
      {subtitle && (
        <p 
          className="text-muted-foreground md:text-lg max-w-[600px] mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]"
        >
          {subtitle}
        </p>
      )}
      <div 
        className="h-1 bg-primary-600 mx-auto mt-4 w-20 opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]"
      />
    </div>
  );
};

export default SectionHeader;

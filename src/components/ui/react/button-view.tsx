import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  text: string;
  variant?: 'mobile' | 'desktop';
  showOnMobile?: boolean;
  showOnDesktop?: boolean;
}

const ButtonView: React.FC<ButtonProps> = ({
  href,
  text,
  variant = 'desktop',
  className = '',
  showOnMobile = true,
  showOnDesktop = true,
  onClick,
  ...props
}) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-sm";
  
  const variantClasses = {
    mobile: "px-6 py-3 text-sm",
    desktop: "px-8 py-4 text-lg hover:scale-105 shadow-md"
  };

  const visibilityClasses = [];
  if (!showOnMobile) visibilityClasses.push("hidden md:inline-flex");
  if (!showOnDesktop) visibilityClasses.push("md:hidden");
  if (showOnMobile && showOnDesktop) visibilityClasses.push("");

  const iconClasses = {
    mobile: "ml-1.5 h-4 w-4",
    desktop: "ml-2.5 h-6 w-6"
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${visibilityClasses.join(' ')} ${className}`;

  // Фильтруем пропсы, чтобы исключить передачу булевых значений напрямую в HTML
  const { showOnMobile: _, showOnDesktop: __, variant: ___, ...htmlProps } = props;

  return (
    <a href={href} className={finalClasses} onClick={onClick} {...htmlProps}>
      {text}
      <ArrowRight className={iconClasses[variant]} />
    </a>
  );
};

export default ButtonView;

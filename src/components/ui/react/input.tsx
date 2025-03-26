import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { inputTheme } from "@/lib/theme-utils"

const inputVariants = cva(
  inputTheme.base,
  {
    variants: {
      variant: {
        default: inputTheme.variant.default,
        destructive: inputTheme.variant.destructive,
        outlined: inputTheme.variant.outlined,
        ghost: inputTheme.variant.ghost,
      },
      size: {
        default: inputTheme.size.default,
        sm: inputTheme.size.sm,
        lg: inputTheme.size.lg,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps 
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }

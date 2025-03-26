import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { buttonTheme } from "@/lib/theme-utils"

const buttonVariants = cva(
  buttonTheme.base,
  {
    variants: {
      variant: {
        default: buttonTheme.variant.default,
        destructive: buttonTheme.variant.destructive,
        outline: buttonTheme.variant.outline,
        secondary: buttonTheme.variant.secondary,
        ghost: buttonTheme.variant.ghost,
        link: buttonTheme.variant.link,
      },
      size: {
        default: buttonTheme.size.default,
        sm: buttonTheme.size.sm,
        lg: buttonTheme.size.lg,
        icon: buttonTheme.size.icon,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

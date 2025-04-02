import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const gradientButtonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-lg min-w-[66px] px-5 py-2",
    "text-sm font-medium text-gray-200",
    "bg-gradient-to-r from-gray-800 to-gray-700",
    "border border-gray-600",
    "shadow-md transition-all duration-300 ease-in-out",
    "hover:bg-gray-700 hover:border-gray-500",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "",
        variant: "bg-gray-900 text-gray-300 hover:bg-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };

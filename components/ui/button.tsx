import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary/80",
        ghost:
          "text-muted-foreground hover:bg-slate-900/[0.06] hover:text-foreground dark:hover:bg-white/[0.08]",
        outline:
          "border border-slate-900/10 bg-white/[0.65] text-foreground shadow-sm hover:-translate-y-0.5 hover:border-cyan-500/35 hover:bg-white/90 dark:border-white/[0.12] dark:bg-white/5 dark:hover:border-cyan-300/45 dark:hover:bg-white/10",
        glow:
          "border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 shadow-glow hover:-translate-y-0.5 hover:border-cyan-500/55 hover:bg-cyan-500/[0.16] dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-100 dark:hover:border-cyan-200/70 dark:hover:bg-cyan-300/[0.18]",
        violet:
          "border border-violet-500/30 bg-violet-500/10 text-violet-700 shadow-purple-glow hover:-translate-y-0.5 hover:border-violet-500/55 hover:bg-violet-500/[0.16] dark:border-violet-300/30 dark:bg-violet-300/10 dark:text-violet-100 dark:hover:border-violet-200/70 dark:hover:bg-violet-300/[0.18]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-5 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      suppressHydrationWarning = true,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        suppressHydrationWarning={suppressHydrationWarning}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/15 text-cyan-700 dark:text-cyan-100",
        secondary: "border-slate-900/10 bg-white/[0.65] text-muted-foreground dark:border-white/10 dark:bg-white/[0.06]",
        violet: "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:border-violet-300/25 dark:bg-violet-300/10 dark:text-violet-100",
        emerald: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
        outline: "border-cyan-500/25 text-cyan-700 dark:border-cyan-300/25 dark:text-cyan-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * Button variants based on Figma design tokens.
 * Source: design/tokens.json → tokens.components.btn
 *
 * Variants:
 *   primary   → teal 700 bg, white text (main CTA)
 *   secondary → gulf 950 bg, white text
 *   tertiary  → gulf 300 bg, dark text
 *   light     → white bg, black text
 *   outline   → transparent bg, gulf 100 text, gulf 100 border
 *   ghost     → transparent bg, white text
 *   destructive → destructive token
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-[16px] font-semibold transition-all disabled:pointer-events-none disabled:opacity-[var(--opacity-disabled)] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // teal 700 bg, white text (Figma: btn.primary)
        default:
          "bg-teal-700 text-white hover:bg-gulf-950",
        // gulf 950 bg, white text (Figma: btn.secondary)
        secondary:
          "bg-gulf-950 text-white hover:bg-gulf-700",
        // gulf 300 bg, dark text (Figma: btn.tertiary)
        tertiary:
          "bg-gulf-300 text-gulf-980 hover:bg-gulf-700",
        // white bg, black text (Figma: btn.light)
        light:
          "bg-zinc-white text-zinc-black hover:bg-gulf-700 hover:text-white",
        // transparent bg, gulf 100 text, gulf 100 border (Figma: btn.outline)
        outline:
          "bg-transparent text-gulf-100 border border-gulf-100 hover:bg-gulf-700 hover:text-white hover:border-gulf-700",
        // transparent bg, white text (Figma: btn.ghost)
        ghost:
          "bg-transparent text-white hover:bg-gulf-700",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // Figma: button-large → 48px height, 18px font, bold, 0 24px padding
        default: "h-12 px-6 py-3 has-[>svg]:px-5",
        // Figma: button-medium → 40px height, 16px font, semibold
        sm: "h-10 px-4 py-2 has-[>svg]:px-3",
        // Larger variant
        lg: "h-14 px-8 py-3 text-lg has-[>svg]:px-6",
        icon: "size-12 rounded-[6px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

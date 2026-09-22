import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * Badge / Tag variants based on Figma design tokens.
 * Source: design/tokens.json → tokens.components.tag + tokens.components.chip
 *
 * Tag variants:
 *   primary   → gulf 950 bg, white text
 *   secondary → teal 700 bg, white text
 *   tertiary  → teal 700 bg, teal 100 text/stroke
 *   light     → teal 100 bg, teal 950 text
 *   warning   → gulf 950 bg, white text
 *
 * Chip variants (same colors, smaller radius):
 *   chip-primary   → gulf 950 bg, white text
 *   chip-secondary → teal 700 bg, white text
 *   chip-tertiary  → teal 700 bg, teal 100 text
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[4px] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[-0.1px] w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        // gulf 950 bg, white text (Figma: tag.primary, chip.primary)
        default:
          "border-transparent bg-gulf-950 text-white",
        // teal 700 bg, white text (Figma: tag.secondary, chip.secondary)
        secondary:
          "border-transparent bg-teal-700 text-white",
        // teal 700 bg, teal 100 text (Figma: tag.tertiary, chip.tertiary)
        tertiary:
          "border border-teal-100 bg-teal-700 text-teal-100",
        // teal 100 bg, teal 950 text (Figma: tag.light-secondary)
        light:
          "border-transparent bg-teal-100 text-teal-950",
        // gulf 950 bg, white text (Figma: tag.warning)
        warning:
          "border-transparent bg-gulf-950 text-white",
        // transparent bg, gulf 100 text, gulf 100 border (Figma: tag.outline concept)
        outline:
          "border-gulf-100 bg-transparent text-gulf-100",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      },
      // Chip shape: smaller radius (10px from Figma)
      chip: {
        true: "rounded-[10px] px-3 py-2 text-[14px] font-normal uppercase tracking-[-0.14px]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      chip: false,
    },
  },
);

function Badge({
  className,
  variant,
  chip,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, chip, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

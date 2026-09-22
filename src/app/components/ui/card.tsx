import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * Card variants based on Figma design tokens.
 * Source: design/tokens.json → tokens.components.card
 *
 * Variants:
 *   primary   → dark bg (container), white title/subtitle, muted body
 *   secondary → gulf 300 bg, dark text
 *   tertiary  → white bg, black text
 *   outline   → transparent bg, gulf 100 text, gulf 100 border
 */
const cardVariants = cva(
  "bg-card text-card-foreground flex flex-col gap-6 rounded-xl",
  {
    variants: {
      variant: {
        // Figma: card.primary → dark bg, white title/subtitle
        default:
          "bg-[#0c0c0c] text-white",
        // Figma: card.secondary → gulf 300 bg
        secondary:
          "bg-gulf-300 text-gulf-980",
        // Figma: card.tertiary → white bg, black text
        tertiary:
          "bg-zinc-white text-zinc-black",
        // Figma: card.outline → transparent, gulf 100 border
        outline:
          "bg-transparent text-gulf-100 border border-gulf-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

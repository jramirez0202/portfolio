import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import {FiDownload} from "react-icons/fi"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex item-center justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white text-base transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-white",
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
        
      },
      size: {
        default: "h-[44] px-6",
        md: "h-[48px] px-6",
        lg: "h-[56] text-sm uppercase tracking-[2px] px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})

const DownloadCvButton = () => {
  return (
    <a href="/assets/johan_ramirez.pdf" download>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Descargar CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </a>
  );
};

Button.displayName = "Button"

export { Button, buttonVariants, DownloadCvButton }

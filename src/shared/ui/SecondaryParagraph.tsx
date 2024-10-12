import { cn } from "@/lib/utils"
import React from "react"

export interface SecondaryParagraphProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
  const SecondaryParagraph = React.forwardRef<HTMLParagraphElement, SecondaryParagraphProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div className={cn(className, 'font-gilroy_semibold text-[16px] text-[#979797]')} {...props}>{children}</div>
      )
    }
  )
  SecondaryParagraph.displayName = "Input"
  
  export { SecondaryParagraph }
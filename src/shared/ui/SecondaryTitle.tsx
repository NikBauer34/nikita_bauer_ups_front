import { cn } from "@/lib/utils"
import React from "react"

export interface SecondaryTitleProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
  const SecondaryTitle = React.forwardRef<HTMLParagraphElement, SecondaryTitleProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div className={cn(className, 'font-mont_bold text-[20px]')} {...props}>{children}</div>
      )
    }
  )
  SecondaryTitle.displayName = "Input"
  
  export { SecondaryTitle }
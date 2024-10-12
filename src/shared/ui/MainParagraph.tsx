import { cn } from "@/lib/utils"
import React from "react"

export interface MainParagraphProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
  const MainParagraph = React.forwardRef<HTMLParagraphElement, MainParagraphProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div className={cn(className, 'font-gilroy_semibold text-[16px] text-[#4F4F4F]')} {...props}>{children}</div>
      )
    }
  )
  MainParagraph.displayName = "Input"
  
  export { MainParagraph }
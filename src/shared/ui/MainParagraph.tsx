import { cn } from "@/lib/utils"
import React from "react"

export interface MainParagraphProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text: string}
  const MainParagraph = React.forwardRef<HTMLParagraphElement, MainParagraphProps>(
    ({ className, text, ...props }, ref) => {
      return (
        <div className={cn(className, 'font-gilroy_semibold text-[16px] text-[#4F4F4F]')} {...props}>{text}</div>
      )
    }
  )
  MainParagraph.displayName = "Input"
  
  export { MainParagraph }
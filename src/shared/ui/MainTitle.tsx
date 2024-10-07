import { cn } from "@/lib/utils"
import React from "react"

export interface MainTitleProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text: string}
  const MainTitle = React.forwardRef<HTMLParagraphElement, MainTitleProps>(
    ({ className, text, ...props }, ref) => {
      return (
        <p className={cn(className, 'font-gilroy_bold text-[28px]')} {...props}>{text}</p>
      )
    }
  )
  MainTitle.displayName = "Input"
  
  export { MainTitle }
import { cn } from "@/lib/utils"
import React from "react"

export interface MainTitleProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
  const MainTitle = React.forwardRef<HTMLParagraphElement, MainTitleProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div className={cn(className, 'font-gilroy_bold text-[28px]')} {...props}>{children}</div>
      )
    }
  )
  MainTitle.displayName = "Input"
  
  export { MainTitle }
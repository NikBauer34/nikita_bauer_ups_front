import { cn } from "@/lib/utils"
import React from "react"

export interface LineTitleProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
  const LineTitle = React.forwardRef<HTMLParagraphElement, LineTitleProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div className={cn(className, "float-left w-[100%] border-t-[1px] border-solid border-[#ccc] text-center text-[#979797]")} {...props}><b className='inline-block relative top-[-12px] w-[140px] h-[16px] text-center bg-[#fff] z-1 font-gilroy_semibold'>{children}</b></div>
      )
    }
  )
  LineTitle.displayName = "Input"
  
  export { LineTitle }
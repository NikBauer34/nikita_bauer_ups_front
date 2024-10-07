import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="h-[58px] px-[18px] py-2.5 bg-[#f6f6f6] rounded-[20px] justify-center items-center gap-2 flex w-full">
    <div className="grow shrink basis-0 h-[38px] flex-col justify-center items-start inline-flex">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      </div>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

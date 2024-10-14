import { cn } from "@/lib/utils"
import React from "react"

export interface PinInputProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {data: number}
const PinInput = React.forwardRef<HTMLParagraphElement, PinInputProps>(
  ({ className, children, data, ...props }, ref) => {
    return (
      <div className={cn(className, "grow shrink basis-0 h-[58px] px-[18px] py-2.5 bg-[#f6f6f6] rounded-[15px] justify-center items-center gap-2 flex")} {...props}>
      <div className="grow shrink basis-0 h-[38px] flex-col justify-center items-center inline-flex">
        <div className="self-stretch text-center text-[#2b56f6] text-[22px] font-mont_bold leading-[33px]">{data}</div>
      </div>
    </div>
    )
  }
)
PinInput.displayName = "Input"

export { PinInput }
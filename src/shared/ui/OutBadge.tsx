import { cn } from "@/lib/utils"
import React from "react"
export interface OutBadgeProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {text: string, date: string, leftAmount: number, rightAmount: number}
const OutBadge = React.forwardRef<HTMLParagraphElement, OutBadgeProps>(
  ({ className, children, text, date, leftAmount, rightAmount, ...props }, ref) => {
    return (
      <div className={cn(className, "w-full h-[66px] px-[23px] py-2.5 bg-[#f6f6f6] rounded-[30px] flex-col justify-start items-start gap-1 inline-flex")} {...props}>
  <div className="self-stretch justify-between items-start inline-flex">
    <div className="w-[154.96px] text-[#252525] text-sm font-mont_semibold leading-[21px]">{text}</div>
    <div className="text-[#252525] text-sm font-mont_semibold leading-[21px]">{date}</div>
  </div>
  <div className="self-stretch justify-between items-start inline-flex">
    <div className="text-[#979797] font-gilroy_semibold">{leftAmount.toLocaleString()} ₽</div>
    {rightAmount > 0 ? (
      <div className="text-[#27ae60] font-gilroy_semibold">+{rightAmount.toLocaleString()} ₽</div>
    ) : (
      <div className="text-[#eb5757] font-gilroy_semibold">{rightAmount.toLocaleString()} ₽</div>
    )}
  </div>
</div>
    )
  }
)
OutBadge.displayName = "Input"

export { OutBadge }
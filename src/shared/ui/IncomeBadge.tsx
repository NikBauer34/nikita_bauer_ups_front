import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
export interface IncomeBadgeProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {amount?: number, icon: string, phone: string, bank: string}
const IncomeBadge = React.forwardRef<HTMLParagraphElement, IncomeBadgeProps>(
  ({ className, children, amount, icon, phone, bank, ...props }, ref) => {
    return (
      <div className={cn(className, "w-full h-[66px] px-5 py-4 bg-[#f6f6f6] rounded-[20px] justify-start items-center gap-2 inline-flex")} {...props}>
  <img className="w-8 h-8 rounded-full" src={`/assets/icons/${icon}`} />
  <div className="flex-col justify-center items-start gap-1 inline-flex">
    <div className="text-[#252525] font-gilroy_semibold">{phone}</div>
    <div className="text-[#979797] text-sm font-mont_semibold leading-[21px]">{bank}</div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
    {amount ? (
      <div className="text-[#252525] text-base font-gilroy_semibold text-[16px]">{amount.toLocaleString()} ₽</div>
    ) : (
      <div className="text-[#252525] text-base font-gilroy_semibold text-[16px]"></div>
    )}
  </div>
</div>
    )
  }
)
IncomeBadge.displayName = "Input"

export { IncomeBadge }
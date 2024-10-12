import { cn } from "@/lib/utils"
import React from "react"

export interface BankBadgeProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
const BankBadge = React.forwardRef<HTMLParagraphElement, BankBadgeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn(className, " h-[58px] bg-[#f6f6f6] rounded-[50px] justify-center items-center gap-2.5 inline-flex self-center")} {...props}>
  <div className="text-center text-[#252525] text-[16px] font-gilroy_semibold">{children}</div>
</div>
    )
  }
)
BankBadge.displayName = "Input"

export { BankBadge }
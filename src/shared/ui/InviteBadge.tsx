import { cn } from "@/lib/utils"
import React from "react"


export interface InviteBadgeProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {text: string, subtitle: string, icon?: string}
const InviteBadge = React.forwardRef<HTMLParagraphElement, InviteBadgeProps>(
  ({ className, children, text, subtitle, icon, ...props }, ref) => {
    return (
      <div className={cn(className, "w-full h-[70px] p-4 bg-[#f6f6f6] rounded-[30px] justify-between items-center inline-flex")}>
  <div className="w-[219px] flex-col justify-start items-start gap-0.5 inline-flex">
    <div className="text-[#252525] text-sm font-mont_bold leading-[21px]">{text}</div>
    <div className="text-[#979797] text-sm font-mont_bold leading-[21px]">{subtitle}</div>
  </div>
  <div className="w-6 h-6 justify-center items-center flex">
    {icon &&
      <img className="w-[22px] h-4" src={`/assets/icons/${icon}`} />
    }
  </div>
</div>
    )
  }
)
InviteBadge.displayName = "Input"

export { InviteBadge }
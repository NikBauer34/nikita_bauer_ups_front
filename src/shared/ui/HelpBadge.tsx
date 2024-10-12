import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"
export interface HelpBadgeProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {text: string, icon: string}
const HelpBadge = React.forwardRef<HTMLParagraphElement, HelpBadgeProps>(
  ({ className, children, icon, text, ...props }, ref) => {
    return (
      <div className="grow shrink basis-0 h-[115px] p-4 bg-[#f6f6f6] rounded-[30px] flex-col justify-between items-start inline-flex">
    <div className={cn(className, "w-[21px] h-[21px] p-[1.75px] justify-center items-center inline-flex")} {...props}>
      <div className="w-[21px] h-[21px] relative">
        <div className="w-[21px] h-[21px] left-0 top-0 absolute rounded-xl" />
          <Image src={`/assets/icons/${icon}`} alt='circl' width={21} height={21} />
      </div>
    </div>
    <div className="w-[125px] text-[#252525] font-gilroy_semibold">{text}</div>
  </div>
    )
  }
)
HelpBadge.displayName = "Input"

export { HelpBadge }
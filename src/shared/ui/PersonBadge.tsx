import { cn } from "@/lib/utils"
import React from "react"

export interface PersonBadgeProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {text: string, data: string}
const PersonBadge = React.forwardRef<HTMLParagraphElement, PersonBadgeProps>(
  ({ className, children, text, data, ...props }, ref) => {
    return (
      <div className={cn(className, "w-full h-14 px-5 py-4 bg-[#f6f6f6] rounded-[20px] justify-start items-center gap-[22px] inline-flex mt-[10px]")} {...props}>
  <div className="h-5 justify-start items-center gap-2.5 flex">
    <div className="text-[#252525] font-gilroy_semibold">{text}</div>
  </div>
  <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex">
    <div className="text-[#252525] font-gilroy_semibold">{data}</div>
  </div>
  <div className="w-6 h-6 p-[3px] justify-center items-center flex">
    <img className="w-[18px] h-[18px]" src="/assets/icons/edit.svg" />
  </div>
      </div>
    )
  }
)
PersonBadge.displayName = "Input"

export { PersonBadge }
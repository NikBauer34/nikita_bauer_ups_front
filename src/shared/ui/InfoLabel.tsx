import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
export interface InfoLabelProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {amount: number, icon: string, time: string, title: string, paragraph: string}
const InfoLabel = React.forwardRef<HTMLParagraphElement, InfoLabelProps>(
  ({ className, children, amount, time, title, onClick, paragraph, icon, ...props }, ref) => {
    return (
      <div className={cn(className, "w-full h-16 relative")} {...props} onClick={onClick}>
  <div className="w-full h-16 left-0 top-0 absolute bg-[#f6f6f6] rounded-[90px]" />
  <div className="w-4 h-4 left-[305.79px] top-[35px] absolute bg-[#252525] rounded-[40px] flex-col justify-center items-center gap-2.5 inline-flex">
    <div className="w-4 h-4 text-center text-white text-[9px] font-mont_bold leading-3 flex items-center justify-center">{amount}</div>
  </div>
  <div className="w-[51.12px] h-14 left-[3.65px] top-[4px] absolute">
    <div className="w-[51.12px] h-14 left-0 top-0 absolute bg-[#f6f6f6] rounded-full border">
    <Image src={`/assets/icons/${icon}`} width={51.12} height={51.12} alt='n' />
    </div>
  </div>
  <div className="w-full h-[42px] left-[65.72px] top-[11px] absolute">
    <div className="w-full left-0 top-0 absolute text-[#252525] font-gilroy_semibold">{title}</div>
    <div className="w-full left-0 top-[22px] absolute text-[#bdbdbd] text-base font-gilroy_semibold">{paragraph}</div>
  </div>
  <div className="left-[289.10px] top-[14px] absolute text-[#bdbdbd] text-sm font-gilroy_semibold">{time}</div>
</div>
    )
  }
)
InfoLabel.displayName = "Input"

export { InfoLabel }
'use client'
import { cn } from "@/lib/utils"
import React, { SyntheticEvent } from "react"
import toast from "react-hot-toast"
//tLPqNMJBWC9m72nUvuGXej5YcETwF8frdQSHKaA3kZzRV

export interface CopyLinkProps
extends React.InputHTMLAttributes<HTMLDivElement> {text: string}
const CopyLink = React.forwardRef<HTMLDivElement, CopyLinkProps>(
({ className, text, disabled, ...props }, ref) => {
  const onclick = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (window.navigator) {
      await navigator.clipboard.writeText(text)
      toast.success('Сохранено!')
    }
  }
  return (
    <div className={cn(className, " h-[58px] px-[18px] py-2.5 bg-[#f6f6f6] rounded-[15px] justify-center items-center gap-2 inline-flex")}>
  <div className="grow shrink basis-0 h-[38px] flex-col justify-center items-start inline-flex">
    <div className=" text-[#2b56f6] font-gilroy_semibold text-[16px] text-ellipsis overflow-hidden ... w-[250px]">{text}</div>
  </div>
  <div className="w-6 h-6 justify-center items-center flex cursor-pointer" onClick={async (e) => await onclick(e)}>
    <div className="w-6 h-6 px-0.5 py-[7px] justify-center items-center inline-flex">
      <img src="/assets/icons/round-link.svg" />
    </div>
  </div>
</div> 
  )
}
)
CopyLink.displayName = "Enter"

export { CopyLink }
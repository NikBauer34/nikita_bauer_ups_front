'use client'
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import React from "react"

export interface LogoutIconProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
const LogoutIcon = React.forwardRef<HTMLParagraphElement, LogoutIconProps>(
  ({ className, children, ...props }, ref) => {
    const router = useRouter()
    return (
      <div className={cn(className, "w-[52px] h-[52px] bg-[#f6f6f6] rounded-[50px] justify-center items-center gap-2.5 flex")} {...props} onClick={() => router.back()}>
    <div className="w-6 h-6 justify-center items-center flex">
      <div className="w-6 h-6 py-[5px] justify-center items-center inline-flex">
        <img src="/assets/icons/Out.svg" />
      </div>
    </div>
  </div>
    )
  }
)
LogoutIcon.displayName = "Input"

export { LogoutIcon }
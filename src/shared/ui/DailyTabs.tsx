'use client'
import { cn } from "@/lib/utils"
import React, { useState } from "react"

export interface DailyTabsProps
extends React.InputHTMLAttributes<HTMLDivElement> {defaultValue: string, items: {value: string, text: string}[]}
const DailyTabs = React.forwardRef<HTMLDivElement, DailyTabsProps>(
({ className, defaultValue, items, disabled, ...props }, ref) => {

  const [value, setValue] = useState(defaultValue)
  return (
    <div className={cn(className, "w-[345px] h-10 relative")} {...props} >
  <div className="w-[345px] h-10 left-0 top-0 absolute bg-[#f8f8f8] rounded-[15px]" />
  <div className="inline-flex justify-between items-center">

  {items.map(el =>
    <div className={` absolute rounded-[13px] justify-center items-center inline-flex ${value == el.value ? 'bg-white': ''}`} onClick={() => setValue(el.value)}>
    <div className="text-center text-[#272727] text-sm font-mont_bold">{el.text}</div>
  </div>
  )}
</div>
</div>
  )
}
)
DailyTabs.displayName = "Enter"

export { DailyTabs }
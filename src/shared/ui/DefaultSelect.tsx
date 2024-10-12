import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import React from "react"
//w-[335px]

export interface DefaultSelectProps
extends React.InputHTMLAttributes<HTMLSelectElement> {placeholder: string, label: string, items: string[]}
const DefaultSelect = React.forwardRef<HTMLSelectElement, DefaultSelectProps>(
({ className, placeholder, label, items, disabled, ...props }, ref) => {
  return (
    <Select>
    <SelectTrigger className={cn(className, "border-none h-[58px] px-5 py-4 bg-[#f6f6f6] rounded-[20px] justify-between items-center inline-flex text-[#252525] font-gilroy_semibold text-[16px]")}>
    <SelectValue placeholder={placeholder}></SelectValue>
    </SelectTrigger>
    <SelectContent className="bg-[#f6f6f6] font-gilroy_semibold">
      <SelectGroup>
        <SelectLabel>{label}</SelectLabel>
        {items.map(el => 

          <SelectItem value={el}>{el}</SelectItem>
        )}
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}
)
DefaultSelect.displayName = "Enter"

export { DefaultSelect }
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"

export interface EnterButtonProps
  extends React.InputHTMLAttributes<HTMLButtonElement> {text: string}
const EnterButton = React.forwardRef<HTMLParagraphElement, EnterButtonProps>(
  ({ className, text, ...props }, ref) => {
    return (
      <div className={cn(className, "w-[335px] h-[58px] py-[17px] bg-[#2b56f6] rounded-[50px] justify-center items-center inline-flex")} {...props}>
        <Button className="text-center text-white text-base font-mont_semibold leading-normal">{text}</Button>
      </div>
    )
  }
)
EnterButton.displayName = "Enter"

export { EnterButton }
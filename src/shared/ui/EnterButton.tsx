import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"
import { Loader } from "lucide-react";
export interface EnterButtonProps
  extends React.InputHTMLAttributes<HTMLDivElement> {text: string, loading?: boolean, disabled?: boolean}
const EnterButton = React.forwardRef<HTMLDivElement, EnterButtonProps>(
  ({ className, text, loading, disabled, ...props }, ref) => {
    return (
      <div className={cn(className, "w-full h-[58px] py-[17px] bg-[#2b56f6] rounded-[50px] justify-center items-center inline-flex")} {...props}>
        <Button className="text-center text-white text-base font-mont_semibold leading-normal" disabled={disabled}>
          {loading ? <Loader size={20} className="animate-spin ml-2"/> : <>{text}</>}
        </Button>
      </div>
    )
  }
)
EnterButton.displayName = "Enter"

export { EnterButton }
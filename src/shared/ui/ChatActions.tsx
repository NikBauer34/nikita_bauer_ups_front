import { Input } from "@/components/ui/input"
import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"


export interface ChatActionsProps
  extends React.InputHTMLAttributes<HTMLParagraphElement> {text?: string}
  const ChatActions = React.forwardRef<HTMLParagraphElement, ChatActionsProps>(
    ({ className, children, ...props }, ref) => {
      return (
        <div className={cn(className, "h-[54px] justify-center items-center gap-[7px] inline-flex w-full pb-[10px] mt-[20px] invisible md:visible")} {...props}>
  <div className="w-[274px] h-[54px] px-[18px] py-2.5 rounded-[15px] justify-center items-center gap-2 flex">
    <div className="grow shrink basis-0 h-[38px] flex-col justify-center items-start inline-flex">
      <Input className="font-mont_regular text-[14px] text-[#979797]"  placeholder="Введите сообщение"></Input>
    </div>
  </div>
  <div className="p-[15px] bg-[#2b56f6] rounded-[50px] justify-start items-start gap-2.5 flex">
    <div className="w-[24px] h-[24px] justify-center items-center flex">
      <Image src={'/assets/icons/send.svg'} width={24} height={24} alt='hio' />
    </div>
  </div>
</div>
      )
    }
  )
  ChatActions.displayName = "Input"
  
  export { ChatActions }
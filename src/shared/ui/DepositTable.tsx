import { cn } from "@/lib/utils"
import React from "react"
export interface DepositTableProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {depositRubles: number, availableRubles: number, onFill: () => void, onOutput: () => void}
const DepositTable = React.forwardRef<HTMLParagraphElement, DepositTableProps>(
  ({ className, children, depositRubles, availableRubles, onFill, onOutput,  ...props }, ref) => {
    return (
      
<div className={cn(className, "h-[341px] p-5 bg-[#f6f6f6] rounded-[30px] flex-col justify-start items-start gap-4 inline-flex")}>
  <div className="self-stretch h-[196px] flex-col justify-start items-start gap-4 flex mb-4">
    <div className="h-[82px] flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch text-[#979797] text-base font-gilroy_semibold text-[16px]">Депозит:</div>
      <div className="self-stretch h-[54px] flex-col justify-start items-start gap-1 flex">
        <div className="text-[#252525] text-[24px] font-gilroy_bold">{depositRubles.toLocaleString()} ₽</div>
        <div className="text-[#979797] text-base font-gilroy_semibold text-[16px]">≈ $ {Math.floor(depositRubles / 85)} </div>
      </div>
    </div>
      <hr className="border-[1px] border-solid border-[#D6D6D6] w-full"/>
    <div className="h-[82px] flex-col justify-start items-start gap-2 flex">
      <div className="text-[#979797] text-base font-gilroy_semibold text-[16px]">Доступны мне:</div>
      <div className="self-stretch h-[54px] flex-col justify-start items-start gap-1 flex">
        <div className="text-[#27ae60] text-[24px] font-gilroy_bold">{availableRubles.toLocaleString()} ₽</div>
        <div className="text-[#979797] text-base font-gilroy_semibold text-[16px]">≈ $ {Math.floor(availableRubles / 85)} </div>
      </div>
    </div>
  </div>
  <div className="self-stretch h-[59px] flex-col justify-start items-start gap-[5px] flex ">
    <div className="self-stretch justify-start items-start gap-[5px] inline-flex">
      <div className="pl-[26px] pr-6 pt-5 pb-[19px] bg-[#2b56f6] rounded-[20px] justify-center items-center flex cursor-pointer" onClick={() => onFill()}>
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
        <div className="text-white text-base font-gilroy_semibold" >Пополнить</div>
          <div className="w-7 h-7 pl-[2.39px] pr-[2.19px] pt-[2.83px] pb-[3.02px] justify-center items-center flex">
            <div className="w-full h-full relative">
              <img src={'/assets/icons/download.svg'} className="w-[30px] h-15" />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[26px] pr-6 pt-5 pb-[19px] bg-[#f0f0f0] rounded-[20px] justify-center items-center flex cursor-pointer" onClick={() => onOutput()}>
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="text-[#2b56f6] text-base font-gilroy_semibold">Вывести</div>
          <div className="w-7 h-7 pl-[2.39px] pr-[2.19px] pt-[2.83px] pb-[3.02px] justify-center items-center flex">
          <div className="w-full h-full relative">
          <img src={'/assets/icons/airplaner.svg'} className="w-[30px] h-15" />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
)
DepositTable.displayName = "Input"

export { DepositTable }
import { cn } from "@/lib/utils"
import React from "react"

export interface BankAccountProps
extends React.InputHTMLAttributes<HTMLParagraphElement> {pincode: string, bank_title: string, bank_image: string, account_rubles: number}
const BankAccount = React.forwardRef<HTMLParagraphElement, BankAccountProps>(
  ({ className, children, pincode, bank_title, bank_image, account_rubles, ...props }, ref) => {
    return (
      <div className={cn(className, 'w-full h-[84px] px-5 py-4 bg-[#f6f6f6] rounded-[20px] justify-between items-center inline-flex mb-2')} {...props}>
  <div className="justify-start items-center gap-2 flex">
    <img className="w-8 h-8 rounded-full" src={`/assets/icons/${bank_image}`} />
    <div className="flex-col justify-start items-start inline-flex">
      <div className="text-[#252525] text-[18px] font-gilroy_bold">{bank_title}</div>
      <div className="text-[#979797] text-[16px] font-gilroy_semibold">{pincode}</div>
    </div>
  </div>
  <div className="flex-col justify-center items-end gap-1 inline-flex">
    <div className="justify-start items-center gap-1 inline-flex">
      <div className="text-[#252525] text-[20px] font-mont_bold">{account_rubles.toLocaleString()} ₽</div>
    </div>
    <div className="text-[#979797] text-[16px] font-gilroy_semibold">≈ $ {Math.floor(account_rubles / 85)} </div>
  </div>
</div>
    )
  }
)
BankAccount.displayName = "Input"

export { BankAccount }
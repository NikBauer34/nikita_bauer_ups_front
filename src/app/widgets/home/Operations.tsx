
import { GoBackButton } from "@/shared";
import Image from "next/image";
import Link from "next/link";
export default function Operations() {
  return (
    <div className="w-[334px] h-[328px] p-4 bg-[#f6f6f6] rounded-[30px] flex-col justify-between items-start inline-flex mt-[15px]">
  <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
    <div className="text-[#252525] text-xl font-mont_bold leading-7">Операция 9231 </div>
    <div className="justify-start items-center gap-2 inline-flex">
      <div className="w-7 h-7 p-[3px] bg-[#f0f0f0] rounded-[60px] justify-center items-center flex">
        <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
          <div className="w-[22px] h-[22px]  justify-center items-center inline-flex" >
            <Image src={'/assets/icons/arrow_down_2.svg'} width={22} height={22} alt='uih' />
          </div>
        </div>
      </div>
      <div className="text-[#252525] font-gilroy_semibold text-[16px]">Поступление</div>
    </div>
  </div>
  <div className="flex-col justify-start items-start gap-2 flex">
    <div className="text-[#252525] text-sm font-mont_semibold leading-[21px]">Сумма</div>
    <div className="flex-col justify-start items-start gap-1 flex">
      <div className="justify-start items-center gap-1 inline-flex">
        <div className="text-[#252525] text-[24px] font-gilroy_bold tracking-wide">42 530 ₽</div>
      </div>
    </div>
  </div>
  <div className="justify-start items-center gap-3.5 inline-flex">
    <img className="w-8 h-8 rounded-full" src="/assets/icons/tinkoff.svg" />
    <div className="flex-col justify-center items-start gap-1 inline-flex">
      <div className="text-[#252525] font-gilroy_semibold">СБП</div>
      <div className="text-[#979797] text-sm font-mont_bold leading-[21px]">Т-Банк (Тинькофф)</div>
    </div>
  </div>
  <Link href={'/operation'} className="w-full">
  <GoBackButton text="Принять" className="w-[100%]" />
  </Link>
</div>
  )
}
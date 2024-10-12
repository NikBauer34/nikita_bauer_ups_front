import { Input } from "@/components/ui/input";
import { ArrowLeft, ChatActions, HelpBadge, InfoLabel, MainTitle, SecondaryTitle } from "@/shared";
import Image from "next/image";
export default function Mes() {
  return (
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px]">
      <div className="flex flex-row gap-[60px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center">Чат поддержки</div></SecondaryTitle>

  </div>
  <div className="h-screen flex flex-col justify-center">
  <div className="h-[45px] px-4 py-3 bg-[#2b56f6] rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] justify-start items-start gap-2.5 inline-flex self-end">
  <div className="w-[246px] text-white text-sm font-mont_semibold leading-[21px]">Нужна помощь с переводом</div>
</div>
<div className="h-[66px] justify-start items-start gap-[9px] inline-flex self-start mt-[20px]">
  <div className="w-9 h-9 bg-white rounded-[50px] justify-center items-center flex self-start">
    <img className="w-10 h-10" src="/assets/icons/ava.svg" />
  </div>
  <div className="px-4 py-3 bg-[#f6f6f6] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] justify-start items-start gap-2.5 flex self-start mr-5">
    <div className="w-[247px] text-[#252525] text-sm font-mont_semibold leading-[21px]">С какой операцией вам нужна помощь?</div>
  </div>
</div>
<div className="px-4 py-3 bg-[#f6f6f6] rounded-tr-[20px] rounded-bl-[20px]  rounded-br-[20px] justify-start items-start gap-2.5 flex self-start ml-11 mt-[10px]">
    <div className="w-full text-[#252525] text-sm font-mont_semibold leading-[21px]">2392309 на 120$</div>
  </div>
  <div className="px-4 py-3 bg-[#f6f6f6] rounded-tr-[20px] rounded-bl-[20px]  rounded-br-[20px] justify-start items-start gap-2.5 flex self-start ml-11 mt-[10px]">
    <div className="w-full text-[#252525] text-sm font-mont_semibold leading-[21px]">3920323 на 1239$</div>
  </div>
  <ChatActions />
</div>

    </div>
    </div>
    </div>
  )
}
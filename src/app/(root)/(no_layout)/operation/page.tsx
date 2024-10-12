import { ArrowLeft, GoBackButton, SecondaryParagraph, SecondaryTitle } from "@/shared";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px]">
      <div className="flex flex-row gap-[60px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center">Операция 9231</div></SecondaryTitle>
    
  </div>

  <div className="h-[59px] justify-start items-start gap-[62px] inline-flex mt-[20px] mb-[40px]">
  <div className="flex-col justify-start items-start gap-2 inline-flex">
    <div className="text-[#252525] text-sm font-mont_bold leading-[21px]">Сумма</div>
    <div className="flex-col justify-start items-start gap-1 flex">
      <div className="justify-start items-center gap-1 inline-flex">
        <div className="text-[#252525] text-2xl font-gilroy_bold tracking-wide">42 530 ₽</div>
      </div>
    </div>
  </div>
  <div className="flex-col justify-start items-start gap-2 inline-flex">
    <div className="self-stretch text-[#979797] font-gilroy_semibold">Тип операции</div>
    <div className="justify-start items-center gap-2 inline-flex">
      <div className="w-7 h-7 p-[3px] bg-[#f6f6f6] rounded-[60px] justify-center items-center flex">
        <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
          <div className="w-[22px] h-[22px] justify-center items-center inline-flex">
            <Image src={'/assets/icons/arrow_down_2.svg'} width={22} height={22} alt="no" />
          </div>
        </div>
      </div>
      <div className="text-[#252525] font-gilroy_semibold">Поступление</div>
    </div>
  </div>
</div>
    <div className="flex flex-col self-start justify-start items-start mb-[15px]">
      <SecondaryTitle>Придет на:</SecondaryTitle>
      <SecondaryParagraph>куда будет осуществлен перевод</SecondaryParagraph>
    </div>
    <div className="w-[335px] h-[66px] px-5 py-4 bg-[#f6f6f6] rounded-[20px] justify-start items-center gap-2 inline-flex">
  <img className="w-8 h-8 rounded-full" src="/assets/icons/tinkoff.svg" />
  <div className="flex-col justify-center items-start gap-1 inline-flex">
    <div className="text-[#252525] font-gilroy_semibold">+7 (901) 871-09-12</div>
    <div className="text-[#979797] text-sm font-mont_semibold leading-[21px]">Т-Банк (Тинькофф)</div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
    <div className="text-[#252525] text-base font-gilroy_semibold text-[16px]">143 000 ₽</div>
  </div>
</div>
<SecondaryParagraph className="mt-[20px]">Откуда придет</SecondaryParagraph>
<div className="w-[335px] h-[66px] px-5 py-4 bg-[#f6f6f6] rounded-[20px] justify-start items-center gap-2 inline-flex mb-[70px]">
  <img className="w-8 h-8 rounded-full" src="/assets/icons/tinkoff.svg" />
  <div className="flex-col justify-center items-start gap-1 inline-flex">
    <div className="text-[#252525] font-gilroy_semibold">+7 (901) 871-09-12</div>
    <div className="text-[#979797] text-sm font-mont_semibold leading-[21px]">Т-Банк (Тинькофф)</div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-center items-end gap-1 inline-flex">
    <div className="text-[#252525] text-base font-gilroy_semibold text-[16px]"></div>
  </div>
</div>
<div className="invisible md:visible">
<div className="h-[46px] justify-start items-start gap-3.5 inline-flex">
  <div className="w-11 h-11 relative">
    <Image src={'/assets/icons/quarter.svg'} width={44} height={44} alt="no" />
  </div>
  <div className="w-[267px] flex-col justify-start items-start gap-1 inline-flex ">
    <div className="self-stretch h-[22px] flex-col justify-start items-start gap-0.5 flex">
      <div className="self-stretch text-[#252525] text-lg font-gilroy_bold tracking-tight">Осталось: 6:21</div>
    </div>
    <div className="w-[267px] text-[#979797] font-gilroy_semibold">выберите действие:</div>
  </div>
</div>
<GoBackButton text="Принять перевод" className="w-[335px] mt-[20px]"/>
<div className="h-[58px] justify-start items-start inline-flex mt-[10px]">
  <div className="w-[334px] h-[58px] bg-[#f6f6f6] rounded-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-center text-[#eb5757] font-gilroy_semibold">Отказаться от перевода</div>
  </div>
</div>
</div>
    </div>
    </div>
    </div>
  )
}
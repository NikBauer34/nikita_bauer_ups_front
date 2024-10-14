import { ArrowLeft, GoBackButton, SecondaryTitle } from "@/shared";
import Link from "next/link";

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px]">

      <div className="flex flex-row gap-[70px] items-center justify-around mb-[40px]">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center">Детали</div></SecondaryTitle>
    </div>
      <div className="w-[325px] h-[248px] relative">
  <div className="left-0 top-0 absolute justify-start items-start gap-3.5 inline-flex">
    <div className="w-11 h-11 relative">
      <img src="/assets/icons/quarter.svg" />
    </div>
    <div className="w-[267px] flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch h-11 flex-col justify-start items-start gap-0.5 flex">
        <div className="self-stretch text-[#252525] text-lg font-gilroy_bold tracking-tight">Пополнение создано</div>
        <div className="self-stretch text-[#979797] font-gilroy_semibold">24.12.2024 19:02</div>
      </div>
    </div>
  </div>
  <div className="left-0 top-[102px] absolute justify-start items-start gap-3.5 inline-flex">
    <div className="w-11 h-11 relative">
    <img src="/assets/icons/more_half.svg" />
    </div>
    <div className="w-[267px] flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch h-11 flex-col justify-start items-start gap-0.5 flex">
        <div className="self-stretch text-[#252525] text-lg font-gilroy_bold tracking-tight">Пополнение обрабатывается</div>
        <div className="self-stretch text-[#979797] font-gilroy_semibold">24.12.2024 19:09</div>
      </div>
    </div>
  </div>

  {searchParams?.type == 'success' ? (
    <>
    <div className="left-0 top-[204px] absolute justify-start items-start gap-3.5 inline-flex">
    <div className="w-11 h-11 relative">
      <img src="/assets/icons/success.svg" />
    </div>
    <div className="w-[267px] flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch h-11 flex-col justify-start items-start gap-0.5 flex">
        <div className="self-stretch text-[#252525] text-lg font-gilroy_bold tracking-tight">Пополнение выполнено</div>
        <div className="self-stretch text-[#979797] font-gilroy_semibold">24.12.2024 19:12</div>
      </div>
    </div>
  </div>
  <div className="w-0.5 h-[46px] left-[21px] top-[50px] absolute bg-[#c7e8fd] rounded-[30px]" />
  <div className="w-0.5 h-[46px] left-[21px] top-[152px] absolute bg-[#6fcf97] rounded-[30px]" />
  </>
  ) : (
    <>
      <div className="left-0 top-[204px] absolute justify-start items-start gap-3.5 inline-flex">
    <div className="w-11 h-11 relative">
      <div className="w-[44px] h-[44px] left-[2px] absolute justify-center items-center inline-flex">
        <img  src="/assets/icons/error.svg" />
      </div>
    </div>
    <div className="w-[267px] flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch h-11 flex-col justify-start items-start gap-0.5 flex">
        <div className="self-stretch text-[#252525] text-lg font-gilroy_bold tracking-tight">Операция была отменена</div>
        <div className="self-stretch text-[#979797] font-gilroy_semibold">24.12.2024 19:12</div>
      </div>
    </div>
  </div>
  <div className="w-0.5 h-[46px] left-[21px] top-[50px] absolute bg-[#c7e8fd] rounded-[30px]" />
  <div className="w-0.5 h-[46px] left-[21px] top-[152px] absolute bg-[#eb5757] rounded-[30px]" /> 
    </>
  )}
</div>
<div className="flex flex-col items-center justify-center w-full mt-[100px] invisible md:visible">
      <div className="h-[58px] opacity-30 justify-start items-start inline-flex">
  <div className="w-[334px] h-[58px] bg-[#f6f6f6] rounded-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-center text-[#252525] font-gilroy_semibold">Подать аппеляцию</div>
  </div>
</div>  
<Link href={'/chat'}>
<GoBackButton text="Написать в поддержку" className="w-[335px] mt-[10px]"/>
</Link>

</div>

    </div>
    </div>
    </div>
  )
}
import { ArrowLeft, GoBackButton, SecondaryParagraph, SecondaryTitle } from "@/shared";
import Image from "next/image";
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
      <div className="flex flex-row gap-[10px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center">Пополнение #239231</div></SecondaryTitle>
    
  </div>

    <div className="flex flex-col self-center items-center mt-[40px]">
        <Image src={`/assets/icons/${searchParams?.type}.svg`} alt="no" width={88} height={88} ></Image>
        {searchParams?.type == 'success' ? (
          <SecondaryTitle><div className="flex flex-col items-center mt-[20px]">Пополнение зачисленно</div></SecondaryTitle>
        ) : (
          <SecondaryTitle><div className="flex flex-col items-center mt-[20px]">Пополнение не выполнено</div></SecondaryTitle>
        )}

    </div>
    <div className="flex flex-col self-start mb-[30px]">
      
      
    <div className=" self-center w-[328px] ml-[10px]">
    <div className="h-[216px] flex-col justify-start items-start gap-6 inline-flex mt-[50px]">
    <div className="h-[52px] justify-between items-center inline-flex w-full gap-[70px]">
  <div className="w-full flex-col justify-start items-start gap-2 inline-flex">
    <div className="w-[197px] text-[#979797] font-gilroy_semibold">Дата и время пополнения</div>
    <div className="text-[#252525] font-gilroy_semibold">23.06.2024 18:34</div>
  </div>
  <div className="h-[52px] justify-start items-start flex">
  <Link href={`details?type=${searchParams?.type || ''}`}>
    <div className="w-[52px] h-[52px] bg-[#f6f6f6] rounded-[50px] justify-center items-center gap-2.5 flex">
      
      <div className="w-6 h-6 justify-center items-center flex">
          <img src="/assets/icons/document_income.svg" width={24} height={24} alt="bhi"/>
      </div>
      
    </div>
    </Link>
  </div>
</div>
<div className="h-14 flex-col justify-start items-start gap-2 inline-flex">
  <div className="w-[126px] text-[#979797] font-gilroy_semibold">Тип операции</div>
  <div className="justify-start items-center gap-2 inline-flex">
    <div className="w-7 h-7 p-[3px] bg-[#f6f6f6] rounded-[60px] justify-center items-center flex">
      <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
        <div className="w-[22px] h-[22px] justify-center items-center inline-flex">
          <img src='/assets/icons/arrow_down_2.svg' />
        </div>
      </div>
    </div>
    <div className="text-[#252525] font-gilroy_semibold">Получение</div>
  </div>
</div>
<div className="h-[84px] flex-col justify-start items-start gap-2 inline-flex">
  <div className="self-stretch text-[#979797] font-gilroy_semibold">Реквизиты</div>
  <div className="h-14 flex-col justify-start items-start gap-2 flex">
    <div className="self-stretch justify-start items-center gap-2 inline-flex">
      <img className="w-7 h-7 rounded-full" src="/assets/icons/tinkoff.svg" />
      <div className="text-center text-[#252525] font-gilroy_semibold">Т-Банк (Тинькофф)</div>
    </div>
    <div className="text-center text-[#252525] font-gilroy_semibold">+7 (901) 871-09-12</div>
  </div>
</div>
  <div className="self-stretch justify-start items-start inline-flex">
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="self-stretch text-[#979797] font-gilroy_semibold">Сумма</div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="text-[#252525] font-gilroy_semibold">42 530 ₽</div>
      </div>
    </div>
  </div>
</div>
</div>
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
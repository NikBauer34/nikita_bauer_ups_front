import { ArrowLeft, GoBackButton, SecondaryParagraph, SecondaryTitle } from "@/shared";
import Image from "next/image";
import Link from "next/link";
export default function OpReq(){
  return (
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px]">
      <div className="flex flex-row gap-[60px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center">Операция 9231</div></SecondaryTitle>
    
  </div>

    <div className="flex flex-col self-center items-center mt-[40px]">
      <Image src={'/assets/icons/success.svg'} alt="no" width={88} height={88}></Image>
      <SecondaryTitle><div className="flex flex-col items-center mt-[20px]">Платеж подтвержден</div></SecondaryTitle>
      <SecondaryParagraph><div className="flex flex-col items-center mt-[10px]">Вы подтвердили получение средств</div></SecondaryParagraph>
    </div>
    <div className="flex flex-col self-start mb-[30px]">
      
      
    <div className="h-[216px] flex-col justify-start items-start gap-6 inline-flex mt-[50px]">
  <div className="flex-col justify-start items-start gap-2 flex">
    <div className="w-[185px] text-[#979797] font-gilroy_semibold">Дата и время операции</div>
    <div className="text-[#252525] font-gilroy_semibold">23.06.2024 18:34</div>
  </div>
  <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
    <div className="self-stretch text-[#979797] font-gilroy_semibold">Ваши реквизиты</div>
    <div className="flex-col justify-center items-start gap-1 flex">
      <div className="text-[#252525] font-gilroy_semibold">+7 (901) 871-09-12</div>
      <div className="text-[#979797] font-gilroy_semibold">Т-Банк (Тинькофф)</div>
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
    <div className="flex flex-col items-center justify-center w-full mt-[30px] invisible md:visible">
      <Link href={'/chat'}>
<div className="h-[58px] justify-start items-start inline-flex">
  <div className="w-[334px] h-[58px] bg-[#f6f6f6] rounded-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-center text-black font-gilroy_semibold">Подать аппеляцию</div>
  </div>
</div>
</Link>    
<Link href={'/home'}>
<GoBackButton text="На главную" className="w-[335px] mt-[10px]"/>
</Link>

</div>
    </div>
    </div>
    </div>
  )
}
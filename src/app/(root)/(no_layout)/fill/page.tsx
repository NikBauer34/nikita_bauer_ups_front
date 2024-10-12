'use client'
import { Deposit } from "@/app/widgets";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ArrowLeft, DefaultSelect, GoBackButton, MainTitle, SecondaryParagraph, SecondaryTitle } from "@/shared";
function QrCode({className}: {className: string}) {
  return (
    <div className={cn(className, "w-[213px] h-[213px] pl-[23px] pr-[22px] pt-[23px] pb-[22px] bg-[#f6f6f6] rounded-[30px] justify-center items-center inline-flex")}>
    <img src="/assets/icons/qr.svg" />
  </div>
  )
}

export default function Fill() {
  return (
    <div className="flex flex-1">
    <div className="common-container ">
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row gap-[90px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col ">Пополнение <br /> депозита</div></SecondaryTitle>

  </div>
  <QrCode className="self-center mt-[20px]"/>
  <SecondaryParagraph className=" self-start mt-[30px] mb-[10px]">Валюта пополнения</SecondaryParagraph>

  <DefaultSelect className="w-[335px]" placeholder="Выберите валюту" label="Валюта" items={['Доллар США (USD)']} />
  <SecondaryParagraph className=" self-start mb-[10px] mt-[15px]">Номер счёта</SecondaryParagraph>
  
<GoBackButton text="Вернуться к “Счета и депозит”" className="mt-[110px]"></GoBackButton>
  </div>
      </div>
    </div>
  )
}
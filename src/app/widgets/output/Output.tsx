'use client'
import { Deposit } from "@/app/widgets";
import { Input } from "@/components/ui/input";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ArrowLeft, CopyLink, DefaultSelect, EnterButton, GoBackButton, MainTitle, SecondaryParagraph, SecondaryTitle } from "@/shared";
import { useRouter } from "next/navigation";
export default function Output() {
  const router = useRouter()
  return (
    <div className="flex flex-1">
    <div className="common-container ">
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row gap-[60px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center"><div>Вывод средств</div> <div>с депозита</div></div></SecondaryTitle>

  </div>
  {/* <QrCode className="self-center mt-[20px]"/> */}
  <SecondaryParagraph className=" self-start mt-[30px] mb-[10px]">Доступны для вывода:</SecondaryParagraph>
  <div className="h-[34px] justify-start items-center gap-2 inline-flex">
  <div className="text-[#2b56f6] text-[28px] font-gilroy_bold leading-[33.60px]">21 265 ₽</div>
  <div className="text-[#2b56f6] font-gilroy_bold">≈ $ 250</div>
</div>
<SecondaryParagraph className=" self-start mt-[20px] mb-[10px]">На удержании (заблокированы):</SecondaryParagraph>
<div className="h-7 justify-start items-center gap-2 inline-flex">
  <div className="text-[#bdbdbd] text-xl font-mont_bold leading-7">42 530 ₽</div>
  <div className="text-[#bdbdbd] font-gilroy_semibold">≈ $ 500</div>
</div>
<SecondaryParagraph className=" self-start mt-[40px] mb-[10px]">Информация для вывода</SecondaryParagraph>
<DefaultSelect className="w-[335px] mb-[10px]" placeholder="Выберите валюту" label="Валюта" items={['Доллар США (USD)']} />
<Input className="text-[#979797] text-base font-gilroy_semibold" mb={'80'} placeholder='Реквизиты'/>
<Input className="text-[#979797] text-base font-gilroy_semibold" placeholder='Сумма'/>
<EnterButton text="Вывод средств" className="mt-[110px] invisible md:visible w-full" onClick={() => router.push('/req')}></EnterButton>
  </div>
      </div>
    </div>
  )}
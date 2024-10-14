import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainTitle, OutBadge } from "@/shared";
import Link from "next/link";

export default function Document() {
  return (
    <div className="flex flex-1 mb-[70px] md:mb-[0px]">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[367px] mb-[70px] md:mb-[0px]">
      <MainTitle className="ml-[15px]">История заданий</MainTitle>
      <Tabs defaultValue="daily" className="w-[345px] self-center h-[40px] bg-[#f6f6f6] mb-[10px] rounded-[20px] mt-[30px]">
  <TabsList>
    <TabsTrigger value="daily">За день</TabsTrigger>
    <TabsTrigger value="monthly">За месяц</TabsTrigger>
    <TabsTrigger value="all">За все время</TabsTrigger>
  </TabsList>
</Tabs>

<div className="w-full h-[121px] p-5 bg-[#f6f6f6] rounded-[30px] flex-col justify-between items-start inline-flex">
  <div className="self-stretch justify-start items-start inline-flex">
    <div className="text-[#979797] font-gilroy_semibold">Суммарно пополнений</div>
  </div>
  <div className="flex-col justify-center items-start gap-1 flex">
    <div className="justify-start items-center gap-1 inline-flex">
      <div className="text-[#979797] text-2xl font-gilroy_bold uppercase">$</div>
      <div className="text-[#252525] text-2xl font-gilroy_bold uppercase tracking-wide">1,320</div>
    </div>
    <div className="text-[#979797] text-sm font-gilroy_semibold">≈ 110 240 ₽</div>
  </div>
</div>

    <Link href={'/income?type=success'} className="w-full">
    <OutBadge text="(зачис.) #239231" date="20.07.2023 19:00" leftAmount={12573} rightAmount={1573} className="mt-[10px]"/>
    </Link>
    <Link href={'/income?type=error'} className="w-full">
    <OutBadge text="(не зачис.) #239231" date="20.07.2023 19:00" leftAmount={12573} rightAmount={1573} className="mt-[10px]"/>
    </Link>
    <OutBadge text="Вывод #328293" date="20.07.2023 23:18" leftAmount={12573} rightAmount={-1573} className="mt-[10px]"/>

    </div>
    </div>
    </div>
  )
}
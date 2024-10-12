'use client'
import { HelpBadge, InfoLabel, MainTitle } from "@/shared";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Chat() {
  const router = useRouter()
  return (
    <div className="flex flex-1 mb-[70px] md:mb-[0px]">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px] mb-[70px] md:mb-[0px]">
      <MainTitle><div className="flex flex-col items-start"><div>Чат по операциям и</div> <div>поддержка</div></div></MainTitle>
      <div className="w-[335px] h-[115px] justify-start items-start gap-1 inline-flex mt-[30px]">
  <HelpBadge text="частые вопросы" icon="Info_circle.svg" />
  <HelpBadge text='помощь со сделками' icon="danger.svg" />
</div>
<InfoLabel icon="ava.svg" time='17:54' amount={2} title="Чат поддержки" paragraph="отлично 👍" className="mt-[25px] cursor-pointer" onClick={() => router.push('/mes')}/>
<InfoLabel icon="bell.svg" time='13:04' amount={1} title="Системные уведомления" paragraph="проведен на +7 983 989 42 98" className="mt-[5px]"/>
    </div>
    </div>
    </div>
  )
}
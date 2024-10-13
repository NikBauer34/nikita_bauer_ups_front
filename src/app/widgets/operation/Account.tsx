import { ArrowLeft, EnterButton, GoBackButton, IncomeBadge, SecondaryParagraph, SecondaryTitle } from "@/shared";
import Image from "next/image";
import Link from "next/link";
export default function Account() {
  return (
    <>
      <div className="flex flex-col self-start justify-start items-start mb-[15px]">
      <SecondaryTitle>Придет на:</SecondaryTitle>
      <SecondaryParagraph>куда будет осуществлен перевод</SecondaryParagraph>
    </div>
<IncomeBadge icon="tinkoff.svg" amount={143000} bank="Т-Банк (Тинькофф)" phone="+7 (901) 871-09-12"/>
<SecondaryParagraph className="mt-[20px]">Откуда придет</SecondaryParagraph>
<IncomeBadge icon="tinkoff.svg" bank="Т-Банк (Тинькофф)" phone="+7 (901) 871-09-12"/>
<div className="invisible md:visible mt-[40px]">
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
<Link href={'/op_req'}>
<EnterButton text="Принять перевод" className="w-[335px] mt-[20px]"/>
</Link>
<Link href={'/home'}>
<div className="h-[58px] justify-start items-start inline-flex mt-[10px]">
  <div className="w-[334px] h-[58px] bg-[#f6f6f6] rounded-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-center text-[#eb5757] font-gilroy_semibold">Отказаться от перевода</div>
  </div>
</div>
</Link>
</div>
    </>
  )
}
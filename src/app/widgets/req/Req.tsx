'use client'
import { GoBackButton, SecondaryParagraph, SecondaryTitle } from "@/shared";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Req() {
  const router = useRouter()
  return (
    <div className="flex flex-1">
    <div className="common-container ">
      <div className="flex flex-col items-start justify-center">
        <div className=" flex flex-col mt-[50px] items-center justify-center w-[335px]">
        <Image src={'/assets/icons/success.svg'} alt="no" width={88} height={88}></Image>
        <SecondaryTitle><div className="flex flex-col items-center mt-[20px]"><div>Заявка на вывод – </div> <div>создана</div></div></SecondaryTitle>
        <SecondaryParagraph><div className="flex flex-col items-center mt-[10px]"><div>В течение 2 часов на реквизиты</div> <div>будет отправлена сумма</div></div></SecondaryParagraph>
        <GoBackButton text="Вернуться к “Счета и депозит”" className="mt-[110px] invisible md:visible w-full" onClick={() => router.push('/')}></GoBackButton>
      </div>
      </div>
      </div>
      </div>
  )
}
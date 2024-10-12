import Image from "next/image";
import { GoBackButton } from "../ui/GoBackButton";
import { Input } from "@/components/ui/input";

export default function BottomChat() {
  return (
    <div className="bottom-button">
  <div className="h-[54px] justify-center items-center gap-[7px] inline-flex w-full pb-[10px]">
  <div className="w-[274px] h-[54px] px-[18px] py-2.5 rounded-[15px] justify-center items-center gap-2 flex">
    <div className="grow shrink basis-0 h-[38px] flex-col justify-center items-start inline-flex">
      <Input className="font-mont_regular text-[14px] text-[#979797]"  placeholder="Введите сообщение"></Input>
    </div>
  </div>
  <div className="p-[15px] bg-[#2b56f6] rounded-[50px] justify-start items-start gap-2.5 flex">
    <div className="w-[24px] h-[24px] justify-center items-center flex">
      <Image src={'/assets/icons/send.svg'} width={24} height={24} alt='hio' />
    </div>
  </div>
</div>
</div>
  )
}
import Link from "next/link";
import { GoBackButton } from "../ui/GoBackButton";
import Image from "next/image";
export default function OperationReqButtons() {
  return (
    <div className="bottom-button">
      <div className="flex flex-col items-center justify-center w-full">
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
  )
}
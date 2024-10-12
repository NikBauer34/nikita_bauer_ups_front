'use client'
import { useRouter } from "next/navigation";
import { GoBackButton } from "../ui/GoBackButton";

export default function BottomButton({text}: {text: string}) {
  const router = useRouter()
  return (
    <div className="bottom-button flex items-center justify-center w-full pb-[10px] px-10">
      <GoBackButton onClick={() => router.back()} text={text} className="w-[100%] self-center"></GoBackButton>
    </div>
  )
}
'use client'
import { useRouter } from "next/navigation";
import { GoBackButton } from "../ui/GoBackButton";
import { EnterButton } from "../ui/EnterButton";

export default function BottomRouterButton({text, route}: {text: string, route: string}) {
  const router = useRouter()
  console.log(route)
  return (

    <div className="bottom-button flex items-center justify-center w-full pb-[10px] px-10">
      <EnterButton onClick={() => router.push(route)} text={text} className="w-[100%] self-center"></EnterButton>
    </div>
  )
}
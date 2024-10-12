import { MainTitle } from "@/shared";
import Income from "./Income";
import Operations from "./Operations";

export default function Home() {
  return (
    <div className="flex flex-1 mb-[70px] md:mb-[0px]">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px] mb-[70px] md:mb-[0px]">

      <MainTitle className="self-start">Главная</MainTitle>
      <Income />
      <Operations />

    </div>
    </div>
    </div>
  )
}
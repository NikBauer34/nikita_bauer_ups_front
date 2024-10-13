import { ArrowLeft, GoBackButton, IncomeBadge, SecondaryParagraph, SecondaryTitle } from "@/shared";
import Image from "next/image";
import Data from "./Data";
import Account from "./Account";
export default function Operation() {
  return (
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px]">
      <div className="flex flex-row gap-[60px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center">Операция 9231</div></SecondaryTitle>
    
  </div>

    <Data />
    <Account />
    </div>
    </div>
    </div>
  )
}
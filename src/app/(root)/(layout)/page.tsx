'use client'
import { Deposit } from "@/app/widgets";
import { Button } from "@/components/ui/button";
import { DepositTable, MainTitle } from "@/shared";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 mb-[100px] md:mb-[0px]">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[367px] mb-[100px] md:mb-[0px]">
  <Deposit />
  </div>
      </div>
    </div>
  );
}
//h
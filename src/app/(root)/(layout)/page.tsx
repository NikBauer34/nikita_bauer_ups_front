'use client'
import { Deposit } from "@/app/widgets";
import { Button } from "@/components/ui/button";
import { DepositTable, MainTitle } from "@/shared";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col">
  <Deposit />
  <h1 className="mt-[100px] invisible">hh</h1>
  </div>
      </div>
    </div>
  );
}
//h
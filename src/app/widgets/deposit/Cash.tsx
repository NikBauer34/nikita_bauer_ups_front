'use client'
import { DepositTable, MainTitle } from "@/shared";
import { useRouter } from "next/navigation";

export default function Cash() {
  const router = useRouter()
  return (
    <>
    <MainTitle className="">Счета и депозит</MainTitle>
    <DepositTable depositRubles={42530} availableRubles={21265} onFill={() => router.push('fill')} onOutput={() => router.push('output')} className="mb-[50px]"/></>
  )
}
'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/shared"
import React, { SyntheticEvent } from "react"
import Image from "next/image"
import { signOut } from "next-auth/react"
function ProfileForm({ className }: React.ComponentProps<"form">) {
  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault()
    await signOut()
  }
  return (
    <div className=" flex flex-col items-center">
    <div className="w-[335px] h-[70px] relative">
      <div className="w-[335px] left-0 top-0 absolute text-[#252525] text-[28px] font-gilroy_bold leading-[33.60px]">Вы уверены, что хотите удалить аккаунт </div>
      <Image src={'/assets/icons/vector-black.svg'} width={59} height={31} alt="ssb" className="right-11 top-9 absolute" />
      <div className="right-6 top-9 absolute text-[#252525] text-[28px] font-gilroy_bold leading-[33.60px]">?</div>
    </div>
    <div className="self-stretch text-[14px] font-mont_semibold">С акаунтом удалится вся история транзакций, привязки к счетам и баланс депозита</div>
    <div className="h-[58px] justify-start items-start inline-flex">
  <div className="w-[334px] h-[58px] bg-[#eb5757] rounded-[50px] justify-center items-center gap-2.5 flex mt-[10px]" onClick={async (e) => await onClick(e)}>
    <div className="text-center text-white font-gilroy_semibold">Удалить аккаунт</div>
  </div>
</div>
    </div>
  )
}
export default function Draw() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <div className="w-full h-[58px]  pt-[17px] pb-[21px] bg-[#f6f6f6] rounded-[50px] justify-center items-center inline-flex mt-[50px]">
  <div className="text-center text-[#eb5757] text-base font-gilroy_semibold w-full">Удалить аккаунт</div>
</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }
return (
  <Drawer open={open} onOpenChange={setOpen}>
    <DrawerTrigger asChild>
    <div className="w-full h-[58px]  pt-[17px] pb-[21px] bg-[#f6f6f6] rounded-[50px] justify-center items-center inline-flex mt-[50px]">
  <div className="text-center text-[#eb5757] text-base font-gilroy_semibold w-full">Удалить аккаунт</div>
</div>
    </DrawerTrigger>
    <DrawerContent>
      <ProfileForm className="px-4" />
      <DrawerFooter className="pt-2">
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)
}
import { InviteBadge, LogoutIcon, MainTitle, PersonBadge, SecondaryParagraph, SecondaryTitle } from "@/shared";
import Draw from "./Draw";
import Link from "next/link";
export default function Profile() {
  return (
    <>
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px] mb-[50px]">
    <div className="flex justify-between w-full mb-[20px]">
  
  <MainTitle><div className="flex flex-col items-center">Профиль</div></MainTitle>
  <LogoutIcon />

  </div>
  <div className="w-full h-6 justify-between items-center inline-flex">
  <SecondaryParagraph>Мои данные</SecondaryParagraph>
  <div className="w-6 h-6 justify-center items-center flex">
    <img className="w-4 h-5" src="/assets/icons/profile.svg" />
  </div>
</div>
  <PersonBadge text="Email" data="schooltalents@urfu.ru" />
  <PersonBadge text="Пароль" data="*******" />
<div className="w-full h-6 justify-between items-center inline-flex mt-[40px] mb-[10px]">
  <SecondaryParagraph>Реферальная программа</SecondaryParagraph>
  <div className="w-6 h-6 justify-center items-center flex">
    <img className="w-4 h-5" src="/assets/icons/3_user.svg" />
  </div>
</div>
<Link href='/ref_prog' className="w-full">
<InviteBadge text="Приглашения" subtitle="Приглашенные рефералы" icon="3_user_black.svg" />
</Link>
<Draw/>
</div>
</div>
</div>
</>
  )
}
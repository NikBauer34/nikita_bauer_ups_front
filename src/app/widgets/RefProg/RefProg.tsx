import { ArrowLeft, CopyLink, InviteBadge, PinInput, SecondaryParagraph, SecondaryTitle } from "@/shared";

export default function RefProg() {
  return (
    <div className="flex flex-1">
    <div className="common-container">
      <div className="flex flex-col items-start justify-center w-[335px]">
      <div className="flex flex-row gap-[60px] items-center justify-around">
  <ArrowLeft />
  <SecondaryTitle><div className="flex flex-col items-center"><div>Реферальная</div> <div>программа</div></div></SecondaryTitle>
    
  </div>
  <div className="w-full h-6 justify-between items-center inline-flex mt-[15px] mb-[15px]">
  <SecondaryParagraph>Пригласить</SecondaryParagraph>
  <div className="w-6 h-6 justify-center items-center flex">
    <img className="w-[24px] h-[24px]" src="/assets/icons/add_user.svg" />
  </div>
</div>
 
    <div className="h-[58px] flex-col justify-between items-start gap-3.5 inline-flex w-full mb-[15px]">
      <div className="self-stretch justify-start items-start gap-1.5 inline-flex">
        {[4, 2, 6, 6, 9].map(el =>

          <PinInput data={el} key={Date.now()}/>
        )}
      </div>
    </div>

    <CopyLink className='w-[335px]' text='tLPqNMJBWC9m72nUvuGXej5YcETwF8frdQSHKaA3kZzRV'/>

    <div className="w-full h-6 justify-between items-center inline-flex mt-[80px]">
  <SecondaryParagraph>Приглашеные</SecondaryParagraph>
  <div className="w-6 h-6 justify-center items-center flex">
    <img className="w-[24px] h-[24px]" src="/assets/icons/3_user.svg" />
  </div>
</div>

<InviteBadge text="schooltalents@urfu.ru" subtitle="24.05.2024"  className="mb-[10px]" />
<InviteBadge text="schooltalents@urfu.ru" subtitle="24.05.2024"/>

  </div>
  </div>
  </div>
  )
}
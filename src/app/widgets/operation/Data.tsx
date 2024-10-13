import Image from "next/image"
export default function Data() {
  return (
    <div className="h-[59px] justify-start items-start gap-[62px] inline-flex mt-[20px] mb-[40px]">
  <div className="flex-col justify-start items-start gap-2 inline-flex">
    <div className="text-[#252525] text-sm font-mont_bold leading-[21px]">Сумма</div>
    <div className="flex-col justify-start items-start gap-1 flex">
      <div className="justify-start items-center gap-1 inline-flex">
        <div className="text-[#252525] text-2xl font-gilroy_bold tracking-wide">42 530 ₽</div>
      </div>
    </div>
  </div>
  <div className="flex-col justify-start items-start gap-2 inline-flex">
    <div className="self-stretch text-[#979797] font-gilroy_semibold">Тип операции</div>
    <div className="justify-start items-center gap-2 inline-flex">
      <div className="w-7 h-7 p-[3px] bg-[#f6f6f6] rounded-[60px] justify-center items-center flex">
        <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
          <div className="w-[22px] h-[22px] justify-center items-center inline-flex">
            <Image src={'/assets/icons/arrow_down_2.svg'} width={22} height={22} alt="no" />
          </div>
        </div>
      </div>
      <div className="text-[#252525] font-gilroy_semibold">Поступление</div>
    </div>
  </div>
</div>
  )
}
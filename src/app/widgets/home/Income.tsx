import { Switch } from "@/components/ui/switch";

export default function Income() {
  return (
    <>
    <div className="w-full h-[121px] p-5 bg-gradient-to-l from-[#000036] to-[#2b56f6] rounded-[30px] flex-col justify-between items-start inline-flex mt-[20px]">
  <div className="text-white font-gilroy_semibold">Суммарно поступлений</div>
  <div className="justify-start items-center gap-1 inline-flex">
    <div className="text-white text-2xl font-gilroy_bold uppercase tracking-wide">2 030 ₽</div>
  </div>
      </div>

      <div className="w-[335px] h-[45px] p-4 bg-[#f6f6f6] rounded-[30px] justify-between items-center inline-flex mt-[10px]">
  <div className="w-[219px] flex-col justify-start items-start gap-0.5 inline-flex">
    <div className="text-[#252525] text-sm font-mont_semibold leading-[21px]">Присылать уведомления</div>
  </div>
  <div className="w-[42px] h-[30px] pl-[3.50px] pr-[2.50px] pt-[4.90px] pb-[3.10px] justify-center items-center flex">
    <div className="w-9 h-[22px] relative">
    <Switch className="data-[state=checked]:bg-[#2B56F6] data-[state=unchecked]:bg-white" />

    </div>
  </div>
</div>
</>
  )
}
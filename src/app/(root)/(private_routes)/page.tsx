import { Button } from "@/components/ui/button";
import { MainTitle } from "@/shared/ui/MainTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <MainTitle text="Войти"></MainTitle>
    </div>
  );
}
//h
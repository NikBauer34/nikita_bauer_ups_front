'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const bottombarLinks = [
  {
    route: "/",
    label: "home",
  },
  {
    route: "/explore",
    label: "document",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];

const Bottombar = () => {
  const pathname = usePathname()

  return (
    <section className="bottom-bar">
      <div className="w-full h-14 px-5 justify-center items-center gap-1 inline-flex pb-[10px]">
  <div className="w-14 h-14 p-4 bg-white rounded-[40px] justify-center items-center gap-2 flex shadow-xl">
    <Link href={'/home'}>
    <div className="w-6 h-6 px-[2.50px] py-0.5 justify-center items-center flex">
    <img className="w-[18px] h-5" src={pathname == '/home' ? '/assets/icons/home-black.svg': '/assets/icons/home.svg'} />
    </div>
    </Link>
  </div>
  <div className="grow shrink basis-0 h-14 py-[18px] bg-white shadow-xl rounded-[40px] justify-center items-stretch gap-[30px]  ml-3 mr-3 pl-12 flex">
    <Link href={'/document'}>
  <div className="w-6 h-6 px-[3px] py-0.5 justify-center items-center flex">
      <img className="w-[18px] h-5" src={pathname == '/document' ? '/assets/icons/document-black.svg': '/assets/icons/document.svg'} />
    </div>
    </Link>
    <Link href={'/chat'}>
    <div className="w-6 h-6 px-[3px] py-0.5 justify-center items-center flex">
<img className="w-[18px] h-5" src={pathname == '/chat' ? '/assets/icons/chat-black.svg': '/assets/icons/chat.svg'} />
    </div>
    </Link>
    <Link href={'/'}>
    <div className="w-6 h-6 p-[3px] justify-center items-center flex">
      <img className="w-[18px] h-[18px]" src={pathname == '/' ? '/assets/icons/card-black.svg': '/assets/icons/card.svg'} />
    </div>
    </Link>
    <div className="w-6 h-6 px-[1.50px] py-1 justify-center items-center flex" />
  </div>
  <div className="w-14 h-14 p-4 bg-white shadow rounded-[40px] justify-center items-center gap-2 flex shadow-xl">
  <Link href={'/profile'}>
    <div className="w-6 h-6 px-1 py-0.5 justify-center items-center flex">
      <img className="w-4 h-5 hue-rotate-30" src={pathname == '/profile' ? '/assets/icons/profile-black.svg': '/assets/icons/profile.svg'} />
    </div>
    </Link>
  </div>
</div>
    </section>
  );
};

export default Bottombar;
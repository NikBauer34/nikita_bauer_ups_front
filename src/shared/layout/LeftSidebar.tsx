'use client'
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SyntheticEvent } from "react";
export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/home",
    label: "Главная",
  },
  {
    imgURL: "/assets/icons/document.svg",
    route: "/document",
    label: "История заданий",
  },
  {
    imgURL: "/assets/icons/chat.svg",
    route: "/chat",
    label: "Чат",
  },
  {
    imgURL: "/assets/icons/card.svg",
    route: "/",
    label: "Счета",
  },
  {
    imgURL: "/assets/icons/profile.svg",
    route: "/profile",
    label: "Профиль",
  },
];
export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};
const LeftSidebar = () => {
  const pathname = usePathname()
  const onLogOut = async (e: SyntheticEvent) => {
    e.preventDefault()
    await signOut()
  }
  return (
    <nav className="leftsidebar overflow-scroll custom-scrollbar">
      <div className="flex flex-col gap-11">
        <Link href="/" className="flex gap-3 items-center">
          <img
            src="/assets/icons/vector.svg"
            alt="logo"
            width={120}
            height={36}
          />
        </Link>
          <Link href={`/`} className="flex gap-3 items-center">
            <img
              src={"/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-white">{'hu'}</p>
              <p className="small-regular text-light-3">@{'jg'}</p>
            </div>
          </Link>


        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}>
                <Link
                  href={link.route}
                  className="flex gap-4 items-center p-4 text-white">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost text-white bottom-0 "
        onClick={async (e) => await onLogOut(e)}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Выйти</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className="flex h-screen overflow-y-scroll no-scrollbar">

    <div className="w-full md:flex">
    {/* <Topbar />
    <LeftSidebar /> */}

    <section className="flex flex-1 h-full">

      {children}

    </section>

    {/* <BottomRouterButton text='Вывод средств' route="/req"/> */}
  </div>
  </div>
  )
}
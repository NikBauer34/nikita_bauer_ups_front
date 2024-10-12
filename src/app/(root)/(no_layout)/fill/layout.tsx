import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className="flex h-screen overflow-y-scroll no-scrollbar">{children}</div>
  )
}
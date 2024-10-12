import { ReactNode } from "react";

export default async function PrivateLayout({children}: {children: ReactNode}) {
  return <>{children}</>
}
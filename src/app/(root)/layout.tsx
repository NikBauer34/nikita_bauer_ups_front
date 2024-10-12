import { ReactNode } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function PrivateLayout({children}: {children: ReactNode}) {
  const session = await getServerSession(authOptions)
  if (!session?.user) redirect('/login')
  return <>{children}</>
}
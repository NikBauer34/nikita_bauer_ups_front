'use client'
import { Toaster } from 'react-hot-toast'
import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";
export function Providers({children}: PropsWithChildren) {
  return (
    <SessionProvider>
      <Toaster />
      {children}
    </SessionProvider>
  )
}
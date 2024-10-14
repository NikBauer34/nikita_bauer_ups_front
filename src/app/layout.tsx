import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Topbar from "../shared/layout/TopBar";
import LeftSidebar from "../shared/layout/LeftSidebar";
import Bottombar from "../shared/layout/Bottombar";
import { Providers } from "./providers";
import { SITE_DESCRIPTION, SITE_NAME } from "@/shared";

const gilroyBold = localFont({
  src: "./fonts/gilroy-bold.ttf",
  variable: "--font-gilroy-bold",
});
const gilroySemiBold = localFont({
  src: "./fonts/gilroy-semibold.ttf",
  variable: "--font-gilroy-semibold",
});
const montRegular = localFont({
  src: "./fonts/mont-regular.ttf",
  variable: "--font-mont-regular",
});
const montBold = localFont({
  src: "./fonts/mont-bold.ttf",
  variable: "--font-mont-bold",
});
const montSemiBold = localFont({
  src: "./fonts/mont-semibold.ttf",
  variable: "--font-mont-semibold",
});
export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${gilroyBold.variable} ${gilroySemiBold.variable} ${montRegular.variable} ${montBold.variable} ${montSemiBold.variable}`}
      >

      
        <Providers>{children}</Providers>

      </body>
    </html>
  );
}

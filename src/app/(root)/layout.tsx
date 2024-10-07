import Bottombar from "../../shared/layout/Bottombar";
import LeftSidebar from "../../shared/layout/LeftSidebar";
import Topbar from "../../shared/layout/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        {children}
      </section>

      <Bottombar />
    </div>

  );
}
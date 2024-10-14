import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
const Topbar = () => {

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link href="/" className="flex gap-3 items-center">
          <img
            src="/assets/icons/vector.svg"
            alt="logo"
            width={110}
            height={300}
          />
        </Link>

        <div className="flex gap-4">
          <Link href={'/login'}>
          <Button
            variant="ghost"
            className="shad-button_ghost">
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          </Link>
          <Link href={`/`} className="flex-center gap-3">
            <Image
            width="0"
            height="0"
            sizes="100vw"
              src={"/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
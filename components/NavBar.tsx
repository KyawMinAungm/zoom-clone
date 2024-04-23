import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="flex bg-dark-1 justify-between w-full z-50 px-6 py-4 lg:px-10">
      <div className="flex ">
        <Link href="/" className="flex w-12 items-center gap-1">
          <Image src="/icons/logo.svg" width={32} height={32} alt="Zoom" />
          <p className="text-[26px] font-extrabold text-white max-sm:hidden">
            Zoom
          </p>
        </Link>
      </div>
      <div className="flex gap-3">
        <SignedIn>
        <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;

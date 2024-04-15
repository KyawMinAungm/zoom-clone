"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sideBarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    const pathname = usePathname()
  return (
    <section className="flex w-full max-w-[264px] md:hidden">
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={32}
            height={32}
            alt="hamburger-icon"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-1 border-none ">
          
            <Link href="/" className="flex items-center gap-1">
              <Image src="/icons/logo.svg" width={32} height={32} alt="Zoom" />
              <p className="text-[26px] font-extrabold text-white ">
                Zoom
              </p>
            </Link>
            <div className=" flex  flex-col justify-between h-[calc(100vh-72px)]  overflow-y-auto">
                <SheetClose   className="flex  flex-col pt-16 gap-4 h-full text-white">
                {
                sideBarLinks.map(link => { 
                    const isActive = pathname === link.route 
                    return(
                    <SheetClose asChild key={link.label}>
                        <Link  href={link.route} className={cn('flex justify-start p-4 rounded-lg w-full gap-4', {'bg-blue-1' : isActive})}  >
                            <Image alt={link.label} src={link.imgUrl} width={24} height={24}/>
                            <p className='font-semibold '>{link.label}</p>
                        </Link>
                        </SheetClose>
                    )}
                )
            }
                </SheetClose>

            </div>
          
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

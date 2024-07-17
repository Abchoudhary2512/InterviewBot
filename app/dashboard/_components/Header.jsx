"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  useEffect(()=>{
    
  },[])
  return (
    <div className="flex p-4 justify-between items-center bg-secondary shadow-md ">
      <Image src={"./logo.svg"} width={160} height={100} alt="logo" />
      <ul className="hidden md:flex gap-7 ">
        <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer
            ${path=='/dashboard' && 'text-primary font-bold'}
            `}>
          Dashboard
        </li>
        <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer
            ${path=='/dashboard/questions' && 'text-primary font-bold'}
            `}>
          Questions
        </li>
        <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer
            ${path=='/dashboard/upgrade' && 'text-primary font-bold'}
            `}>
          Upgrade
        </li>
        <li className={`hover:text-primary hover:font-bold translate-all cursor-pointer
            ${path=='/dashboard/how' && 'text-primary font-bold'}
            `}>
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;

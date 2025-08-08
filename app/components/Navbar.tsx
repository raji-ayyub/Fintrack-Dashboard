"use client";

import Image from "next/image";

import Logo from "@/public/images/logo.png";
import Bars from "@/public/icons/menu.svg";
import Search from "@/public/icons/search.svg";
import Profile from "@/public/images/profile.png";
import Boxes from "@/public/icons/app-grid.svg";

export default function Navbar() {


  return (
    <nav className="bg-[#FCFDFD] hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Image src={Bars} alt="menu" width={24} height={24} />
            <Image src={Logo} alt="logo" width={112} height={32} />
          </div>
          <div className="flex items-center space-x-4">
            <button type="button" className="w-[24px] h-[24px] flex items-center justify-center">
              <Image src={Search} alt="search" width={24} height={24} />
            </button>
            <button type="button" className="w-[24px] h-[24px] flex items-center justify-center">
              <Image src={Boxes} alt="apps" width={24} height={24} />
            </button>
            <div className="w-[40px] h-[40px] flex items-center justify-center overflow-hidden rounded-full">
              <Image src={Profile} alt="profile" width={40} height={40} className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

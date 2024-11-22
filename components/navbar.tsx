"use client";

import { Menu, LayoutGrid, Bell } from "lucide-react";
import { useMediaQueryContext } from "./contextApp";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import EPaper from "@/public/e-paper.svg";
import Avatar from "@/public/avatar.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const { isMobile } = useMediaQueryContext();

  return (
    <div className="w-full bg-white flex flex-row px-4 py-3 items-center border border-neutral-200">
      <Menu
        className="w-10 h-10 bg-neutral-100 rounded-sm cursor-pointer mr-4 p-2"
        id="menu-button"
        onClick={toggleSidebar}
      />
      <div className="flex flex-row">
        <Image src={Logo} alt="Logo" className="w-10 h-10" />
        <Image src={EPaper} alt="Logo Escrita" className="w-24 h-10 " />
      </div>
      <div className="flex px-4">
        <div className="h-[48px] w-px bg-neutral-200 self-center" />
      </div>
      <div className="flex flex-row items-center gap-2">
        <LayoutGrid className="w-10 h-10 text-neutral-700" />
        {!isMobile && <p className="text-sm">Soluções</p>}
      </div>
      <div className="flex flex-row ml-auto items-center" id="user-group">
        {!isMobile && <Bell className="w-6 h-6 mr-6" />}
        <div className="flex flex-row ml-auto">
          {isMobile && (
            <Select>
              <SelectTrigger className="h-12 gap-2">
                <div>
                  <Image
                    src={Avatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </SelectTrigger>
            </Select>
          )}
          {!isMobile && (
            <Select>
              <SelectTrigger className="h-12 gap-2">
                <div>
                  <Image
                    src={Avatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="max-h-8">
                  <p className="text-sm font-bold">Gabriel Nery Caus</p>
                  <p className="text-xs text-left">Desenvolvimento</p>
                </div>
              </SelectTrigger>
            </Select>
          )}
        </div>
      </div>
    </div>
  );
};

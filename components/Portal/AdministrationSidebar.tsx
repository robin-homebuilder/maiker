"use client"

import Link from "next/link";
import Image from "next/image";

import { useSelectedLayoutSegment } from 'next/navigation';

import { FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa"

import { NavigationLinks, NavigationLinksSecond, NavigationPortalAdministration } from "@/libs/navigationLinks";

export default function AdministrationSideBar() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <section className="w-[335px] h-full bg-primary fixed shadow-sidebarPortal z-40">
      <div className="p-[30px] flex flex-wrap justify-center w-full">
        <Image src="/Maiker-Construction-Logo.svg" alt="Maiker Logo"  width={120} height={60} className="w-[120px] h-auto mb-[30px]"/>
        <hr className="border-white w-full"/>
      </div>
      <div>
        <ul className="border-y border-[#1972BB]">
          {NavigationPortalAdministration.map((item,index) => 
            <li className={`text-[500] ${index != NavigationPortalAdministration.length - 1 && "border-b"} border-[#1972BB] px-[30px] py-3 ${activeSegment === item.link ? "bg-portalBG" : "bg-none"}`} key={index}>
              <Link href={`/administration/${item.link}`} className="block w-full">{item.name}</Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
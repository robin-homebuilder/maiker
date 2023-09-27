"use client"

import Link from "next/link";
import Image from "next/image";

import { useSelectedLayoutSegment } from 'next/navigation';

import { NavigationPortalClientPortal } from "@/libs/navigationLinks";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function ClientPortalSideBar() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <section className="w-[335px] h-full bg-primary fixed shadow-sidebarPortal z-40">
      <div className="p-[30px] flex flex-wrap justify-center w-full">
        <Image src="/Maiker-Construction-Logo.svg" alt="Maiker Logo"  width={120} height={60} className="w-[120px] h-auto mb-[30px]"/>
        <hr className="border-white w-full"/>
      </div>
      <div className="px-[30px] pb-[30px]">
        <div className="mb-4">
          <p className="uppercase text-[10px]">Client Name</p>
          <p className="font-[700] text-[18px]">M.Palle & S.Palle</p>
        </div>
        <div className="mb-4">
          <p className="uppercase text-[10px]">Project Address</p>
          <p className="font-[700] text-[18px]">7 Ben Street, Chermside West, Qld, 4032</p>
        </div>
        <div className="mb-4">
          <p className="uppercase text-[10px] mb-2.5">Project Status</p>
          <button type="button" className="w-full h-[42px] rounded-[10px] bg-warning px-[30px] flex justify-between items-center text-[18px] font-[700] shadow-mainShadow">Under Construction <FaChevronDown /></button>
        </div>
        <div>
          <p className="uppercase text-[10px] mb-2.5">Contact Maiker</p>
          <a href="mailto:admin@maiker.com.au">
            <button type="button" className="w-full h-[42px] rounded-[20px] px-[30px] bg-white shadow-mainShadow text-dark text-[16px] font-[600] flex justify-between items-center">Email Maiker<FaChevronRight /></button>
          </a>
        </div>
      </div>
      <div>
        <ul className="border-y border-[#1972BB]">
          {NavigationPortalClientPortal.map((item,index) => 
            <li className={`text-[500] ${index != NavigationPortalClientPortal.length - 1 && "border-b"} border-[#1972BB] px-[30px] py-3 ${activeSegment === item.link ? "bg-portalBG" : "bg-none"}`} key={index}>
              <Link href={`/client-portal/${item.link}`} className="block w-full">{item.name}</Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
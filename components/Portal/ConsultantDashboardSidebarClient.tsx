"use client"

import Link from "next/link";
import Image from "next/image";

import { useSelectedLayoutSegment } from 'next/navigation';

import { NavigationPortalClientPortal, NavigationPortalConsultantDashboard } from "@/libs/navigationLinks";
import { ProjectStatusOptions } from "@/libs/selectOptions";

import { ClientDataForClientPageProps } from "@/types";

interface PageProps {
  clientID: string;
  clientData: ClientDataForClientPageProps
}

export default function ConsultantDashboardSideBarClient({ clientID, clientData } : PageProps) {
  const activeSegment = useSelectedLayoutSegment();

  const project_status = ProjectStatusOptions.find(option => option.value === clientData.project_status);

  return (
    <section className="w-[335px] h-full bg-primary fixed shadow-sidebarPortal z-40 overflow-y-auto">
      <div className="p-[30px] flex flex-wrap justify-center w-full">
        <Image src="/Maiker-Construction-Logo.svg" alt="Maiker Logo"  width={120} height={60} className="w-[120px] h-auto mb-[30px]"/>
        <hr className="border-white w-full"/>
      </div>
      <div>
        <ul className="border-y border-[#1972BB]">
          {NavigationPortalConsultantDashboard.map((item,index) => 
            <li className={`text-[500] ${index != NavigationPortalConsultantDashboard.length - 1 && "border-b"} border-[#1972BB] px-[30px] py-3 ${activeSegment === item.link ? "bg-portalBG" : "bg-none"}`} key={index}>
              <Link href={`/consultant-dashboard/${item.link}`} className="block w-full">{item.name}</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="px-[30px] pb-[30px] pt-[30px]">
        <div className="mb-4">
          <p className="uppercase text-[10px]">Job Number</p>
          <p className="font-[700] text-[18px]">{clientData.project_no}</p>
        </div>
        <div className="mb-4">
          <p className="uppercase text-[10px]">Project Address</p>
          <p className="font-[700] text-[18px]">{clientData.site_address}</p>
        </div>
        <div className="mb-4">
          <p className="uppercase text-[10px]">Architect or Building Designer</p>
          <p className="font-[700] text-[18px]">{clientData.consultant}</p>
        </div>
        <div>
          <p className="uppercase text-[10px] mb-2.5">Project Status</p>
          <button type="button" className="w-full h-[42px] rounded-[10px] bg-warning px-[30px] flex justify-between items-center text-[18px] font-[700] shadow-mainShadow text-center">{project_status?.label}</button>
        </div>
      </div>
      <div>
        <ul className="border-y border-[#1972BB]">
          {NavigationPortalClientPortal.map((item,index) => 
            <li className={`text-[500] ${index != NavigationPortalClientPortal.length - 1 && "border-b"} border-[#1972BB] px-[30px] py-3 ${activeSegment === item.link ? "bg-portalBG" : "bg-none"}`} key={index}>
              <Link href={`/consultant-dashboard/${clientID}/${item.link}`} className="block w-full">{item.name}</Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
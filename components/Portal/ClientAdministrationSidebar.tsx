"use client"

import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from 'next/navigation';

import { useState } from "react";

import Select from 'react-select';

import { FaChevronDown, FaChevronRight, FaSpinner } from "react-icons/fa";

import { NavigationPortalClientAdministration } from "@/libs/navigationLinks";
import { ProjectStatusOptions } from "@/libs/selectOptions";

import { ClientDataForClientPageProps } from "@/types";

import { updateClientProjcetStatus } from "@/services/administration/clientServices";

interface PageProps {
  clientData: ClientDataForClientPageProps
}

export default function ClientAdministrationSideBar({ clientData } : PageProps) {
  const activeSegment = useSelectedLayoutSegment();

  const [ loading, setLoading ] = useState<boolean>(false);
  
  const defaultValue = ProjectStatusOptions.find(option => option.value === clientData.project_status);

  const [ selectValue, setSelectValue ] = useState<object | undefined>(defaultValue);
  
  const handleSelectChange = async (selectedOption: any) => {
    setSelectValue(selectedOption);

    setLoading(true);

    await updateClientProjcetStatus(selectedOption.value, clientData._id);

    setLoading(false);
  };

  return (
    <section className="w-[335px] h-full bg-primary fixed shadow-sidebarPortal z-40 overflow-y-auto">
      <div className="p-[30px] flex flex-wrap justify-center w-full">
        <Link href="/">
          <Image src="/Maiker-Construction-Logo.svg" alt="Maiker Logo"  width={120} height={60} className="w-[120px] h-auto mb-[30px]"/>
        </Link>
        <hr className="border-white w-full"/>
      </div>
      <div className="px-[30px] pb-[30px]">
        <div className="mb-4">
          <p className="uppercase text-[10px]">Client Name</p>
          <p className="font-[700] text-[18px]">
          {(() => {
            switch (clientData.type) {
              case "individual_owner":
                return (
                  `${clientData.first_name} ${clientData.last_name}`
                );
              case "company_owner":
                return (
                  clientData.company_name
                );
              case "trust_owner":
                return (
                  clientData.trustee_name
                );
              default:
                return null;
            }
          })()}
          </p>
        </div>
        <div className="mb-4">
          <p className="uppercase text-[10px]">Project Address</p>
          <p className="font-[700] text-[18px]">{clientData.site_address}</p>
        </div>
        <div className="mb-4">
          <p className="uppercase text-[10px] mb-2.5">Project Status</p>
          <div className="shadow-mainShadow rounded-[10px] relative">
            <div className={`${loading ? "flex" : "hidden"} w-full h-full justify-center items-center absolute z-10 top-0 left-0 rounded-[10px] bg-[#ffffff96] text-primary text-[20px]`}><FaSpinner className="animate-spin" /></div>
            <Select
              options={ProjectStatusOptions}
              value={selectValue}
              onChange={handleSelectChange}
              placeholder="Client Type"
              isSearchable={false}
              required
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "#F66B0E" : "#F66B0E",
                  width: "100%",
                  height: "42px",
                  borderRadius: "10px",
                  color: "white",
                  paddingLeft: "20px",
                  outline: "none",
                  ":hover": {
                    borderColor: "#F66B0E"
                  },
                  borderWidth: state.isFocused ? "1px" : "1px",
                  backgroundColor: "#F66B0E",
                  cursor: "pointer"
                }),
                option: (provided, state) => ({
                  ...provided,
                  width: "100%",
                  color: state.isSelected ? 'white' : "black",
                  backgroundColor: state.isSelected ? '#358AC3' : 'white',
                  ":hover": {
                    backgroundColor: "lightgray"
                  },
                  cursor: "pointer"
                }),
                menu: (provided) => ({
                  ...provided,
                  width: "100%",
                  marginTop: "0px",
                  color: "white"
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  paddingLeft: '0px'
                }),
                dropdownIndicator: (provided) => ({
                  ...provided,
                  color: 'white',
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: 'white', 
                  fontWeight: "700",
                  fontSize: "18px"
                }),
              }}
            />
          </div>
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
          {NavigationPortalClientAdministration.map((item,index) => 
            <li className={`text-[500] ${index != NavigationPortalClientAdministration.length - 1 && "border-b"} border-[#1972BB] px-[30px] py-3 ${activeSegment === item.link ? "bg-portalBG" : "bg-none"}`} key={index}>
              <Link href={`${item.link}`} className="block w-full">{item.name}</Link>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
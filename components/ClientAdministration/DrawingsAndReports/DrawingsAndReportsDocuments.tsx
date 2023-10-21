"use client"

import { useState } from "react";

import Add_DrawingsAndReport_Document from "../../Modal/ClientAdministration/DrawingsAndReports/Add_Document";

import DrawingAndReports_Sections from "./Sections";

import { DrawingsAndReportProps } from "@/types";

import { getDrawingsAndReports } from "@/services/clientAdministration/drawingsReportsServices";

interface PageProps {
  clientID: string,
  drawingsReports: DrawingsAndReportProps[]
}

export default function DrawingAndReports_Documents({ clientID, drawingsReports } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);

  const [ data, setData ] = useState<DrawingsAndReportProps[]>(drawingsReports);
  
  const showAddModal = async () => {
    setOpenAddModal(true);
  }

  const refreshList = async () => {
    const data = await getDrawingsAndReports(clientID);

    setData(data);
  }  
  
  return (
    <>
      <div className="mb-[25px]">
        {data.map((item,index) => (
          <div className="mb-5" key={index}>
            <DrawingAndReports_Sections clientID={clientID} drawingsReportsSection={item} refreshList={refreshList}/>
          </div>
        ))}
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_DrawingsAndReport_Document isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

"use client"

import { useState } from "react";

import Add_ComplianceOperation_Document from "../../Modal/ClientAdministration/ComplianceOperations/Add_Document";

import ComplianceOperations_Sections from "./Sections";

import { ComplianceOperationsProps } from "@/types";

import { getComplianceOperations } from "@/services/clientAdministration/complianceOperationServices";

interface PageProps {
  clientID: string,
  complianceOperations: ComplianceOperationsProps[]
}

export default function ComplianceOperations_Documents({ clientID, complianceOperations } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);

  const [ data, setData ] = useState<ComplianceOperationsProps[]>(complianceOperations);
  
  const showAddModal = async () => {
    setOpenAddModal(true);
  }
  
  const refreshList = async () => {
    const data = await getComplianceOperations(clientID);

    setData(data);
  }  

  return (
    <>
      <div className="mb-[25px]">
        {data.map((item,index) => (
          <div className="mb-5" key={index}>
            <ComplianceOperations_Sections clientID={clientID} complianceOperationsSection={item} refreshList={refreshList}/>
          </div>
        ))}
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_ComplianceOperation_Document isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

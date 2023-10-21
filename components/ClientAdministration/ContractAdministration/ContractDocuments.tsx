"use client"

import { useEffect, useState } from "react";

import Add_ContractAdministration_Document from "@/components/Modal/ClientAdministration/ContractAdministration/Add_Document";

import { ContractDocumentProps } from "@/types";

import { getContractDocuments } from "@/services/clientAdministration/contractAdministrationServices";

import Contract_Documents_Data from "./ContractDocument_Data";

interface PageProps {
  clientID: string
}

export default function Contract_Documents({ clientID } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  
  const [ contractDocuments, setContractDocuments ] = useState<ContractDocumentProps[]>([]);
  
  useEffect(() => {
    getContractDocuments(clientID)
      .then(data => {
        setContractDocuments(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [clientID])

  const showAddModal = async () => {
    setOpenAddModal(true);
  }
  
  const refreshList = async () => {
    const data = await getContractDocuments(clientID);

    setContractDocuments(data);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Contract Documents</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-7/12">Document Name</th>
              <th className="py-2 w-4/12 text-center">Date</th>
              <th className="py-2 w-1/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {contractDocuments.map((item,index) => (
              <Contract_Documents_Data document={item} clientID={clientID} refreshList={refreshList} key={index}/>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_ContractAdministration_Document isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

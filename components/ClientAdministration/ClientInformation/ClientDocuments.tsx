"use client"

import { useEffect, useState } from "react";

import Add_ClientInformation_Document from "@/components/Modal/ClientAdministration/ClientInformation/Add_Document";

import { ClientDocumentsProps } from "@/types";

import { getClientDocuments } from "@/services/clientAdministration/clientInformationServices";

import ClientInformation_Documents_Data from "./ClientDocuments_Data";

interface PageProps {
  clientID: string
}

export default function ClientInformation_Documents({ clientID } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  
  const [ clientDocuments, setClientDocuments ] = useState<ClientDocumentsProps[]>([]);

  useEffect(() => {
    getClientDocuments(clientID)
      .then(data => {
        setClientDocuments(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [clientID])

  const showAddModal = async () => {
    setOpenAddModal(true);
  }
  
  const refreshList = async () => {
    const data = await getClientDocuments(clientID);

    setClientDocuments(data);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Client Documents</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-7/12">Document Name</th>
              <th className="py-2 w-4/12 text-center">Date</th>
              <th className="py-2 w-1/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {clientDocuments.map((item,index) => (
              <ClientInformation_Documents_Data document={item} clientID={clientID} refreshList={refreshList} key={index}/>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_ClientInformation_Document isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

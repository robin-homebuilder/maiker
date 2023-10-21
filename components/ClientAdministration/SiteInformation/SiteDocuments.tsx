"use client"

import { useState } from "react";

import Add_SiteInformation_Document from "@/components/Modal/ClientAdministration/SiteInformation/Add_Document";

import { SiteDocumentProps } from "@/types";

import SiteInformation_Per_Documents from "./Document";

import { getSiteInformationDocuments } from "@/services/clientAdministration/siteInformation";

interface PageProps {
  siteDocuments: SiteDocumentProps[],
  clientID: string
}

export default function SiteInformation_Documents({ siteDocuments, clientID } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  
  const [ documents, setDocuments ] = useState<SiteDocumentProps[]>(siteDocuments);
  
  const showAddModal = async () => {
    setOpenAddModal(true);
  }

  const refreshList = async () => {
    const data = await getSiteInformationDocuments(clientID);
    
    setDocuments(data);
  }

  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Site Information Documents</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-7/12">Document Name</th>
              <th className="py-2 w-3/12 text-center">Date</th>
              <th className="py-2 w-2/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {documents.map((item,index) => (
              <SiteInformation_Per_Documents document={item} clientID={clientID} key={index} refreshList={refreshList}/>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_SiteInformation_Document isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} refreshList={refreshList} clientID={clientID}/>
    </>
  )
}

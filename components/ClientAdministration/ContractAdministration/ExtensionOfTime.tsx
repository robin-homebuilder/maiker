"use client"

import { useEffect, useState } from "react";

import Add_ExtensionOfTime from "@/components/Modal/ClientAdministration/ContractAdministration/Add_ExtensionOfTime";

import { ExtensionTimeProps } from "@/types";

import { getExtensionTime } from "@/services/clientAdministration/contractAdministrationServices";

import ExtensionOfTime_Data from "./ExtensionOfTime_Data";

interface PageProps {
  clientID: string
}

export default function ExtensionOfTime({ clientID } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  
  const [ extensionTime, setExtensionTime ] = useState<ExtensionTimeProps[]>([]);
  
  useEffect(() => {
    getExtensionTime(clientID)
      .then(data => {
        setExtensionTime(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [clientID])

  const showAddModal = async () => {
    setOpenAddModal(true);
  }
  
  const refreshList = async () => {
    const data = await getExtensionTime(clientID);

    setExtensionTime(data);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Extension of Time</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-3/12">Document Name</th>
              <th className="py-2 w-3/12 text-center">Days Submitted / Approved</th>
              <th className="py-2 w-2/12 text-center">Status</th>
              <th className="py-2 w-3/12 text-center">Date</th>
              <th className="py-2 w-1/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {extensionTime.map((item,index) => (
              <ExtensionOfTime_Data document={item} clientID={clientID} refreshList={refreshList} key={index}/>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_ExtensionOfTime isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

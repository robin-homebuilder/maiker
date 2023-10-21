"use client"

import { useEffect, useState } from "react";

import Add_ClientInformation_Client from "@/components/Modal/ClientAdministration/ClientInformation/Add_Client";

import { ClientInformationClientsProps } from "@/types";

import { getClientAdditionals } from "@/services/clientAdministration/clientInformationServices";

import ClientInformation_Names_Table from "./ClientNames_Table";

interface PageProps {
  clientID: string
}

export default function ClientInformation_Names({ clientID } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  
  const [ clientAdditionals, setClientAdditionals ] = useState<ClientInformationClientsProps[]>([]);

  useEffect(() => {
    getClientAdditionals(clientID)
      .then(data => {
        setClientAdditionals(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [clientID])
  
  const showAddModal = async () => {
    setOpenAddModal(true);
  }
  
  const refreshList = async () => {
    const data = await getClientAdditionals(clientID);

    setClientAdditionals(data);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        {clientAdditionals.map((item,index) => (
          <ClientInformation_Names_Table data={item} clientID={clientID} refreshList={refreshList} key={index}/>
        ))}
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Client</button>
      </div>
      <Add_ClientInformation_Client isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

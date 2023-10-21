"use client"

import { useState } from "react";

import Edit_Client from "@/components/Modal/Edit_Client";
import Add_Client from "@/components/Modal/Add_Client";
import Manage_Client_Credentials from "@/components/Modal/Administration/ManageClientsCredential";

import { ClientDataProps, ClientListProps, CredentialsProps } from "@/types";

import { getClientByID, getClientCredentialByID, getClientsSearch } from "@/services/administration/clientServices";

interface PageProps {
  clients: ClientListProps[]
}

export default function ClientListTable({ clients } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);
  const [ openCredentialModal, setOpenCredentialModal ] = useState(false);

  const [ clientID, setClientID ] = useState<string>("");

  const [ clientList, setClientList ] = useState<ClientListProps[]>(clients);
  const [ clientData, setClientData ] = useState<ClientDataProps>({
    _id: "",
    type: "",
    first_name: "",
    last_name: "",
    company_name: "",
    trustee_name: "",
    trust_name: "",
    site_address: "",
    phone: "",
    email: ""
  });

  const showAddModal = () => {
    setOpenAddModal(true);
  }

  const showModal = async (id : string) => {
    const data = await getClientByID(id);

    setClientData(data)

    setOpenModal(true);
  }

  const showCredentialModal = async (id : string) => {
    setClientID(id)

    setOpenCredentialModal(true);
  }
  
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    const searchClient = await getClientsSearch(value);

    setClientList(searchClient);
  }

  const refreshClientList = async () => {
    const searchClient = await getClientsSearch("");
    setClientList(searchClient);
  }

  return (
    <>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Search For Client</p>
        <input type="text" placeholder="Client Name or Address" className="h-[42px] w-[771px] rounded-[20px] border border-portalText shadow-mainShadow" onChange={handleSearch}/>
      </div>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Add New Client</p>
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] shadow-mainShadow text-[16px] font-[600]" onClick={showAddModal}>Add Client</button>
      </div>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Client List</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-3/12">Name</th>
              <th className="py-2 w-3/12">Site Address</th>
              <th className="py-2 w-2/12 text-center">Administration</th>
              <th className="py-2 w-2/12 text-center">Edit</th>
              <th className="py-2 w-2/12 text-center">Credentials</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {clientList.map((item,index) => {
              let clientName = "";

              if(item.type == "individual_owner"){
                clientName = `${item.first_name} ${item.last_name}`
              } else if(item.type == "company_owner"){
                clientName = item.company_name
              } else if(item.type == "trust_owner"){
                clientName = item.trustee_name
              }

              return (
                <tr key={index}>
                  <td className="py-2">{clientName}</td>
                  <td className="py-2">{item.site_address}</td>
                  <td className="py-2 text-center">
                    <a href={`/client-administration/${item._id}/consultant-access`} target="_blank">
                      <button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">Open</button>
                    </a>
                  </td>
                  <td className="py-2 text-center"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showModal(item._id)}>Edit</button></td>
                  <td className="py-2 text-center"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showCredentialModal(item._id)}>Manage</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Edit_Client isOpen={openModal} closeModal={() => setOpenModal(false)} clientData={clientData} refreshClientList={refreshClientList}/>
      <Add_Client isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} refreshClientList={refreshClientList}/>
      <Manage_Client_Credentials isOpen={openCredentialModal} closeModal={() => setOpenCredentialModal(false)} clientID={clientID} />
    </>
  )
}

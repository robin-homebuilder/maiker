"use client"

import { useEffect, useState } from "react";

import { ClientListForConsultantProps } from "@/types";

import { getConsultantClientsSearch } from "@/services/consultantDashboard/consultantClients";

interface PageProps {
  clients: ClientListForConsultantProps[],
  consultantID: string
}

export default function ConsultantDashboard_ClientListTable({ clients, consultantID } : PageProps) {
  const [ openModal, setOpenModal ] = useState(false);
  const [ action, setAction ] = useState<string>("");

  const [ clientLists, setClientLists ] = useState<ClientListForConsultantProps[]>([]);

  useEffect( () => {
    setClientLists(clients)
  }, [clients]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    const searchClient = await getConsultantClientsSearch(value, consultantID);

    setClientLists(searchClient);
  }
  
  return (
    <>
      <h2 className='text-dark font-[800] text-[25px] mb-5'>Client Search</h2>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Search For Client</p>
        <input type="text" placeholder="Client Name or Address" className="h-[42px] w-[771px] rounded-[20px] border border-portalText shadow-mainShadow" onChange={handleSearch}/>
      </div>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Client List</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-3/12">Name</th>
              <th className="py-2 w-7/12">Site Address</th>
              <th className="py-2 w-2/12 text-center"></th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {clientLists.map((item,index) => {
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
                  <td className="py-2">{item.project_id.site_address}</td>
                  <td className="py-2 text-center">
                    <a href={`/consultant-dashboard/${item._id}/client-information`}>
                      <button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">Open</button>
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

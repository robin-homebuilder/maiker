"use client"

import { useEffect, useState } from "react";

import Add_Consultant from "../Modal/ClientAdministration/Add_Consultant";

import { deleteConsultantAccess, getConsultantAccess } from "@/services/clientAdministration/consultantAccessServices";

import { ClientConsultantAccessListProps } from "@/types";
import Delete_Modal from "../Modal/Delete";

interface PageProps {
  clientID: string
}

export default function ConsultantAccessTable({ clientID } : PageProps) {
  const [ openModal, setOpenModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ selectedAccess, setSelectedAccess ] = useState<string>("");
  const [ selectedConsultantID, setSelectedConsultantID ] = useState<string>("");
  
  const [ consultants, setConsultants ] = useState<ClientConsultantAccessListProps[]>([]);

  useEffect( () => {
    getConsultantAccess(clientID)
      .then(data => {
        setConsultants(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [clientID])
  
  const showModal = async (action : string) => {
    setOpenModal(true);
  }

  const showDeleteModal = async (id: string, consultantID: string) => {
    setSelectedAccess(id);
    setSelectedConsultantID(consultantID);

    setOpenDeleteModal(true);
  }

  const refreshList = async () => {
    const data = await getConsultantAccess(clientID);

    setConsultants(data);
  }

  const handleDelete = async () => {
    await deleteConsultantAccess(selectedAccess, selectedConsultantID, clientID);

    refreshList();

    setOpenDeleteModal(false);
  }
  
  return (
    <>
      <div className="mb-6">
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-2/12">ID</th>
              <th className="py-2 w-7/12">Name</th>
              <th className="py-2 w-2/12 text-center">Edit</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {consultants.map((item, index) => (
              <tr key={index}>
                <td className="py-2">{item.consultant_id.id_number}</td>
                <td className="py-2">{item.consultant_id.name}</td>
                <td className="py-2 text-center">
                  <button 
                    type="button" 
                    className="bg-warning w-auto px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow"
                    onClick={() => showDeleteModal(item._id, item.consultant_id._id)}
                  >
                    Remove Access
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[262px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={() => showModal("Edit")}>Add Consultant Access</button>
      </div>
      <Add_Consultant isOpen={openModal} closeModal={() => setOpenModal(false)} clientID={clientID} refreshList={refreshList}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

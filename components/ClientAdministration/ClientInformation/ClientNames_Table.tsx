"use client"

import { useEffect, useState } from "react";

import Edit_ClientInformation_Client from "@/components/Modal/ClientAdministration/ClientInformation/Edit_Client";
import Delete_Modal from "@/components/Modal/Delete";

import { ClientInformationClientsProps } from "@/types";
import { deleteClientAdditional } from "@/services/clientAdministration/clientInformationServices";

interface PageProps {
  clientID: string;
  refreshList: () => void;
  data: ClientInformationClientsProps
}

export default function ClientInformation_Names_Table({ clientID, refreshList, data } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ clientAdditional, setClientAdditional ] = useState<ClientInformationClientsProps>(data);

  useEffect(() => {
    setClientAdditional(data);
  },  [data])
  
  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteClientAdditional(clientAdditional._id!);
    
    refreshList();

    setOpenDeleteModal(false);
    setOpenEditModal(false);
  }
  
  const showDeleteModal = async () => {
    setOpenDeleteModal(true);
  }
  
  return (
    <>
      <p className="text-[16px] font-[600] text-portalText mb-2.5">{clientAdditional.client_name}</p>
      <table className="w-full">
        <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
          <tr>
            <th className="py-2 pl-5 w-2/12">Phone</th>
            <th className="py-2 w-3/12">Email</th>
            <th className="py-2 w-5/12">Mailing Address</th>
            <th className="py-2 w-2/12 text-center">Edit</th>
          </tr>
        </thead>
        <tbody className="text-portalText py-2">
          <tr>
            <td className="py-2">{clientAdditional.phone}</td>
            <td className="py-2">{clientAdditional.email}</td>
            <td className="py-2">{clientAdditional.mailing_address}</td>
            <td className="py-2 text-center">
              <button type="button" className="bg-warning w-[120px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Edit_ClientInformation_Client isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientAdditional={clientAdditional} clientID={clientID} refreshList={refreshList} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

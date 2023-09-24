"use client"

import { useState } from "react";

import Add_ClientInformation_Client from "@/components/Modal/ClientAdministration/ClientInformation/Add_Client";
import Edit_ClientInformation_Client from "@/components/Modal/ClientAdministration/ClientInformation/Edit_Client";

export default function ClientInformation_Names() {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  const [ openEditModal, setOpenEditModal ] = useState(false);
  
  const showAddModal = async () => {
    setOpenAddModal(true);
  }
  
  const showEditModal = async () => {
    setOpenEditModal(true);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Sample Client</p>
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
              <td className="py-2">0412 345 678</td>
              <td className="py-2">someone@gmail.com</td>
              <td className="py-2">7 Ben Street, Chermside West, Q, 4032</td>
              <td className="py-2 text-center">
                <button type="button" className="bg-warning w-[120px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Client</button>
      </div>
      <Add_ClientInformation_Client isOpen={openAddModal} closeModal={() => setOpenAddModal(false)}/>
      <Edit_ClientInformation_Client isOpen={openEditModal} closeModal={() => setOpenEditModal(false)}/>
    </>
  )
}

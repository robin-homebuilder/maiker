"use client"

import { useState } from "react";

import AddEdit_Client from "@/components/Modal/Edit_Client";

export default function ConsultantDashboard_ClientListTable() {
  const [ openModal, setOpenModal ] = useState(false);
  const [ action, setAction ] = useState<string>("");
  
  const showModal = async (action : string) => {
    setOpenModal(true);
    setAction(action)
  }
  
  return (
    <>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Client List</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-3/12">Name</th>
              <th className="py-2 w-7/12">Site Address</th>
              <th className="py-2 w-2/12">Edit</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            <tr>
              <td className="py-2">M. Palle & S.Palle</td>
              <td className="py-2">7 Ben Street, Chermside West Q, 4032</td>
              <td className="py-2"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showModal("Edit")}>Open</button></td>
            </tr>
            <tr>
              <td className="py-2">M. Palle & S.Palle</td>
              <td className="py-2">7 Ben Street, Chermside West Q, 4032</td>
              <td className="py-2"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showModal("Edit")}>Open</button></td>
            </tr>
            <tr>
              <td className="py-2">M. Palle & S.Palle</td>
              <td className="py-2">7 Ben Street, Chermside West Q, 4032</td>
              <td className="py-2"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showModal("Edit")}>Open</button></td>
            </tr>
            <tr>
              <td className="py-2">M. Palle & S.Palle</td>
              <td className="py-2">7 Ben Street, Chermside West Q, 4032</td>
              <td className="py-2"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showModal("Edit")}>Open</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <AddEdit_Client isOpen={openModal} closeModal={() => setOpenModal(false)}/> */}
    </>
  )
}

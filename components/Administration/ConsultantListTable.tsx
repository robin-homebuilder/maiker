"use client"

import { useState } from "react";

import AddEdit_Consultant from "../Modal/AddEdit_Consultant";

export default function ConsultantListTable() {
  const [ openModal, setOpenModal ] = useState(false);
  const [ action, setAction ] = useState<string>("");
  
  const showModal = async (action : string) => {
    setOpenModal(true);
    setAction(action)
  }
  
  return (
    <>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Add New Consultant</p>
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] shadow-mainShadow text-[16px] font-[600]" onClick={() => showModal("Add")}>Add Consultant</button>
      </div>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Consultant List</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-2 w-[14%]">ID Number</th>
              <th className="py-2 w-[15%]">Name</th>
              <th className="py-2 w-[10%]">Licence</th>
              <th className="py-2 w-[14%] text-center">Insurance</th>
              <th className="py-2 w-[15%] pl-5">Expiry</th>
              <th className="py-2 w-[16%]">Email</th>
              <th className="py-2 w-[14%] text-center">Edit</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            <tr>
              <td className="py-2">123456</td>
              <td className="py-2">YK Designs</td>
              <td className="py-2">123456</td>
              <td className="py-2 text-center"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button></td>
              <td className="py-2 pl-5">12.12.2023</td>
              <td className="py-2">info@ykdesigns.com.au</td>
              <td className="py-2 text-center"><button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showModal("Edit")}>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <AddEdit_Consultant isOpen={openModal} closeModal={() => setOpenModal(false)} action={action}/>
    </>
  )
}

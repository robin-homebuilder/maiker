"use client"

import { useState } from "react";

import Add_Consultant from "../Modal/ClientAdministration/Add_Consultant";

export default function ConsultantAccessTable() {
  const [ openModal, setOpenModal ] = useState(false);
  
  const showModal = async (action : string) => {
    setOpenModal(true);
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
            <tr>
              <td className="py-2">32546836</td>
              <td className="py-2">YK Designs</td>
              <td className="py-2 text-center"><button type="button" className="bg-warning w-auto px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">Remove Access</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[262px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={() => showModal("Edit")}>Add Consultant Access</button>
      </div>
      <Add_Consultant isOpen={openModal} closeModal={() => setOpenModal(false)}/>
    </>
  )
}

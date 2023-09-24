"use client"

import { useState } from "react";

import Add_Variation from "@/components/Modal/ClientAdministration/ContractAdministration/Add_Variation";
import Edit_Variation from "@/components/Modal/ClientAdministration/ContractAdministration/Edit_Variation";

export default function Variations() {
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
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Variations</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-4/12">Document Name</th>
              <th className="py-2 w-3/12 text-center">Amount Submitted / Approved</th>
              <th className="py-2 w-2/12 text-center">Status</th>
              <th className="py-2 w-2/12 text-center">Date</th>
              <th className="py-2 w-1/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            <tr>
              <td className="py-2">Sample Document</td>
              <td className="py-2 text-center">1</td>
              <td className="py-2 text-center">Approved</td>
              <td className="py-2 text-center">24th Sept. 2023</td>
              <td className="py-2 text-center">
                <div className="flex justify-center gap-x-1">
                  <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
                  <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Variation</button>
      </div>
      <Add_Variation isOpen={openAddModal} closeModal={() => setOpenAddModal(false)}/>
      <Edit_Variation isOpen={openEditModal} closeModal={() => setOpenEditModal(false)}/>
    </>
  )
}

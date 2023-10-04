"use client"

import { useState } from "react";

import Add_Consultant from "../Modal/Add_Consultant";
import Edit_Consultant from "../Modal/Edit_Consultant";

import { ConsultantDataProps, ConsultantListProps } from "@/types";

import { convertInsuranceExpiryDate } from "@/libs/convertDate";

import { getConsultantByID, getConsultantSearch } from "@/services/administration/consultantServices";

interface PageProps {
  consultants: ConsultantListProps[]
}

export default function ConsultantListTable({ consultants } : PageProps) {
  const [ openModal, setOpenModal ] = useState(false);
  const [ openEditModal, setOpenEditModal ] = useState(false);

  const [ consultantList, setConsultantList ] = useState<ConsultantListProps[]>(consultants);
  const [ consultantData, setConsultantData ] = useState<ConsultantDataProps>({
    name: "",
    licence: "",
    insurance: "",
    email: "",
    insurance_file: undefined
  });
  
  const showModal = async (action : string) => {
    setOpenModal(true);
  }

  const showEditModal = async (id : string) => {
    const data = await getConsultantByID(id);

    setConsultantData(data);
    setOpenEditModal(true);
  }

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    const searchClient = await getConsultantSearch(value);

    setConsultantList(searchClient);
  }
  
  const refreshClientList = async () => {
    const searchClient = await getConsultantSearch("");
    setConsultantList(searchClient);
  }

  return (
    <>
      <div className="mb-6">
        <p className="text-[16px] text-portalText font-[600] mb-3">Search For Consultant</p>
        <input type="text" placeholder="Consultant Name" className="h-[42px] w-[771px] rounded-[20px] border border-portalText shadow-mainShadow" onChange={handleSearch}/>
      </div>
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
            {consultantList.map((item,index) => (
              <tr key={index}>
                <td className="py-2">{item.id_number}</td>
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.licence}</td>
                <td className="py-2 text-center">
                  <a href={item.insurance_link} target="_blank">
                    <button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
                  </a>
                </td>
                <td className="py-2 pl-5">{convertInsuranceExpiryDate(item.insurance_expiry)}</td>
                <td className="py-2">{item.email}</td>
                <td className="py-2 text-center">
                  <button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={() => showEditModal(item._id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Add_Consultant isOpen={openModal} closeModal={() => setOpenModal(false)} refreshClientList={refreshClientList}/>
      <Edit_Consultant isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} consultantData={consultantData} refreshClientList={refreshClientList}/>
    </>
  )
}

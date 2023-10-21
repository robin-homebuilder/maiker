"use client"

import { useEffect, useState } from "react";

import Edit_Variation from "@/components/Modal/ClientAdministration/ContractAdministration/Edit_Variation";
import Delete_Modal from "@/components/Modal/Delete";

import { VariationProps } from "@/types";

import { deleteVariation } from "@/services/clientAdministration/contractAdministrationServices";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  document: VariationProps;
  clientID: string;
  refreshList: () => void;
}

export default function Variations_Data({ document, clientID, refreshList } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);
  
  const [ variation, setVariation ] = useState<VariationProps>(document);
  
  useEffect(() => {
    setVariation(document);
  }, [document])
  
  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteVariation(variation._id!, clientID);
    
    refreshList();

    setOpenDeleteModal(false);
    setOpenEditModal(false);
  }
  
  const showDeleteModal = async () => {
    setOpenDeleteModal(true);
  }


  return (
    <>
      <tr>
        <td className="py-2">{variation.name}</td>
        <td className="py-2 text-center">{variation.amount_submitted}</td>
        <td className="py-2 text-center capitalize">{variation.status}</td>
        <td className="py-2 text-center">{convertDateFormat(variation.document_date!)}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={variation.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      </tr>
      <Edit_Variation isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientDocument={variation} clientID={clientID} refreshList={refreshList} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

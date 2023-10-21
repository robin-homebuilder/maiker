"use client"

import { useEffect, useState } from "react";

import Edit_ContractAdministration_Document from "@/components/Modal/ClientAdministration/ContractAdministration/Edit_Document";
import Delete_Modal from "@/components/Modal/Delete";

import { ContractDocumentProps } from "@/types";

import { deleteContractDocument } from "@/services/clientAdministration/contractAdministrationServices";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  document: ContractDocumentProps;
  clientID: string;
  refreshList: () => void;
}

export default function Contract_Documents_Data({ document, clientID, refreshList } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);
  
  const [ contractDocument, setContractDocument ] = useState<ContractDocumentProps>(document);
  
  useEffect(() => {
    setContractDocument(document);
  }, [document])

  const showEditModal = async () => {
    setOpenEditModal(true);
  }
  
  const handleDelete = async () => {
    await deleteContractDocument(contractDocument._id!, clientID);
    
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
        <td className="py-2">{contractDocument.name}</td>
        <td className="py-2 text-center">{convertDateFormat(contractDocument.document_date!)}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={contractDocument.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      </tr>
      <Edit_ContractAdministration_Document isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientDocument={contractDocument} clientID={clientID} refreshList={refreshList} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

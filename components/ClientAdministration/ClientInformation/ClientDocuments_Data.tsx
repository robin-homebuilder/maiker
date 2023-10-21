"use client"

import { useEffect, useState } from "react";

import Edit_ClientInformation_Document from "@/components/Modal/ClientAdministration/ClientInformation/Edit_Document";
import Delete_Modal from "@/components/Modal/Delete";

import { ClientDocumentsProps } from "@/types";

import { convertDateFormat } from "@/libs/convertDate";

import { deleteClientDocument } from "@/services/clientAdministration/clientInformationServices";

interface PageProps {
  clientID: string,
  document: ClientDocumentsProps;
  refreshList: () => void;
}

export default function ClientInformation_Documents_Data({ clientID, document, refreshList } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);
  
  const [ clientDocument, setClientDocument ] = useState<ClientDocumentsProps>(document);

  useEffect(() => {
    setClientDocument(document);
  }, [document])

  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteClientDocument(clientDocument._id!, clientID);
    
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
        <td className="py-2">{clientDocument.name}</td>
        <td className="py-2 text-center">{convertDateFormat(clientDocument.document_date!)}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={clientDocument.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      </tr>
      <Edit_ClientInformation_Document isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientDocument={clientDocument} clientID={clientID} refreshList={refreshList} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

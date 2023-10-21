"use client"

import { useEffect, useState } from "react";

import Edit_SiteInformation_Document from "@/components/Modal/ClientAdministration/SiteInformation/Edit_Document";
import Delete_Modal from "@/components/Modal/Delete";

import { SiteDocumentProps } from "@/types";

import { deleteDocument } from "@/services/clientAdministration/siteInformation";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  document: SiteDocumentProps,
  clientID: string
  refreshList: () => void;
}

export default function SiteInformation_Per_Documents({ document, clientID, refreshList } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ documentData, setDocumentData ] = useState<SiteDocumentProps>(document);

  useEffect( () => {
    setDocumentData(document);
  }, [document])

  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteDocument(document._id, clientID);
    
    refreshList();

    setOpenDeleteModal(false);
    setOpenEditModal(false);
  }
  
  const showDeleteModal = async () => {
    setOpenDeleteModal(true);
  }
  
  return (
    <tr>
      <td className="py-2">{documentData.name}</td>
      <td className="py-2 text-center">{convertDateFormat(documentData.document_date!)}</td>
      <td className="py-2 text-center">
        <div className="flex justify-center gap-x-1">
          <a href={documentData.url} target="_blank">
            <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
          </a>
          <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
        </div>
      </td>
      <Edit_SiteInformation_Document isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientDocument={documentData} clientID={clientID} refreshList={refreshList} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </tr>
  )
}

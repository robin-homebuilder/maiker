"use client"

import { useEffect, useState } from "react";

import Edit_ComplianceOperation_File from "@/components/Modal/ClientAdministration/ComplianceOperations/Edit_File";
import Delete_Modal from "@/components/Modal/Delete";

import { ComplianceOperationsFileProps } from "@/types";

import { deleteComplianceOperationsFile } from "@/services/clientAdministration/complianceOperationServices";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  clientID: string,
  sectionID: string,
  fileData: ComplianceOperationsFileProps,
  refreshListSection: () => void;
}

export default function ComplianceOperations_SectionFile({ clientID, sectionID, fileData, refreshListSection } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ data, setData ] = useState<ComplianceOperationsFileProps>(fileData);
  
  useEffect( () => {
    setData(fileData)
  }, [fileData])

  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteComplianceOperationsFile(fileData._id!, sectionID, clientID);
    
    refreshListSection();

    setOpenDeleteModal(false);
    setOpenEditModal(false);
  }
  
  const showDeleteModal = async () => {
    setOpenDeleteModal(true);
  }

  return (
    <>
      <td className="py-2">{data.name}</td>
        <td className="py-2 text-center">{convertDateFormat(data.document_date!)}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={data.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      <Edit_ComplianceOperation_File isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} data={data} clientID={clientID} sectionID={sectionID} refreshListSection={refreshListSection} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

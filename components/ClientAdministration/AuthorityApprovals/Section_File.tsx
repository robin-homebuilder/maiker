"use client"

import { useEffect, useState } from "react";

import Edit_AuthorityApproval_File from "@/components/Modal/ClientAdministration/AuthorityApprovals/Edit_File";
import Delete_Modal from "@/components/Modal/Delete";

import { AuthorityApprovalFileProps } from "@/types";

import { deleteAuthorityApprovalsFile } from "@/services/clientAdministration/authorityApprovalServices";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  clientID: string,
  sectionID: string,
  fileData: AuthorityApprovalFileProps,
  refreshListSection: () => void;
}

export default function AuthorityApprovals_SectionFile({ clientID, sectionID, fileData, refreshListSection } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ data, setData ] = useState<AuthorityApprovalFileProps>(fileData);
  
  useEffect( () => {
    setData(fileData)
  }, [fileData])

  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteAuthorityApprovalsFile(fileData._id!, sectionID, clientID);
    
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
        <td className="py-2 text-center">{data.amendment}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={data.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      <Edit_AuthorityApproval_File isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} data={data} clientID={clientID} sectionID={sectionID} refreshListSection={refreshListSection} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

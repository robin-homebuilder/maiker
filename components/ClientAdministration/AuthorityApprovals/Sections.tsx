"use client"

import { useState } from "react";

import { FaPlus, FaTrashAlt } from "react-icons/fa";

import Add_AuthorityApproval_File from "@/components/Modal/ClientAdministration/AuthorityApprovals/Add_File";
import Delete_Modal from "@/components/Modal/Delete";

import AuthorityApprovals_SectionFile from "./Section_File";

import { AuthorityApprovalProps } from "@/types";

import { deleteAuthorityApprovalsSection, getAuthorityApprovalsSection } from "@/services/clientAdministration/authorityApprovalServices";

interface PageProps {
  clientID: string,
  authorityApprovalsSection: AuthorityApprovalProps,
  refreshList: () => void;
}

export default function AuthorityApprovals_Sections({ clientID, authorityApprovalsSection, refreshList } : PageProps) {
  const [ openAddFileModal, setOpenAddFileModal ] = useState(false);
  const [ openDeleteSectionModal, setOpenDeleteSectionModal ] = useState(false);

  const [ data, setData ] = useState<AuthorityApprovalProps>(authorityApprovalsSection);

  const showAddFileModal = async () => {
    setOpenAddFileModal(true);
  }

  const showDeleteSectionModal = async () => {
    setOpenDeleteSectionModal(true);
  }

  const handleDelete = async () => {
    await deleteAuthorityApprovalsSection(data._id!, clientID);

    refreshList();

    setOpenDeleteSectionModal(false);
  }

  const refreshListSection = async () => {
    const sectionData = await getAuthorityApprovalsSection(authorityApprovalsSection._id!);

    setData(sectionData);
  }  
  
  return (
    <>
      <div className="flex justify-between items-center mb-2.5">
        <p className="text-[16px] font-[600] text-portalText">{data.section_name}</p>
        <div className="flex gap-x-2">
          <button type="button" className="bg-portalBG w-[32px] h-[32px] rounded-full text-[16px] font-[600] text-white shadow-mainShadow flex justify-center items-center" onClick={showAddFileModal}><FaPlus /></button>
          <button type="button" className="bg-danger w-[32px] h-[32px] rounded-full text-[16px] font-[600] text-white shadow-mainShadow flex justify-center items-center" onClick={showDeleteSectionModal}><FaTrashAlt /></button>
        </div>
      </div>
      <table className="w-full">
        <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
          <tr>
            <th className="py-2 pl-5 w-5/12">Document Name</th>
            <th className="py-2 w-3/12 text-center">Date</th>
            <th className="py-2 w-3/12 text-center">Amendments</th>
            <th className="py-2 w-1/12 text-center">Open</th>
          </tr>
        </thead>
        <tbody className="text-portalText py-2">
          {data.documents!.map((file,index) => (
            <tr key={index}>
              <AuthorityApprovals_SectionFile clientID={clientID} sectionID={data._id!} fileData={file} refreshListSection={refreshListSection}/>
            </tr>
          ))}
        </tbody>
      </table>
      <Add_AuthorityApproval_File isOpen={openAddFileModal} closeModal={() => setOpenAddFileModal(false)} sectionID={data._id!} clientID={clientID} refreshListSection={refreshListSection}/>
      <Delete_Modal isOpen={openDeleteSectionModal} closeModal={() => setOpenDeleteSectionModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

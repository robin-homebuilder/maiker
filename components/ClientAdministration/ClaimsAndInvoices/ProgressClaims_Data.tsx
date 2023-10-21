"use client"

import { useEffect, useState } from "react";

import Edit_ProgressClaim from "@/components/Modal/ClientAdministration/ClaimsAndInvoices/Edit_ProgressClaim";
import Delete_Modal from "@/components/Modal/Delete";

import { ProgressClaimsProps } from "@/types";

import { deleteProgressClaims } from "@/services/clientAdministration/claimsInvoicesServices";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  progressClaim: ProgressClaimsProps,
  clientID: string,
  refreshList: () => void;
}

export default function ProgressClaims_Data({ progressClaim, clientID, refreshList } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ progressClaims, setProgressClaims ] = useState<ProgressClaimsProps>(progressClaim);
  
  useEffect(() => {
    setProgressClaims(progressClaim);

  }, [progressClaim])
  
  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteProgressClaims(progressClaims._id!, clientID);
    
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
        <td className="py-2">{progressClaims.name}</td>
        <td className="py-2 text-center">${parseInt(progressClaims.claim_amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
        <td className="py-2 text-center capitalize">{progressClaims.status}</td>
        <td className="py-2 text-center">{convertDateFormat(progressClaims.document_date!)}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={progressClaims.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            {/* <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button> */}
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      </tr>
      <Edit_ProgressClaim isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientID={clientID} refreshList={refreshList} progressClaims={progressClaims} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

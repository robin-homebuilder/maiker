"use client"

import { useState } from "react";

import Add_AuthorityApproval_Document from "@/components/Modal/ClientAdministration/AuthorityApprovals/Add_Document";

import AuthorityApprovals_Sections from "./Sections";

import { AuthorityApprovalProps } from "@/types";

import { getAuthorityApprovals } from "@/services/clientAdministration/authorityApprovalServices";

interface PageProps {
  clientID: string,
  authorityApprovals: AuthorityApprovalProps[]
}

export default function AuthorityApprovals_Documents({ clientID, authorityApprovals } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);

  const [ data, setData ] = useState<AuthorityApprovalProps[]>(authorityApprovals);
  
  const showAddModal = async () => {
    setOpenAddModal(true);
  }

  const refreshList = async () => {
    const data = await getAuthorityApprovals(clientID);

    setData(data);
  }  
  
  return (
    <>
      <div className="mb-[25px]">
        {data.map((item,index) => (
          <div className="mb-5" key={index}>
            <AuthorityApprovals_Sections clientID={clientID} authorityApprovalsSection={item} refreshList={refreshList}/>
          </div>
        ))}
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_AuthorityApproval_Document isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

"use client"

import { useEffect, useState } from "react";

import Add_ProgressClaim from "@/components/Modal/ClientAdministration/ClaimsAndInvoices/Add_ProgressClaim";

import { ProgressClaimsProps } from "@/types";

import { getProgressClaims } from "@/services/clientAdministration/claimsInvoicesServices";

import ProgressClaims_Data from "./ProgressClaims_Data";

interface PageProps {
  clientID: string
}

export default function ProgressClaims_Documents({ clientID } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);

  const [ progressClaims, setProgressClaims ] = useState<ProgressClaimsProps[]>([]);
  
  useEffect(() => {
    getProgressClaims(clientID)
      .then(data => {
        setProgressClaims(data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [clientID])

  const showAddModal = async () => {
    setOpenAddModal(true);
  }

  const refreshList = async () => {
    const data = await getProgressClaims(clientID);

    setProgressClaims(data);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Progress Claims</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-3/12">Progress Claim Number</th>
              <th className="py-2 w-3/12 text-center">Claim Amount</th>
              <th className="py-2 w-2/12 text-center">Status</th>
              <th className="py-2 w-3/12 text-center">Date</th>
              <th className="py-2 w-1/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {progressClaims.map((item,index) => (
              <ProgressClaims_Data progressClaim={item} clientID={clientID} refreshList={refreshList} key={index}/>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-[.5px] border-[#7D7D7D] mb-5"/>
      <div className="w-full flex justify-end">
        <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] text-[16px] font-[600]" onClick={showAddModal}>Add Document</button>
      </div>
      <Add_ProgressClaim isOpen={openAddModal} closeModal={() => setOpenAddModal(false)} clientID={clientID} refreshList={refreshList}/>
    </>
  )
}

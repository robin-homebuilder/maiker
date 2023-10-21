"use client"

import { useEffect, useState } from "react";

import Edit_ExtensionOfTime from "@/components/Modal/ClientAdministration/ContractAdministration/Edit_ExtensionOfTime";
import Delete_Modal from "@/components/Modal/Delete";

import { ExtensionTimeProps } from "@/types";

import { deleteExtensionTime } from "@/services/clientAdministration/contractAdministrationServices";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  document: ExtensionTimeProps;
  clientID: string;
  refreshList: () => void;
}

export default function ExtensionOfTime_Data({ document, clientID, refreshList } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);
  
  const [ extensionTime, setExtensionTime ] = useState<ExtensionTimeProps>(document);
  
  useEffect(() => {
    setExtensionTime(document);
  }, [document])
  
  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteExtensionTime(extensionTime._id!, clientID);
    
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
        <td className="py-2">{extensionTime.name}</td>
        <td className="py-2 text-center">{extensionTime.days_submitted}</td>
        <td className="py-2 text-center capitalize">{extensionTime.status}</td>
        <td className="py-2 text-center">{convertDateFormat(extensionTime.document_date!)}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={extensionTime.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      </tr>
      <Edit_ExtensionOfTime isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientDocument={extensionTime} clientID={clientID} refreshList={refreshList} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

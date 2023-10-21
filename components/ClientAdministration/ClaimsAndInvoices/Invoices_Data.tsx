"use client"

import { useEffect, useState } from "react";

import Edit_Invoice from "@/components/Modal/ClientAdministration/ClaimsAndInvoices/Edit_Invoice";
import Delete_Modal from "@/components/Modal/Delete";

import { InvoiceProps } from "@/types";

import { deleteInvoice } from "@/services/clientAdministration/claimsInvoicesServices";

import { convertDateFormat } from "@/libs/convertDate";

interface PageProps {
  invoice: InvoiceProps,
  clientID: string,
  refreshList: () => void;
}

export default function Invoices_Data({ invoice, clientID, refreshList } : PageProps) {
  const [ openEditModal, setOpenEditModal ] = useState(false);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);

  const [ invoiceData, setInvoiceData ] = useState<InvoiceProps>(invoice);
  
  useEffect(() => {
    setInvoiceData(invoice);

  }, [invoice])
  
  const showEditModal = async () => {
    setOpenEditModal(true);
  }

  const handleDelete = async () => {
    await deleteInvoice(invoiceData._id!, clientID);
    
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
        <td className="py-2">{invoiceData.name}</td>
        <td className="py-2 text-center">${parseInt(invoiceData.invoice_amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
        <td className="py-2 text-center capitalize">{invoiceData.status}</td>
        <td className="py-2 text-center">{convertDateFormat(invoiceData.document_date!)}</td>
        <td className="py-2 text-center">
          <div className="flex justify-center gap-x-1">
            <a href={invoiceData.url} target="_blank">
              <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
            </a>
            <button type="button" className="bg-portalBG w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
          </div>
        </td>
      </tr>
      <Edit_Invoice isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} clientID={clientID} refreshList={refreshList} invoiceData={invoiceData} showDeleteModal={showDeleteModal}/>
      <Delete_Modal isOpen={openDeleteModal} closeModal={() => setOpenDeleteModal(false)} handleDelete={handleDelete}/>
    </>
  )
}

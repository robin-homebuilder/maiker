import { convertDateFormat } from "@/libs/convertDate"

import { InvoiceProps } from "@/types"

interface PageProps {
  invoices: InvoiceProps[]
}

export default function ClientPortal_Invoices_Documents({ invoices } : PageProps) {
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Invoices</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-4/12">Invoice</th>
              <th className="py-2 w-3/12 text-center">Invoice Amount</th>
              <th className="py-2 w-2/12 text-center">Status</th>
              <th className="py-2 w-2/12 text-center">Date</th>
              <th className="py-2 w-1/12 text-center">Open</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            {invoices.map((item,index) => (
              <tr key={index}>
                <td className="py-2">{item.name}</td>
                <td className="py-2 text-center">${parseInt(item.invoice_amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                <td className="py-2 text-center capitalize">{item.status}</td>
                <td className="py-2 text-center">{convertDateFormat(item.document_date!)}</td>
                <td className="py-2 text-center">
                  <a href={item.url} target="_blank">
                    <button type="button" className="bg-warning w-[75px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

import { ClientInformationClientsProps } from "@/types"

interface PageProps {
  additionalClients: ClientInformationClientsProps[]
}

export default function ClientPortal_ClientInformation_Individual({ additionalClients } : PageProps) {
  return (
    <>
      {additionalClients.map((item,index) => (
        <div className="mb-[25px]" key={index}>
          <p className="text-[16px] font-[600] text-portalText mb-2.5">{item.client_name}</p>
          <table className="w-full">
            <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
              <tr>
                <th className="py-2 pl-5 w-3/12">Phone</th>
                <th className="py-2 w-3/12">Email</th>
                <th className="py-2 w-6/12">Mailing Address</th>
              </tr>
            </thead>
            <tbody className="text-portalText py-2">
              <tr>
                <td className="py-2">{item.phone}</td>
                <td className="py-2">{item.email}</td>
                <td className="py-2">{item.mailing_address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  )
}

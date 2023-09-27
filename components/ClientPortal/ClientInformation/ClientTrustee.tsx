export default function ClientPortal_ClientInformation_Trustee() {
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Sample Trustee Client</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-3/12">Contact Name</th>
              <th className="py-2 w-2/12">Phone</th>
              <th className="py-2 w-3/12">Email</th>
              <th className="py-2 w-4/12">Mailing Address</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            <tr>
              <td className="py-2">Sample Contact</td>
              <td className="py-2">0412 345 678</td>
              <td className="py-2">someone@gmail.com</td>
              <td className="py-2">7 Ben Street, Chermside West, Q, 4032</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

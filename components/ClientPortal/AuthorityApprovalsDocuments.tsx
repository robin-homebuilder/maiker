export default function ClientPortal_AuthorityApprovals_Documents() {
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Sample Section Name</p>
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
            <tr>
              <td className="py-2">Sample Document</td>
              <td className="py-2 text-center">24th Sept. 2023</td>
              <td className="py-2 text-center">x</td>
              <td className="py-2 text-center">
                <button type="button" className="bg-warning w-full px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Sample Section Name</p>
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
            <tr>
              <td className="py-2">Sample Document</td>
              <td className="py-2 text-center">24th Sept. 2023</td>
              <td className="py-2 text-center">x</td>
              <td className="py-2 text-center">
                <button type="button" className="bg-warning w-full px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

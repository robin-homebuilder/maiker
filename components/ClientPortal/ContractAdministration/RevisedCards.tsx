export default function ClientPortal_RevisedCards() {
  return (
    <>
      <div className="flex gap-x-10">
        <div className="w-[584px] rounded-[20px] border border-tertiary p-2">
          <h3 className="text-tertiary text-[22px] font-[800]">Revised Contract Sum</h3>
          <table className="w-full">
            <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
              <tr>
                <th className="py-2 pl-2.5 w-1/2">Description</th>
                <th className="py-2 w-1/2 text-right">Cost (inc GST)</th>
              </tr>
            </thead>
            <tbody className="text-dark py-2">
              <tr>
                <td className="pl-2.5 font-[500] text-[18px]">Original Contract Sum</td>
                <td className="text-right font-[500] text-[18px]">$135,330.00</td>
              </tr>
              <tr className="border-b border-tertiary">
                <td className="pl-2.5 font-[500] text-[18px]">Variations</td>
                <td className="text-right font-[500] text-[18px]">$450.00</td>
              </tr>
              <tr>
                <td className="pl-2.5 font-[700] text-[18px]">Revised Contract Sum</td>
                <td className="text-right font-[700] text-[18px]">$135,780.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[584px] rounded-[20px] border border-tertiary p-2">
          <h3 className="text-tertiary text-[22px] font-[800]">Revised Practical Completion</h3>
          <table className="w-full">
            <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
              <tr>
                <th className="py-2 pl-2.5 w-1/2">Description</th>
                <th className="py-2 w-1/2 text-right">Cost (inc GST)</th>
              </tr>
            </thead>
            <tbody className="text-dark py-2">
              <tr>
                <td className="pl-2.5 font-[500] text-[18px]">Original Practical Completion</td>
                <td className="text-right font-[500] text-[18px]">11th October 2023</td>
              </tr>
              <tr className="border-b border-tertiary">
                <td className="pl-2.5 font-[500] text-[18px]">Approved Extensions of Time</td>
                <td className="text-right font-[500] text-[18px]">4 days</td>
              </tr>
              <tr>
                <td className="pl-2.5 font-[700] text-[18px]">Revised Practical Completion</td>
                <td className="text-right font-[700] text-[18px]">15th October 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

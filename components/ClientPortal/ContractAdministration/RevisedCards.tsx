import { convertDate } from "@/libs/convertDate"

import { ContractSumProps, PracticalCompletionProps } from "@/types"

interface PageProps {
  contractSum: ContractSumProps,
  practicalCompletion: PracticalCompletionProps
}

export default function ClientPortal_RevisedCards({ contractSum, practicalCompletion } : PageProps) {
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
                <td className="text-right font-[500] text-[18px]">${contractSum?.original_contract_sum ? parseInt(contractSum.original_contract_sum).toLocaleString('en-US', { minimumFractionDigits: 2 }) : 0}</td>
              </tr>
              <tr className="border-b border-tertiary">
                <td className="pl-2.5 font-[500] text-[18px]">Variations</td>
                <td className="text-right font-[500] text-[18px]">${contractSum?.variation ? parseInt(contractSum.variation).toLocaleString('en-US', { minimumFractionDigits: 2 }) : 0}</td>
              </tr>
              <tr>
                <td className="pl-2.5 font-[700] text-[18px]">Revised Contract Sum</td>
                <td className="text-right font-[700] text-[18px]">${contractSum?.revised_contract_sum ? parseInt(contractSum.revised_contract_sum).toLocaleString('en-US', { minimumFractionDigits: 2 }) : 0}</td>
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
                <td className="text-right font-[500] text-[18px]">{practicalCompletion?.original_practical_completion ? convertDate(practicalCompletion.original_practical_completion) : ""}</td>
              </tr>
              <tr className="border-b border-tertiary">
                <td className="pl-2.5 font-[500] text-[18px]">Approved Extensions of Time</td>
                <td className="text-right font-[500] text-[18px]">{practicalCompletion?.approved_extension_of_time ? `${practicalCompletion.approved_extension_of_time} days` : "0 day"}</td>
              </tr>
              <tr>
                <td className="pl-2.5 font-[700] text-[18px]">Revised Practical Completion</td>
                <td className="text-right font-[700] text-[18px]">{practicalCompletion?.revised_practical_completion ? convertDate(practicalCompletion.revised_practical_completion) : ""}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

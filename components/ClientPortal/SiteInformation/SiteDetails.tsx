import { SiteDetailsProps } from "@/types"

interface PageProps {
  siteDetails: SiteDetailsProps
}

export default function ClientPortal_SiteInformation_Details({ siteDetails } : PageProps) {
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Site Details</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-5/12">Site Address</th>
              <th className="py-2 w-2/12 text-center">Property Description</th>
              <th className="py-2 w-3/12 text-center">Site Area</th>
              <th className="py-2 w-2/12 text-center">Local Government</th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            <tr>
              <td className="py-2">{siteDetails.site_address}</td>
              <td className="py-2 text-center">{siteDetails.description}</td>
              <td className="py-2 text-center">{siteDetails.site_area}</td>
              <td className="py-2 text-center">{siteDetails.local_government}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

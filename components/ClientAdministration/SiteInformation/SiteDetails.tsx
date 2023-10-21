"use client"

import { useState } from "react";

import Edit_SiteInformation_Details from "@/components/Modal/ClientAdministration/SiteInformation/Edit_SiteDetails";

import { SiteDetailsProps, SiteInformationID } from "@/types";

interface PageProps {
  siteDetails: SiteDetailsProps,
  id: SiteInformationID
}

export default function SiteInformation_Details({ siteDetails, id } : PageProps) {
  const [ openAddModal, setOpenAddModal ] = useState(false);
  const [ openEditModal, setOpenEditModal ] = useState(false);

  const [ siteDetail, setSiteDetail ] = useState<SiteDetailsProps>({
    site_address: siteDetails.site_address,
    description: siteDetails.description,
    site_area: siteDetails.site_area,
    local_government: siteDetails.local_government
  })
  
  const showAddModal = async () => {
    setOpenAddModal(true);
  }

  const showEditModal = async () => {
    setOpenEditModal(true);
  }
  
  return (
    <>
      <div className="mb-[25px]">
        <p className="text-[16px] font-[600] text-portalText mb-2.5">Site Details</p>
        <table className="w-full">
          <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
            <tr>
              <th className="py-2 pl-5 w-5/12">Site Address</th>
              <th className="py-2 w-2/12 text-center">Property Description</th>
              <th className="py-2 w-2/12 text-center">Site Area</th>
              <th className="py-2 w-2/12 text-center">Local Government</th>
              <th className="py-2 w-1/12 text-center"></th>
            </tr>
          </thead>
          <tbody className="text-portalText py-2">
            <tr>
              <td className="py-2">{siteDetail.site_address}</td>
              <td className="py-2 text-center">{siteDetail.description}</td>
              <td className="py-2 text-center">{siteDetail.site_area}</td>
              <td className="py-2 text-center">{siteDetail.local_government}</td>
              <td className="py-2 text-center">
                <button type="button" className="bg-warning w-[120px] px-5 h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow" onClick={showEditModal}>Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Edit_SiteInformation_Details isOpen={openEditModal} closeModal={() => setOpenEditModal(false)} siteDetail={siteDetail} projectID={id.id} setSiteDetail={setSiteDetail}/>
    </>
  )
}

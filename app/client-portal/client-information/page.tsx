import ClientPortal_ClientInformation_Individual from "@/components/ClientPortal/ClientInformation/ClientIndividual";
import ClientPortal_ClientInformation_Company from "@/components/ClientPortal/ClientInformation/ClientCompany";
import ClientPortal_ClientInformation_Trustee from "@/components/ClientPortal/ClientInformation/ClientTrustee";

import ClientPortal_ClientInformation_Documents from "@/components/ClientPortal/ClientInformation/ClientDocuments";

export default async function ConsultantsAccess() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Client Information</h2>
          <div className="mb-6">
            <ClientPortal_ClientInformation_Individual />
          </div>
          <div className="mb-6">
            <ClientPortal_ClientInformation_Company />
          </div>
          <div className="mb-6">
            <ClientPortal_ClientInformation_Trustee />
          </div>
          <div className="mb-6">
            <ClientPortal_ClientInformation_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

import ClientPortal_SiteInformation_Details from "@/components/ClientPortal/SiteInformation/SiteDetails";
import ClientPortal_SiteInformation_Documents from "@/components/ClientPortal/SiteInformation/SiteDocuments";

export default async function SiteInformation() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Site Information</h2>
          <div className="mb-6">
            <ClientPortal_SiteInformation_Details />
          </div>
          <div className="mb-6">
            <ClientPortal_SiteInformation_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

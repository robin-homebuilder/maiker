import SiteInformation_Details from "@/components/ClientAdministration/SiteInformation/SiteDetails";
import SiteInformation_Documents from "@/components/ClientAdministration/SiteInformation/SiteDocuments";

export default async function SiteInformation() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Site Information</h2>
          <div className="mb-6">
            <SiteInformation_Details />
          </div>
          <div className="mb-6">
            <SiteInformation_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

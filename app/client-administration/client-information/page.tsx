import ClientInformation_Names from "@/components/ClientAdministration/ClientInformation/ClientNames";
import ClientInformation_Documents from "@/components/ClientAdministration/ClientInformation/ClientDocuments";

export default async function ConsultantsAccess() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Client Information</h2>
          <div className="mb-6">
            <ClientInformation_Names />
          </div>
          <div className="mb-6">
            <ClientInformation_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

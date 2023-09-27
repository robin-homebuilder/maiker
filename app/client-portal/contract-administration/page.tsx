import ClientPortal_RevisedCards from "@/components/ClientPortal/ContractAdministration/RevisedCards";
import ClientPortal_Contract_Documents from "@/components/ClientPortal/ContractAdministration/ContractDocuments";
import ClientPortal_ExtensionOfTime from "@/components/ClientPortal/ContractAdministration/ExtensionOfTime";
import ClientPortal_Variations from "@/components/ClientPortal/ContractAdministration/Variations";

export default async function ContractAdministration() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Contract Administration</h2>
          <div className="mb-6">
            <ClientPortal_RevisedCards />
          </div>
          <div className="mb-6">
            <ClientPortal_Contract_Documents />
          </div>
          <div className="mb-6">
            <ClientPortal_ExtensionOfTime />
          </div>
          <div className="mb-6">
            <ClientPortal_Variations />
          </div>
        </div>
      </section>
    </>
  )
}

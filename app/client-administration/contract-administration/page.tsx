import RevisedCards from "@/components/ClientAdministration/ContractAdministration/RevisedCards";
import Contract_Documents from "@/components/ClientAdministration/ContractAdministration/ContractDocuments";
import ExtensionOfTime from "@/components/ClientAdministration/ContractAdministration/ExtensionOfTime";
import Variations from "@/components/ClientAdministration/ContractAdministration/Variations";

export default async function ContractAdministration() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Contract Administration</h2>
          <div className="mb-6">
            <RevisedCards />
          </div>
          <div className="mb-6">
            <Contract_Documents />
          </div>
          <div className="mb-6">
            <ExtensionOfTime />
          </div>
          <div className="mb-6">
            <Variations />
          </div>
        </div>
      </section>
    </>
  )
}

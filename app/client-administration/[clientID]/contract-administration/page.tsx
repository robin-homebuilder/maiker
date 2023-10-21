import RevisedCards from "@/components/ClientAdministration/ContractAdministration/RevisedCards";
import Contract_Documents from "@/components/ClientAdministration/ContractAdministration/ContractDocuments";
import ExtensionOfTime from "@/components/ClientAdministration/ContractAdministration/ExtensionOfTime";
import Variations from "@/components/ClientAdministration/ContractAdministration/Variations";

export default async function ContractAdministration({ params } : {params: { clientID: string }}) {
  const { clientID } = params;
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Contract Administration</h2>
          <div className="mb-6">
            <RevisedCards clientID={clientID}/>
          </div>
          <div className="mb-6">
            <Contract_Documents clientID={clientID}/>
          </div>
          <div className="mb-6">
            <ExtensionOfTime clientID={clientID}/>
          </div>
          <div className="mb-6">
            <Variations clientID={clientID}/>
          </div>
        </div>
      </section>
    </>
  )
}

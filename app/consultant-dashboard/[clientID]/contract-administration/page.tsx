import ClientPortal_RevisedCards from "@/components/ClientPortal/ContractAdministration/RevisedCards";
import ClientPortal_Contract_Documents from "@/components/ClientPortal/ContractAdministration/ContractDocuments";
import ClientPortal_ExtensionOfTime from "@/components/ClientPortal/ContractAdministration/ExtensionOfTime";
import ClientPortal_Variations from "@/components/ClientPortal/ContractAdministration/Variations";

import { getContractAndCompletion, getContractDocuments, getExtensionTime, getVariations } from "@/services/clientAdministration/contractAdministrationServices";

export default async function ContractAdministration({ params } : { params: { clientID: string }}) {
  const { clientID } = params;

  const cards = await getContractAndCompletion(clientID!);

  const contractDocuments = await getContractDocuments(clientID!);

  const extensionOfTime = await getExtensionTime(clientID!);

  const variations = await getVariations(clientID!);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Contract Administration</h2>
          <div className="mb-6">
            <ClientPortal_RevisedCards contractSum={cards.contractSum} practicalCompletion={cards.practicalCompletion}/>
          </div>
          <div className="mb-6">
            <ClientPortal_Contract_Documents contractDocuments={contractDocuments}/>
          </div>
          <div className="mb-6">
            <ClientPortal_ExtensionOfTime extensionOfTime={extensionOfTime}/>
          </div>
          <div className="mb-6">
            <ClientPortal_Variations variations={variations}/>
          </div>
        </div>
      </section>
    </>
  )
}

import ClientPortal_ClientInformation_Individual from "@/components/ClientPortal/ClientInformation/ClientIndividual";
import ClientPortal_ClientInformation_Documents from "@/components/ClientPortal/ClientInformation/ClientDocuments";

import { getClientAdditionals, getClientDocuments } from "@/services/clientAdministration/clientInformationServices";

export default async function ConsultantsAccess({ params } : { params: { clientID: string }}) {
  const { clientID } = params;
  
  const additionalClients = await getClientAdditionals(clientID!);

  const clientDocuments = await getClientDocuments(clientID!);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Client Information</h2>
          <div className="mb-6">
            <ClientPortal_ClientInformation_Individual additionalClients={additionalClients}/>
          </div>
          <div className="mb-6">
            <ClientPortal_ClientInformation_Documents clientDocuments={clientDocuments}/>
          </div>
        </div>
      </section>
    </>
  )
}

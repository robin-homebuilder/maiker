import ComplianceOperations_Documents from "@/components/ClientAdministration/ComplianceOperations/ComplianceOperationsDocuments";

import { getComplianceOperations } from "@/services/clientAdministration/complianceOperationServices";

export default async function ComplianceAndOperationsManual({ params } : {params: { clientID: string }}) {
  const { clientID } = params;
  
  const complianceOperations = await getComplianceOperations(clientID);

  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Compliance and Operations Manual</h2>
          <div className="mb-6">
            <ComplianceOperations_Documents clientID={clientID} complianceOperations={complianceOperations}/>
          </div>
        </div>
      </section>
    </>
  )
}

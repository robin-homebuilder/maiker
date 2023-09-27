import ClientPortal_ComplianceOperations_Documents from "@/components/ClientPortal/ComplianceOperationsDocuments";

export default async function ComplianceAndOperationsManual() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Compliance and Operations Manual</h2>
          <div className="mb-6">
            <ClientPortal_ComplianceOperations_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

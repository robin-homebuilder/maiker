import ClientPortal_ProgressClaims_Documents from "@/components/ClientPortal/ClaimsAndInvoices/ProgressClaims";
import ClientPortal_Invoices_Documents from "@/components/ClientPortal/ClaimsAndInvoices/Invoices";

export default async function ClaimsAndInvoices() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Progress Claims & Invoices</h2>
          <div className="mb-6">
            <ClientPortal_ProgressClaims_Documents />
          </div>
          <div className="mb-6">
            <ClientPortal_Invoices_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

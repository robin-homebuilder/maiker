import ClientPortal_ProgressClaims_Documents from "@/components/ClientPortal/ClaimsAndInvoices/ProgressClaims";
import ClientPortal_Invoices_Documents from "@/components/ClientPortal/ClaimsAndInvoices/Invoices";
import { getInvoices, getProgressClaims } from "@/services/clientAdministration/claimsInvoicesServices";

export default async function ClaimsAndInvoices({ params } : { params: { clientID: string }}) {
  const { clientID } = params;
  
  const progressClaims = await getProgressClaims(clientID!);

  const invoices = await getInvoices(clientID!);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Progress Claims & Invoices</h2>
          <div className="mb-6">
            <ClientPortal_ProgressClaims_Documents progressClaims={progressClaims}/>
          </div>
          <div className="mb-6">
            <ClientPortal_Invoices_Documents invoices={invoices}/>
          </div>
        </div>
      </section>
    </>
  )
}

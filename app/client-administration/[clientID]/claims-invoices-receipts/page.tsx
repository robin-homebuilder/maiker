import ProgressClaims_Documents from "@/components/ClientAdministration/ClaimsAndInvoices/ProgressClaims";
import Invoices_Documents from "@/components/ClientAdministration/ClaimsAndInvoices/Invoices";

export default async function ClaimsAndInvoices({ params } : {params: { clientID: string }}) {
  const { clientID } = params;
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Progress Claims & Invoices</h2>
          <div className="mb-6">
            <ProgressClaims_Documents clientID={clientID}/>
          </div>
          <div className="mb-6">
            <Invoices_Documents  clientID={clientID}/>
          </div>
        </div>
      </section>
    </>
  )
}

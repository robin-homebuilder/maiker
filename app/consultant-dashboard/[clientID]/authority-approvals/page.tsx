import ClientPortal_AuthorityApprovals_Documents from "@/components/ClientPortal/AuthorityApprovalsDocuments";

import { getAuthorityApprovals } from "@/services/clientAdministration/authorityApprovalServices";

export default async function AuthorityApprovals({ params } : { params: { clientID: string }}) {
  const { clientID } = params;

  const authorityApprovals = await getAuthorityApprovals(clientID!);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Authority Approvals</h2>
          <div className="mb-6">
            <ClientPortal_AuthorityApprovals_Documents authorityApprovals={authorityApprovals}/>
          </div>
        </div>
      </section>
    </>
  )
}

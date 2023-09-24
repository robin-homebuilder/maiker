import AuthorityApprovals_Documents from "@/components/ClientAdministration/AuthorityApprovalsDocuments";

export default async function AuthorityApprovals() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Authority Approvals</h2>
          <div className="mb-6">
            <AuthorityApprovals_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

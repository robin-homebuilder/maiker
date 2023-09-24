import ConsultantAccessTable from "@/components/ClientAdministration/ConsultantAccessTable";

export default async function ConsultantsAccess() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Consultant Access</h2>
          <ConsultantAccessTable />
        </div>
      </section>
    </>
  )
}

import ConsultantListTable from "@/components/Administration/ConsultantListTable";

export default async function Consultants() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Consultant Search</h2>
          <div className="mb-6">
            <p className="text-[16px] text-portalText font-[600] mb-3">Search For Consultant</p>
            <input type="text" placeholder="Consultant Name" className="h-[42px] w-[771px] rounded-[20px] border border-portalText shadow-mainShadow"/>
          </div>
          <ConsultantListTable />
        </div>
      </section>
    </>
  )
}

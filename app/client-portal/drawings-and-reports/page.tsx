import ClientPortal_DrawingAndReports_Documents from "@/components/ClientPortal/DrawingsAndReportsDocuments";

export default async function DrawingsAndReports() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Drawings and Reports</h2>
          <div className="mb-6">
            <ClientPortal_DrawingAndReports_Documents />
          </div>
        </div>
      </section>
    </>
  )
}

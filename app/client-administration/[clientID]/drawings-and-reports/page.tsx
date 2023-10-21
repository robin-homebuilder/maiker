import DrawingAndReports_Documents from "@/components/ClientAdministration/DrawingsAndReports/DrawingsAndReportsDocuments";

import { getDrawingsAndReports } from "@/services/clientAdministration/drawingsReportsServices";

export default async function DrawingsAndReports({ params } : {params: { clientID: string }}) {
  const { clientID } = params;
  
  const drawingsReports = await getDrawingsAndReports(clientID);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Drawings and Reports</h2>
          <div className="mb-6">
            <DrawingAndReports_Documents clientID={clientID} drawingsReports={drawingsReports}/>
          </div>
        </div>
      </section>
    </>
  )
}

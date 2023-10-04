import ConsultantListTable from "@/components/Administration/ConsultantListTable";
import { getConsultantList } from "@/services/administration/consultantServices";

export default async function Consultants() {
  const consultants = await getConsultantList();

  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Consultant Search</h2>
          <ConsultantListTable consultants={consultants} />
        </div>
      </section>
    </>
  )
}

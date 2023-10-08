import CompletedProject from "@/components/Administration/CompletedProjects";
import { getCompleteProjectPhotos } from "@/services/administration/projectServices";

export default async function CompletedProjects() {

  const projects = await getCompleteProjectPhotos();
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1300px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Completed Projects</h2>
          <CompletedProject projects={projects}/>
        </div>
      </section>
    </>
  )
}

import ImageCard from "@/components/Utils/ImageCard";
import { getProjectsData } from "@/services/projectServices";
import { ProjectProps } from "@/types";

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Projects() {
  const data = await getProjectsData();
  
  return (
    <>
      <section className='bg-accent py-[80px]'>
        <div className='max-w-[1250px] mx-auto'>
          <h1 className='text-primary font-[800] text-center mb-10'>Complete Projects</h1>
          <div className='flex flex-wrap justify-evenly gap-y-5'>
            {data.map((project: ProjectProps) => (
              <div key={project._id}>
                <ImageCard imageURL={project.main_image} imageBaseURL={project.image_base_url} title={project.title} other_image={project.other_image}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
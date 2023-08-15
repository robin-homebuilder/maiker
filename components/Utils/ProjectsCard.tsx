import Image from "next/image";

import { getPastProjectsData } from "@/services/projectServices";

export default async function Past_Projects() {
  const data = await getPastProjectsData();

  return (
    <>
      <div className="flex flex-wrap sm:flex-nowrap gap-y-5 sm:gap-y-0 gap-x-2 mb-3">
        {data.map((project) => (
          <div className="w-full h-[300px] relative" key={project._id}>
            <Image src={`${process.env.APP_S3_BUCKET}${project.image_base_url}/${project.main_image}`} fill={true} alt={project.title} className="object-cover"/>
          </div>
        ))}
      </div>
    </>
  )
}
import ClientPortal_ProjectPhotosList from "@/components/ClientPortal/ProjectPhotos";

import { getClientProjectPhotos } from "@/services/clientAdministration/projectPhotosServices";

export default async function ProjectPhotos({ params } : { params: { clientID: string }}) {
  const { clientID } = params;
  
  const projectPhotos = await getClientProjectPhotos(clientID!);
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1291px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-6'>Project Photos</h2>
          <div className="mb-6">
            <ClientPortal_ProjectPhotosList projectPhotos={projectPhotos.result} projectNumber={projectPhotos.projectNumber}/>
          </div>
        </div>
      </section>
    </>
  )
}

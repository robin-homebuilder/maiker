import ClientListTable from "@/components/Administration/ClientListTable";

import { getClientsList } from "@/services/administration/clientServices";

export default async function ClientSearch() {
  
  const clients = await getClientsList();
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Client Search</h2>
          <ClientListTable clients={clients}/>
        </div>
      </section>
    </>
  )
}

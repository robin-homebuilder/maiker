import { getServerSession } from "next-auth/next"
import { options } from "@/app/api/auth/[...nextauth]/options";

import ConsultantDashboard_ClientListTable from "@/components/ConsultantDashboard/ClientListTable";

import { getConsultantClientsList } from "@/services/consultantDashboard/consultantClients";

export default async function ClientSearch() {
  const session = await getServerSession(options);

  const client = session?.user.client;
  
  const clients = await getConsultantClientsList(client!);

  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <ConsultantDashboard_ClientListTable clients={clients} consultantID={client!}/>
        </div>
      </section>
    </>
  )
}

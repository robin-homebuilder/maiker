import ConsultantDashboardHeader from "@/components/Portal/ConsultantDashboardHeader";
import ConsultantDashboardSideBarClient from "@/components/Portal/ConsultantDashboardSidebarClient";
import PortalFooter from "@/components/Portal/Footer"

import Provider from "@/app/context/client-provider"
import { getServerSession } from "next-auth/next"

import { redirect } from "next/navigation"

import { ROLES_LIST } from "@/libs/rolesList"
import { options } from "@/app/api/auth/[...nextauth]/options";

import { getClientByIDForClientPage } from "@/services/administration/clientServices";

export const metadata = {
  title: 'Consultant Dashboard - Maiker Constructions',
  description: 'Consultant Dashboard - Maiker Construction',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { clientID: string }
}) {
  const { clientID } = params;

  const session = await getServerSession(options);

  let role = 0;
  
  if(session){
    role = session.user.role;
  }

  if(!session || role != ROLES_LIST.Consultant){
    redirect("/");
  }

  const clientData = await getClientByIDForClientPage(clientID);

  return (
    <>
      <Provider session={session}>
        <main>
          <ConsultantDashboardSideBarClient clientID={clientID} clientData={clientData}/>
          <ConsultantDashboardHeader />
          {children}
          <PortalFooter />
        </main>
      </Provider>
    </>
  )
}

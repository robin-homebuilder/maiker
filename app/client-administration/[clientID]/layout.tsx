import AdministrationHeader from "@/components/Portal/AdministrationHeader"
import ClientAdministrationSideBar from "@/components/Portal/ClientAdministrationSidebar";
import PortalFooter from "@/components/Portal/Footer"

import Provider from "@/app/context/client-provider"
import { getServerSession } from "next-auth/next"
import { options } from "../../api/auth/[...nextauth]/options"

import { redirect } from "next/navigation"

import { ROLES_LIST } from "@/libs/rolesList"

import { getClientByIDForClientPage } from "@/services/administration/clientServices";

export const metadata = {
  title: 'Client Administration - Maiker Constructions',
  description: 'Client Administration - Maiker Construction',
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

  const clientData = await getClientByIDForClientPage(clientID);
  
  let role = 0;
  
  if(session){
    role = session.user.role;
  }

  if(!session || role != ROLES_LIST.Admin){
    redirect("/");
  }

  return (
    <>
      <Provider session={session}>
        <main>
          <ClientAdministrationSideBar clientData={clientData}/>
          <AdministrationHeader />
          {children}
          <PortalFooter />
        </main>
      </Provider>
    </>
  )
}

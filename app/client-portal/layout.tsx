import ClientPortalHeader from "@/components/Portal/ClientPortalHeader";
import ClientPortalSideBar from "@/components/Portal/ClientPortalSidebar";
import PortalFooter from "@/components/Portal/Footer"

import Provider from "@/app/context/client-provider"
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options";

import { redirect } from "next/navigation"

import { ROLES_LIST } from "@/libs/rolesList"

import { getClientByIDForClientPage } from "@/services/administration/clientServices";

export const metadata = {
  title: 'Client Administration - Maiker Constructions',
  description: 'Client Administration - Maiker Construction',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options);

  let role = 0;
  let clientID = "";
  
  if(session){
    role = session.user.role;
    clientID = session.user.client
  }

  if(!session || role != ROLES_LIST.Client){
    redirect("/");
  }

  const clientData = await getClientByIDForClientPage(clientID);

  return (
    <>
      <Provider session={session}>
        <main>
          <ClientPortalSideBar clientData={clientData}/>
          <ClientPortalHeader clientData={clientData}/>
          {children}
          <PortalFooter />
        </main>
      </Provider>
    </>
  )
}

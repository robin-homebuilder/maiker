import AdministrationHeader from "@/components/Portal/AdministrationHeader"
import AdministrationSideBar from "@/components/Portal/AdministrationSidebar"
import PortalFooter from "@/components/Portal/Footer"

import Provider from "@/app/context/client-provider"
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"

import { redirect } from "next/navigation"

import { ROLES_LIST } from "@/libs/rolesList"

export const metadata = {
  title: 'Administration - Maiker Constructions',
  description: 'Administration - Maiker Construction',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options);
  
  let role = 0;
  let userID = "";
  
  if(session){
    role = session.user.role;
    userID = session.user.userID
  }

  if(!session || role != ROLES_LIST.Admin){
    redirect("/");
  }

  return (
    <>
      <Provider session={session}>
        <main>
          <AdministrationSideBar />
          <AdministrationHeader userID={userID}/>
          {children}
          <PortalFooter />
        </main>
      </Provider>
    </>
  )
}

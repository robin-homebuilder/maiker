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
          <AdministrationSideBar />
          <AdministrationHeader />
          {children}
          <PortalFooter />
        </main>
      </Provider>
    </>
  )
}

import AdministrationHeader from "@/components/Portal/AdministrationHeader"
import AdministrationSideBar from "@/components/Portal/AdministrationSidebar"
import PortalFooter from "@/components/Portal/Footer"

import Provider from "@/app/context/client-provider"
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"

import { redirect } from "next/navigation"

export const metadata = {
  title: 'Administration - Maiker Constructions',
  description: 'Administration - Maiker Construction',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)
  
  if(!session){
    redirect("/auth/login");
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

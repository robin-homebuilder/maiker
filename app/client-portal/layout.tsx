import ClientPortalHeader from "@/components/Portal/ClientPortalHeader";
import ClientPortalSideBar from "@/components/Portal/ClientPortalSidebar";

import PortalFooter from "@/components/Portal/Footer"

export const metadata = {
  title: 'Client Administration - Maiker Constructions',
  description: 'Client Administration - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <main>
        <ClientPortalSideBar />
        <ClientPortalHeader />
        {children}
        <PortalFooter />
      </main>
    </>
  )
}

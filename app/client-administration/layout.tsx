import AdministrationHeader from "@/components/Portal/AdministrationHeader"
import ClientAdministrationSideBar from "@/components/Portal/ClientAdministrationSidebar";

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
        <ClientAdministrationSideBar />
        <AdministrationHeader />
        {children}
        <PortalFooter />
      </main>
    </>
  )
}

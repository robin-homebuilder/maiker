import ConsultantDashboardHeader from "@/components/Portal/ConsultantDashboardHeader";
import ConsultantDashboardSideBar from "@/components/Portal/ConsultantDashboardSidebar";

import PortalFooter from "@/components/Portal/Footer"

export const metadata = {
  title: 'Consultant Dashboard - Maiker Constructions',
  description: 'Consultant Dashboard - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <main>
        <ConsultantDashboardSideBar />
        <ConsultantDashboardHeader />
        {children}
        <PortalFooter />
      </main>
    </>
  )
}

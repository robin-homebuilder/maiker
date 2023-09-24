import AdministrationHeader from "@/components/Portal/AdministrationHeader"
import AdministrationSideBar from "@/components/Portal/AdministrationSidebar"
import PortalFooter from "@/components/Portal/Footer"
import { Suspense } from 'react';
import { NavigationEvents } from '@/components/Utils/NavigationEvents';

export const metadata = {
  title: 'Administration - Maiker Constructions',
  description: 'Administration - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <>
      <main>
        <AdministrationSideBar />
        <AdministrationHeader />
        {children}
        <PortalFooter />
      </main>
    </>
  )
}

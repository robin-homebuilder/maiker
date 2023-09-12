import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Renovation - Maiker Constructions',
  description: 'Home Renovation Maiker Construction`s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="home_renovation" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Maiker Constructions',
  description: 'Privacy Policy Maiker Construction`s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="policy" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

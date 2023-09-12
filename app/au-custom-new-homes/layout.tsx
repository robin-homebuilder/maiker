import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom New Homes - Maiker Constructions',
  description: 'Custom New Homes Maiker Construction`s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="custom_home" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Additions - Maiker Constructions',
  description: 'Home Additions Maiker Construction`s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="home_addition" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

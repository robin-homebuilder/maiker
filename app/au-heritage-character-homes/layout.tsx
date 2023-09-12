import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Heritage Character Homes - Maiker Constructions',
  description: 'Heritage Character Homes Maiker Construction`s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="heritage_homes" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

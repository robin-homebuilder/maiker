import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Questionnaire - Maiker Constructions',
  description: 'Questionnaire Maiker Construction`s',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="questionnaire" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

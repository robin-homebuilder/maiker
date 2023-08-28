import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

export const metadata = {
  title: 'Quote My Home - Maiker Constructions',
  description: 'Quote My Home - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="quote" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

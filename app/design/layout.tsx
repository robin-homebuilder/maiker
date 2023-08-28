import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

export const metadata = {
  title: 'Design My Home - Maiker Constructions',
  description: 'Design My Home - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="design" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

export const metadata = {
  title: 'Articles - Maiker Constructions',
  description: 'Articles and Inspiration - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="articles" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

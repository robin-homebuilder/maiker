import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Us - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="contact" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

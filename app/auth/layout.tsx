import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="login" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

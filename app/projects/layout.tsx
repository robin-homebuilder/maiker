import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"

export const metadata = {
  title: 'Projects',
  description: 'Completed Projects - Maiker Construction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar page="projects" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

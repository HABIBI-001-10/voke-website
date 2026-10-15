import Nav from './Nav'
import Footer from './Footer'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

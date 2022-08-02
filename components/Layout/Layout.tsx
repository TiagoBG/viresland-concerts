/* eslint-disable no-warning-comments */
import Footer from './Footer'
import Navbar from './Navbar'

// TODO: Check the children type in this Layout
export default function Layout({ children } : any) {
  return (
    <div className="">
      <Navbar />
      <main className="bg-[url('../public/assets/images/concertmain.jpg')] bg-cover min-h-[calc(100vh-8rem)] bg-stone-900 py-8">{children}</main>
      <Footer />
    </div>
  )
}

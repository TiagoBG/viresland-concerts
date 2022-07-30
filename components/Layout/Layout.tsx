/* eslint-disable no-warning-comments */
import Footer from './Footer'
import Navbar from './Navbar'

// TODO: Check the children type in this Layout
export default function Layout({ children } : any) {
  return (
    <div className="">
      <Navbar />
      <main className="bg-[url('../public/assets/images/concertmain.jpg')] bg-cover h-full bg-stone-900 pt-12 h-[calc(80vh)]">{children}</main>
      <Footer />
    </div>
  )
}

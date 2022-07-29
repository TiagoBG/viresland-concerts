/* eslint-disable no-warning-comments */
import Navbar from './Navbar'

// TODO: Check the children type in this Layout
export default function Layout({ children } : any) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
    </div>
  )
}

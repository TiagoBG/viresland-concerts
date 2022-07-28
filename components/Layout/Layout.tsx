/* eslint-disable no-warning-comments */
import NavBar from './Navbar'

// TODO: Check the children type in this Layout
export default function Layout({ children } : any) {
  return (
    <div className="">
      <NavBar />
      <main className="">{children}</main>
    </div>
  )
}

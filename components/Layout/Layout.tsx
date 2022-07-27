import React from 'react'
import Sidebar from './Sidebar'

//TODO: Check the children type in this Layout
export default function Layout({children}:any) {
  return (
  <div className='h-screen flex flex-row justify-start'>
    <Sidebar/>
    <main className="bg-primary flex-1 p-4 text-white">{children}</main>
  </div>
  )
}

/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import TEAMLogo from '../../public/assets/images/Logo_Team_International.png'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white m-auto h-16 items-center flex flex-row justify-between">
      <img alt="TEAM International" className="lg:ml-8" src={TEAMLogo.src} width="80px"/>
      <p className="text-center lg:text-lg md:mr-12">
        Powered by
        <span className="text-yellow-400 font-semibold mx-2">
          Viresland Concerts
        </span>for TEAM's TGL program. © Copyright 2022
      </p>
    </footer>
  )
}

/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white m-auto h-16">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{' '}
        <span>
          <Image
            alt="Vercel Logo"
            height={16}
            src="/vercel.svg"
            width={72}
          />
        </span>
      </a>
    </footer>
  )
}

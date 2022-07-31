/* eslint-disable sort-imports */
import Layout from '@/components/Layout/Layout'
import { SessionProvider } from 'next-auth/react'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function VireslandConcerts({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

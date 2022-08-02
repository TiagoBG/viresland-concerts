/* eslint-disable sort-imports */
import Layout from '@/components/Layout/Layout'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthContextProvider } from '../context/userAuth'

export default function VireslandConcerts({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <Head>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  )
}

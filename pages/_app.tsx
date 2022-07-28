import Layout from '@/components/Layout/Layout'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function VireslandConcerts({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

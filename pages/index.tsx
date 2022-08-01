import Head from 'next/head'
import MainBanner from '@/components/home/MainBanner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Viresland Concerts</title>
      </Head>
      <section>
        <MainBanner />
      </section>

    </div>
  )
}

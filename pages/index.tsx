import Head from 'next/head'
import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Viresland Concerts</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <section className="bg-[url('../public/assets/images/concertmain.jpg')] bg-cover h-screen bg-stone-900">
        <h1 className="text-white">Home page</h1>
      </section>

    </div>
  )
}

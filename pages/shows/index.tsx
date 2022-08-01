import Head from 'next/head'
import ShowsList from '@/components/shows/ShowsList'

function Shows() {
  return (
    <div className="pb-5">
      <Head>
        <title>VC Shows</title>
      </Head>
      <h1 className="text-center text-white text-3xl font-bold mb-4">Upcoming Shows</h1>
      <ShowsList />
    </div>
  )
}

export default Shows

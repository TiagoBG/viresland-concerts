import { useEffect, useState } from 'react'
import axios from 'axios'
import BandCard from '@/components/bands/BandCard'
import Head from 'next/head'

function Bands() {
  const [
    artists,
    setArtists
  ] = useState<any[]>([])

  useEffect(() => {
    axios.get('/api/getBands').
      then((res) => {
        setArtists(res.data.rows)
      }).
      catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Head>
        <title>VC Artists</title>
      </Head>
      <h1 className="text-center text-white text-3xl font-bold mb-4">Artists</h1>
      <div className="flex flex-wrap justify-center">
        {artists.map((artist) => <BandCard artist={artist} key={artist.id} />)}
      </div>
    </>
  )
}

export default Bands

/* eslint-disable react/jsx-key */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import Show from './Show'
import axios from 'axios'

function ShowsList() {
  const [
    shows,
    setShows
  ] = useState<any[]>([])

  useEffect(() => {
    axios.get('/api/shows').
      then((res) => {
        setShows(res.data.rows)
      }).
      catch((err) => console.log(err))
  }, [])

  return shows.map((show) => <Show key={show.id} show={show} />)
}

export default ShowsList

import axios from 'axios'
import { useEffect, useState } from 'react'

function ShowsList() {

  const [shows, setShows] = useState([])

  useEffect(() => {
    axios.get('/api/shows').
      then((res) => {
        console.log(res.data.rows)
      }).
      catch((err) => console.log(err))
  }, [])

  return (
    <div>ShowsList</div>
  )
}

export default ShowsList

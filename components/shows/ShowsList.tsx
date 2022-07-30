import axios from 'axios'
import { useEffect } from 'react'

function ShowsList() {

  useEffect(() => {
    axios.get('/api/shows').
      then((res) => {
        console.log(res)
      }).
      catch((err) => console.log(err))
  }, [])

  return (
    <div>ShowsList</div>
  )
}

export default ShowsList

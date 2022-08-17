/* eslint-disable no-ternary */
import { useRouter } from 'next/router'
import ConcertIcon from '../../public/assets/images/concert.png'
import { dateFormat } from '../../utils/dateFormating'

function Show({ show }) {

  const router = useRouter()
  const hash = window.btoa(`${Math.random()}hash`)

  const ticketsHandler = (show) => {
    router.push({
      pathname: '/reservations/r',
      query: { data: JSON.stringify(show),
        isNew: true }
    })
  }

  return (
    <div className="bg-gray-800 bg-opacity-70 text-white lg:w-1/2 w-5/6 m-auto my-3 p-6 rounded-lg">

      <div className="sm:flex sm:justify-evenly">
        <div className="mt-3 sm:text-left text-center py-2">
          {parseInt(show.available_seats, 10) === 0
            ? <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600" disabled type="button">Sold Out</button>
            : <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => ticketsHandler(show)} type="button">Tickets</button>}
        </div>
        <div className="sm:text-left text-center py-1">
          <p className="text-sm sm:flex sm:text-left text-center">
            <img
              alt="concert-icon"
              className="hidden sm:flex"
              src={ConcertIcon.src}
              width="20px"
            />
            <span className="ml-2">{show.venue_name}</span>
          </p>
          <p className="font-bold text-xl mb-2">{show.band_name}</p>
        </div>
        <div className="text-md mt-3 sm:text-right text-center">
          <p className="leading-none">{show.city}, <span>{show.country}</span></p>
          <p className="">{dateFormat(show.show_date)}</p>
        </div>
      </div>
    </div>
  )
}

export default Show

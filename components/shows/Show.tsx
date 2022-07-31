/* eslint-disable no-ternary */
import ConcertIcon from '../../public/assets/images/concert.png'

function Show({ show }) {
  console.log(show)

  return (
    <div className="bg-gray-800 bg-opacity-70 text-white w-6/12 m-auto my-3 p-6 rounded-lg">

      <div className="flex justify-around">
        <div className="mt-3 text-left">
          {parseInt(show.available_seats, 10) === 0
            ? <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600" disabled type="button">Sold Out</button>
            : <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">Tickets</button>}
        </div>
        <div className="text-left">
          <p className="text-sm flex text-left">
            <img alt="concert-icon" src={ConcertIcon.src} width="20px" />
            <span className="ml-2">{show.venue_name}</span>
          </p>
          <p className="font-bold text-xl mb-2">{show.band_name}</p>
        </div>
        <div className="text-md mt-3 text-right">
          <p className="leading-none">{show.city}, <span>{show.country}</span></p>
          <p className="">{show.show_date.substring(0, 10)}</p>
        </div>
      </div>
      <p className="text-center text-base ml-12 mt-3">{show.band_description}</p>
    </div>
  )
}

export default Show

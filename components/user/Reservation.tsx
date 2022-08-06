import React from 'react'
import Tickets from '../../public/assets/images/tickets.png'

function Reservation({ reservation }) {
  return (
    <article className="bg-gray-900 rounded-lg mx-2 my-4 py-3 text-center grid place-items-center grid-rows-3 grid-flow-col gap-2 md:w-2/6">
      <div className="row-span-3 grid place-items-center">
        <img alt="tickets" src={Tickets.src} width="50px" />
        <div className="grid place-items-center">
          <p className="font-bold text-xl mb-2">{reservation.tickets_amount} tickets</p><span>for</span>
        </div>
        <p className="font-bold text-center text-2xl mb-2">{reservation.band_name}</p>
      </div>
      <div className="grid grid-flow-row row-span-2 col-span-2">
        <p className="font-semibold text-xl mb-2">{reservation.show_date.substring(0, 10)}</p>
        <p className="font-semibold text-xl mb-2">{reservation.venue_name}</p>
        <p className="font-semibold text-md mb-2">{reservation.city}, {reservation.country}</p>
      </div>
      <div className="col-span-2">
        <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 mx-4" onClick={console.log('EDIT')} type="button">Edit</button>
        <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-4" onClick={console.log('DELETE')} type="button">Delete</button>
      </div>
    </article>
  )
}

export default Reservation

/* eslint-disable no-ternary */
/* eslint-disable react/jsx-no-bind */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tickets from '../../public/assets/images/tickets.png'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import TicketReservationModal from '../user/TicketReservationModal'

function Reservation({ reservation }) {
  const [
    showModal,
    setShowModal
  ] = useState(false)

  useEffect(() => {
    console.log('modal')
  }, [showModal])
  

  function deleteHandler(reservationId:number, reservationAmount: number, reservationShow: number) {
    console.log('DELETE', reservationId, reservationAmount)
    axios.delete('api/deleteReservation/', { data: { id: reservationId,
      seats: reservationAmount,
      show: reservationShow } }).
      then((res) => {
        console.log('SUCESSFULLY DELETED', res)
      }).
      catch((err) => console.log(err))
  }

  function editHandler(reservationId:number, reservationAmount:number, reservationShow: number) {
    setShowModal(true)
    console.log('EDIT', reservationId, reservationAmount, reservationShow)
  }

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
        <button
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 mx-4"
          onClick={() => editHandler(reservation.reservation_id, reservation.tickets_amount, reservation.show_id)}
          type="button"
        ><FaEdit />
        </button>
        <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-4" onClick={() => deleteHandler(reservation.reservation_id, reservation.tickets_amount, reservation.show_id)} type="button"><MdDelete /></button>
      </div>
      {/* Edit reservation Modal */}
      {showModal
        ? <div
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
            id="defaultModal"
            tabIndex="-1"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Terms of Service
                </h3>
                <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" type="button">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  ><path clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-modal-toggle="defaultModal" type="button">I accept</button>
                <button className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" data-modal-toggle="defaultModal" type="button">Decline</button>
              </div>
            </div>
          </div>
          </div>
        : null}
    </article>
  )
}

export default Reservation

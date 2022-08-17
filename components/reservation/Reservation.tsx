/* eslint-disable no-ternary */
/* eslint-disable react/jsx-no-bind */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tickets from '../../public/assets/images/tickets.png'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useRouter } from 'next/router'
import { dateFormat } from '../../utils/dateFormating'
import Swal from 'sweetalert2'

function Reservation({ reservation }) {

  const router = useRouter()

  useEffect(() => {
    console.log('CHANGE IN RESERVATION')
  }, [])


  function deleteHandler(reservationId:number, reservationAmount: number, reservationShow: number) {
    console.log('DELETE', reservationId, reservationAmount)
    Swal.fire({
      title: 'This reservation is being deleted',
      icon: 'warning',
      html: '<p>Are you sure that you want to delete this reservation?</p>',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete('api/deleteReservation/', { data: { id: reservationId,
          seats: reservationAmount,
          show: reservationShow } }).
          then((res) => {
            Swal.fire({
              title: 'Reservation successfully removed',
              icon: 'success',
              html: '<p>The reservation has been canceled. Let\'s check your other reservations.</p>',
              confirmButtonText: 'OK'
            }).then(() => {
              // TODO: This reload is temporary the idea is to show the changes immediately
              router.reload()
            })
          }).
          catch((err) => {
            console.log(err)
            Swal.fire({
              title: `${err.statusCode === undefined
                ? 'Oops :('
                : err.statusCode} Something went wrong`,
              icon: 'error',
              html: '<p>Please contact the admin and try again later</p>',
              confirmButtonText: 'OK'
            })
          })
      } else if (result.isDenied) {
        Swal.fire('Delete reservetion has been canceled', '', 'info')
      }
    })
  }

  function editHandler() {
    router.push({
      pathname: '/reservations/r',
      query: { data: JSON.stringify(reservation) }
    })
  }

  return (
    <article className="bg-gray-900 rounded-lg mx-2 my-4 p-3 text-center grid place-items-center grid-rows-3 grid-flow-col gap-2 md:w-2/6">
      <div className="row-span-3 grid place-items-center">
        <img alt="tickets" src={Tickets.src} width="50px" />
        <div className="grid place-items-center">
          <p className="font-bold text-xl mb-2">{reservation.tickets_amount} tickets</p><span>for</span>
        </div>
        <p className="font-bold text-center text-2xl mb-2">{reservation.band_name}</p>
      </div>
      <div className="grid grid-flow-row row-span-2 col-span-2">
        <p className="font-semibold text-xl mb-2">{dateFormat(reservation.show_date)}</p>
        <p className="font-semibold text-xl mb-2">{reservation.venue_name}</p>
        <p className="font-semibold text-md mb-2">{reservation.city}, {reservation.country}</p>
      </div>
      <div className="col-span-2">
        <button
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 mx-4"
          onClick={() => editHandler(reservation)}
          type="button"
        ><FaEdit />
        </button>
        <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-4" onClick={() => deleteHandler(reservation.reservation_id, reservation.tickets_amount, reservation.show_id)} type="button"><MdDelete /></button>
      </div>
    </article>
  )
}

export default Reservation

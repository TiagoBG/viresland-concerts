/* eslint-disable sort-keys */
/* eslint-disable camelcase */
/* eslint-disable no-negated-condition */
/* eslint-disable no-ternary */
/* eslint-disable no-undefined */
/* eslint-disable react/jsx-no-bind */
import axios from 'axios'
import { useRouter, withRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import ReservationI from '../../models/reservation.model'
import { dateFormat } from '../../utils/dateFormating'
import jwt from 'jsonwebtoken'
import Swal from 'sweetalert2'

function ReservationId() {

  const [
    reservation,
    setReservation
  ] = useState<typeof ReservationI | null | any>(null)

  const router = useRouter()

  const ticketsAmountRef = useRef(0)

  useEffect(() => {
    console.log(JSON.parse(router.query.data))
    if (reservation === null) {
      setReservation(JSON.parse(router.query.data))
    }
  }, [reservation, router.query.data])

  function reservationHandler() {

    if (!sessionStorage.getItem('pumpkin')) {
      Swal.fire({
        title: 'You need to be logged in!',
        icon: 'error',
        html: '<p>For tickets reservation you have to be logged first</p>',
        confirmButtonText: 'OK'

      }).then(() => {
        router.replace('/login')
      })
    }

    if (!reservation.available_seats || ticketsAmountRef.current.valueAsNumber > reservation.available_seats) {
      Swal.fire({
        title: 'Not available seats!',
        icon: 'error',
        html: '<p>You cannot reserve more seats than the seats left amount</p>',
        confirmButtonText: 'OK'
      })
    }

    if (router.query.isNew && sessionStorage.getItem('pumpkin') !== null) {
      axios.post('/api/createReservations', {
        id_user: jwt.decode(sessionStorage.getItem('pumpkin'))?.data.id,
        id_show: reservation.id,
        tickets_amount: ticketsAmountRef.current.valueAsNumber
      }).
        then((res) => {
          console.log(res)
          Swal.fire({
            title: 'See you there!',
            icon: 'success',
            html: '<p>Tickets have been successfully reserved</p>',
            confirmButtonText: 'OK'

          }).then(() => {
            router.replace('/user')
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
    }
    if (sessionStorage.getItem('pumpkin') !== null) {
      axios.patch('/api/updateReservation', {
        user: jwt.decode(sessionStorage.getItem('pumpkin'))?.data.id,
        reservation: reservation.reservation_id,
        show: reservation.show_id,
        tickets: ticketsAmountRef.current.valueAsNumber,
        prevTickets: reservation.tickets_amount,
        seats: reservation.available_seats
      }).
        then((res) => {
          console.log(res)
          Swal.fire({
            title: 'See you there!',
            icon: 'success',
            html: '<p>Tickets have been successfully updated</p>',
            confirmButtonText: 'OK'

          }).then(() => {
            router.replace('/user')
          })
        }).
        catch((err) => {
          console.log(err)
          Swal.fire({
            title: `${err.statusCode === undefined
              ? 'Oops :('
              : err.statusCode} Something went wrong`,
            icon: 'error',
            html: '<p>Apparently you cannot update your reservation right now. Please try again later</p>',
            confirmButtonText: 'OK'
          })
        })
    }
  }


  function backButtonHandler() {
    router.back()
  }

  return (
    <div className="bg-gray-700 bg-opacity-70 w-1/2 p-6 rounded-lg text-white m-auto flex justify-center">
      <form className="w-full">
        <div className="flex flex-col justify-center text-center">
          <h3 className="font-semibold text-xl my-2">Tickets reservation for</h3>
          <h1 className="font-bold text-3xl my-2 mb-6">{reservation?.band_name}</h1>
          <p className="font-semibold text-md my-2">{dateFormat(reservation?.show_date)}</p>
          <p className="font-semibold text-md my-2">{reservation?.venue_name} - {reservation?.city}, {reservation?.country}</p>
          <p className="font-semibold text-2xl text-yellow-400 my-2 mb-8">{!reservation?.available_seats
            ? 'NO'
            : reservation?.available_seats} seats left
          </p>
          <div className="flex justify-center items">
            <input
              className="w-1/4 text-black font-bold text-2xl out-of-range:border-red-500 out-of-range:border-2 out-of-range:text-red-500"
              defaultValue={reservation?.tickets_amount}
              max={!reservation?.available_seats
                ? 0
                : reservation?.available_seats}
              min={!reservation?.available_seats
                ? 0
                : 1}
              ref={ticketsAmountRef}
              type="number"
            />
            <p className="font-semibold text-xl my-2 ml-3">tickets</p>
          </div>
        </div>
        <div className="my-4 flex justify-center">
          <button className="font-bold text-md mb-2 mt-4 inline-flex justify-center py-2 px-6 mx-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={reservationHandler} type="button">Reserve</button>
          <button className="font-bold text-md mb-2 mt-4 inline-flex justify-center py-2 px-8 mx-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={backButtonHandler} type="button">Back</button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(ReservationId)

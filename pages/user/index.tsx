/* eslint-disable sort-imports */
/* eslint-disable no-ternary */
import AuthContext from 'context/userAuth'
import Reservation from '@/components/reservation/Reservation'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
import { Key, useContext, useEffect, useState } from 'react'


function User() {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  const [
    userReservations,
    setUserReservations
  ] = useState(null)

  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    if (sessionStorage.getItem('pumpkin') === null) {
      router.replace('/login')
    }

    setLoggedUser(jwt.decode(sessionStorage.getItem('pumpkin'))?.data.username.toString())
    if (userReservations === null) {
      axios.post('/api/getReservations', { id: jwt.decode(sessionStorage.getItem('pumpkin'))?.data.id.toString() }).
        then((res) => {
          setUserReservations(res.data.rows)
          console.log(userReservations)
        }).
        catch((err) => console.log(err))
    }


  }, [userReservations, userReservations?.length])

  function ticketsHandler() {
    router.push('shows')
  }

  function onDelete(){

  }

  function onEdit(){

  }

  return (
    <div className="text-white bg-gray-700 bg-opacity-80 w-11/12 m-auto p-10 rounded-lg">
      <h1 className="font-bold text-3xl text-center mb-2">Welcome {loggedUser}</h1>
      <h3 className="font-semibold text-2xl m-4">Your tickets</h3>
      <div className="flex flex-wrap">
        {userReservations?.length > 0
          ? userReservations?.map((reservation: { id: Key | null | undefined }) => <Reservation key={reservation.id} handleDelete={onDelete} handleEdit={onEdit} reservation={reservation} />)
          : <p>No tickets purchased yet</p> }
      </div>
      <div className="text-center justify-center">
        <button className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4" onClick={ticketsHandler} type="button">Purchase Tickets</button>
      </div>
    </div>
  )
}

export default User

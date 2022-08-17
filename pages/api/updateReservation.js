/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

function setQuery(req) {
  if (req.body.tickets > req.body.prevTickets && req.body.tickets <= req.body.seats) {

    return `UPDATE shows s SET available_seats = available_seats - ${req.body.tickets - req.body.prevTickets} WHERE s.id = ${req.body.show};
            UPDATE reservations r SET tickets_amount = ${req.body.tickets} WHERE r.id = ${req.body.reservation};`
  } else if (req.body.tickets < req.body.prevTickets && req.body.tickets <= req.body.seats) {

    return `UPDATE shows s SET available_seats = available_seats + ${req.body.prevTickets - req.body.tickets} WHERE s.id = ${req.body.show};
            UPDATE reservations r SET tickets_amount = ${req.body.tickets} WHERE r.id = ${req.body.reservation};`
  }

  return Error
}

export default async (req, res) => {
  try {
    const result = await connection.query(setQuery(req))

    res.status(200).json({ state: 1,
      message: 'Tickets reservation successfully updated',
      result })
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong and we could not update this reservation',
      error })
  }
}

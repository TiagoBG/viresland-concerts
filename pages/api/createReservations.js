/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  console.log(req.body)
  try {
    const query = `INSERT INTO reservations (id_user, id_show, tickets_amount) VALUES(${req.body.id_user},${req.body.id_show},${req.body.tickets_amount});
    UPDATE shows s SET available_seats = available_seats - ${req.body.tickets_amount} WHERE s.id = ${req.body.id_show};`

    const result = await connection.query(query)

    res.status(201).json({ state: 1,
      message: 'Tickets reservation successfully done',
      result })
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong while reserving tickets for this show',
      error })
  }
}

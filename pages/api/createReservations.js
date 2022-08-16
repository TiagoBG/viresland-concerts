/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  try {
    const query = 'INSERT INTO reservations (id_user, id_show, tickets_amount) VALUES($1,$2,$3)'

    await connection.query(
      query,
      Object.values(req.body)
    )

    res.status(201).json({ state: 1,
      message: 'Tickets reservation successfully done' })
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong while reserving tickets for this show',
      error })
  }
}
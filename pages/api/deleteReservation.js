/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  const query = `DELETE FROM reservations r WHERE r.id = ${req.body.id};
                UPDATE shows s SET available_seats = available_seats + ${req.body.seats} WHERE s.id = ${req.body.show};`

  try {
    const result = await connection.query(query)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong and we could not get the users info',
      error })
  }
}

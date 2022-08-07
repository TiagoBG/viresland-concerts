/* DELETE FROM reservations r WHERE r.id = 1; */

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  const query = `UPDATE FROM reservations r WHERE r.id = ${req.body.id};`

  try {
    const result = await connection.query(query)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong and we could not get the users info',
      error })
  }
}

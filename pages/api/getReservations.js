/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  const query = `SELECT u.id AS user_id, r.id AS reservation_id, s.id AS show_id, b.band_name, mv.venue_name, mv.city, mv.country, s.show_date, s.available_seats, r.tickets_amount FROM users u INNER JOIN reservations r ON u.id = r.id_user INNER JOIN shows s ON s.id = r.id_show INNER JOIN bands b ON b.id = s.id_band INNER JOIN music_venue mv ON mv.id = s.id_music_venue WHERE u.id = ${req.body.id} ORDER BY show_date;`

  try {
    const result = await connection.query(query)

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong and we could not get the users info',
      error })
  }
}

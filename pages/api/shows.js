/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  try {
    const result = await connection.query('SELECT s.id, b.band_name, b.band_description, mv.venue_name, mv.city, mv.country, show_date, available_seats FROM bands b INNER JOIN shows s ON b.id = s.id_band INNER JOIN music_venue mv ON mv.id = s.id_music_venue ORDER BY show_date;')

    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong and we could not get the shows info',
      error })
  }
}

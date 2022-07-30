import connection from '../../db/db'

export default async (req, res) => {
  try {
    console.log('req nom', req.body)
    const { username, lastname, email, user_password } = req.body
    const query = 'SELECT * FROM shows'
    const result = await connection.query(
      query,
      Object.values(req.body)
    )

    res.status(200).json({ state: 1,
      message: 'Good' })
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Bad',
      error })
    console.log(error)
  }

}

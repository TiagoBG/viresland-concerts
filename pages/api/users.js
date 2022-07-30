/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  try {
    console.log(req.body, 'api/users')
    const { username, lastname, email, city, user_password, confirm_password } = req.body
    const query = 'INSERT INTO users(username,lastname,email,city,user_password, confirm_password) VALUES($1,$2,$3,$4,$5,$6)'
    const result = await connection.query(
      query,
      Object.values(req.body)
    )

    res.status(201).json({ state: 1,
      message: 'Good' })
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Bad',
      error })
    console.log(error)
  }

}

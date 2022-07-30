/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable sort-keys */
import connection from '../../db/db'

export default async (req, res) => {
  try {
    const query = 'INSERT INTO users(username,lastname,email,city,user_password, confirm_password) VALUES($1,$2,$3,$4,$5,$6)'

    await connection.query(
      query,
      Object.values(req.body)
    )

    res.status(201).json({ state: 1,
      message: 'User successfully created' })
  } catch (error) {
    res.status(500).json({ state: 0,
      message: 'Something went wrong while registering the user',
      error })
  }
}

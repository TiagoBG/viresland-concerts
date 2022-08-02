/* eslint-disable no-ternary */
/* eslint-disable sort-keys */
const jwt = require('jsonwebtoken')

const salt = process.env.NEXT_PUBLIC_JWT_SECRET

export function setToken(data) {
  // Signing a token with 1 hour of expiration
  return jwt.sign({ exp: Math.floor(Date.now() / 1000) + 3600,
    data }, salt)
}

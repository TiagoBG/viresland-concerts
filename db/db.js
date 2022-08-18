/* eslint-disable init-declarations */
import { Pool } from 'pg'

let connection

if (!connection) {
  connection = new Pool({
    database: process.env.PGSQL_DATABASE,
    host: process.env.PGSQL_HOST,
    password: process.env.PGSQL_PASSWORD,
    port: process.env.PGSQL_PORT,
    user: process.env.PGSQL_USER
  })
}

export default connection

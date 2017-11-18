import pgPromise from 'pg-promise'

let pgp = pgPromise({})
let connectionString = 'postgres://localhost:5432/scspace'
let dbConnection = pgp({connectionString})

export default dbConnection

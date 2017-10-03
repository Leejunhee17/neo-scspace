import express from 'express'
import pgPromise from 'pg-promise'

let router = express.Router()

let pgp = pgPromise({})
let connectionString = 'postgres://localhost:5432/scspace'
let db = pgp({connectionString})

router.get('/', (req, res, next) => {
  /* Get queries */
  const start = req.query.start
  const end = req.query.end
  
  /* Sanitizing with ISO 8601 */
  const iso = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])(T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?)?$/
  if (!iso.test(start) || !iso.test(end)) res.status(400).json({status: 'error', message: 'Bad time format'})

  const query = 
    "SELECT id, title, event_start AS start, event_end AS end FROM calendar WHERE event_start > ''$1'' AND event_end < ''$2'';"

  db.any(query, [start, end])
    .then(function (data) {
      res.status(200)
        .json(data)
    })
    .catch(function (err) {
      res.status(503).json({status: 'error', err})
    })
})

router.post('/', (req, res, next) => {
  res.json({statue: 'success'})
})

export default router

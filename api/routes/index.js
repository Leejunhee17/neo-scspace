import express from 'express'
import pgPromise from 'pg-promise'

let router = express.Router()

let pgp = pgPromise({})
let connectionString = 'postgres://localhost:5432/scspace'
let db = pgp({connectionString})

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.json({ title: 'Express' })
  db.any('SELECT * FROM pups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        })
    })
    .catch(function (err) {
      res.status(503).json({status: 'error', err})
      // return next(err)
    })
})

export default router

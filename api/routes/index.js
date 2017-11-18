import express from 'express'
import db from './db.js'

let router = express.Router()

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

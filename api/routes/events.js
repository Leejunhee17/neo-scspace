import express from 'express'
let router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json([
    {
      id: 1,
      title: '바보 냥이랑 놀기',
      start: '2017-09-28T11:00',
      end: '2017-09-28T13:30',
      textColor: 'black',
      color: '#ffdd57'
    },
    {
      id: 2,
      title: '바보 냥이랑 놀기',
      start: '2017-09-27T10:00',
      end: '2017-09-27T16:30',
      textColor: 'black',
      color: '#ffdd57'
    }
  ])
})

router.post('/', (req, res, next) => {
  res.json({statue: 'success'})
})

export default router

import express from 'express'
import db from './db.js'
import { isValidDatetime, DatetimeParseException } from './library/Time'
import { getSpaceId, NoSuchSpaceException } from './library/Space'

let router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    // Parse queries
    const spaceId = await getSpaceId(req.query.space)
    const start = req.query.start
    const end = req.query.end

    // Test time format
    if (!isValidDatetime(start)) throw new DatetimeParseException('start')
    if (!isValidDatetime(end)) throw new DatetimeParseException('end')

    // Query
    const events = await db.events.get(spaceId, start, end)

    res.status(200).json(events)
  } catch (err) {
    if (err instanceof DatetimeParseException || err instanceof Error) {
      res.status(400).json((({name, message}) => ({name, message}))(err))
    } else {
      res.status(500).json({message: 'Internal server error.', err})
    }
  }
})

router.post('/', async (req, res, next) => {
  try {
    const spaceId = await getSpaceId(req.body.space)
    const start = req.body.start
    const end = req.body.end
    const title = req.body.title.trim()

    // Test time format
    if (!isValidDatetime(start)) throw new DatetimeParseException('start')
    if (!isValidDatetime(end)) throw new DatetimeParseException('end')
    if (title === '') throw new Error('Parameter `title` expects no empty string.')

    const result = await db.events.post(spaceId, start, end, title)

    res.status(200).json(result)
  } catch (err) {
    if (err instanceof DatetimeParseException || err instanceof NoSuchSpaceException || err instanceof Error) {
      res.status(400).json(err)
    } else {
      res.status(500).json({message: 'Internal server error.', err})
    }
    next(err)
  }
})

export default router

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
    const query = 'SELECT event_id AS id, title, event_start AS start, event_end AS end FROM calendar WHERE space_id = ${spaceId} AND event_start > ${start} AND event_end < ${end};'
    const events = await db.any(query, {start, end, spaceId})

    res.status(200).json(events)
  } catch (err) {
    if (err instanceof DatetimeParseException || err instanceof NoSuchSpaceException) {
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
    const title = req.body.title

    // Test time format
    if (!isValidDatetime(start)) throw new DatetimeParseException('start')
    if (!isValidDatetime(end)) throw new DatetimeParseException('end')

    const query = 'INSERT INTO calendar(space_id, event_start, event_end, title) VALUES (${spaceId}, ${start}, ${end}, ${title})'
    const result = await db.one(query, {spaceId, start, end, title})

    res.status(200).json(result)
  } catch (err) {
    if (err instanceof DatetimeParseException || err instanceof NoSuchSpaceException) {
      res.status(400).json(err)
    } else {
      res.status(500).json({message: 'Internal server error.', err})
    }
    next(err)
  }
})

export default router

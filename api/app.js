import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import cors from 'cors'

import index from './routes/index'
import events from './routes/events'

let app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use('/', index)
app.use('/events', events)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({message: 'Resource Not Found.'})
})

export default app

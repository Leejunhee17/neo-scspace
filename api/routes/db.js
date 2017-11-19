import path from 'path'
import pgPromise from 'pg-promise'

const pgp = pgPromise({
  query: e => {
    console.log(e.query) // Debugging
  }
})

// Timestamp without timezone Type의 데이터를 임의로 파싱하는 문제를 해결
// https://stackoverflow.com/questions/20712291/use-node-postgres-to-get-postgres-timestamp-without-timezone-in-utc
pgp.pg.types.setTypeParser(1114, function (stringValue) { return stringValue })

const connectionString = 'postgres://localhost:5432/scspace'
const db = pgp({connectionString})

function load (file) {
  const sqlPath = path.join('./../routes/sql', file)
  return new pgPromise.QueryFile(sqlPath, {minify: true})
}

const query = {
  spaces: {
    getId: load('spaces/getId.sql')
  },
  events: {
    get: load('events/get.sql'),
    post: load('events/post.sql')
  }
}

export default {
  spaces: {
    getId: (spaceName) => db.one(query.spaces.getId, {spaceName})
  },
  events: {
    get: (spaceId, start, end) => db.any(query.events.get, {spaceId, start, end}),
    post: (spaceId, start, end, title) => db.one(query.events.post, {spaceId, start, end, title})
  }
}

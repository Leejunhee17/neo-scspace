import db from './../db.js'

async function getSpaceId (spaceName) {
  try {
    await db.one('SELECT space_id FROM spaces WHERE space_name = $1;', spaceName)
  } catch (err) {
    throw new NoSuchSpaceException(spaceName)
  }
}

function NoSuchSpaceException (spaceName) {
  this.name = 'NoSuchSpaceException'
  this.message = `Space \`${spaceName}\` does not exists.`
}

export {
  getSpaceId,
  NoSuchSpaceException
}

import db from './../db.js'

async function getSpaceId (spaceName) {
  try {
    const result = await db.spaces.getId(spaceName)
    return result.space_id
  } catch (err) {
    // console.log(err)
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

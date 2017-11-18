// 시간과 관련된 함수, 예외를 모아둔 파일

function isValidDatetime (dateTime) {
  // TODO: Postgresql이 받아들이는 시간을 기준으로 수정. Error message도 수정해야 함
  return !isNaN(Date.parse(dateTime))
}

function DatetimeParseException (param) {
  this.name = 'DatetimeParseException'
  this.message = `Parameter \`${param}\` expects RFC 2822 date type. (See https://tools.ietf.org/html/rfc2822#section-3.3)`
}

export {
  isValidDatetime,
  DatetimeParseException
}

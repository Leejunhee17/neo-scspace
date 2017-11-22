SELECT calendar.event_id AS id,
  calendar.title,
  calendar.event_start AS start,
  calendar.event_end AS end,
  *
  FROM calendar
  LEFT JOIN reservation ON calendar.reservation_id = reservation.reservation_id
  WHERE calendar.space_id = ${spaceId}
    AND ${start} < event_start
    AND event_end < ${end};
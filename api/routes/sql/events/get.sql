SELECT event_id AS id,
  title,
  event_start AS start,
  event_end AS end
  FROM calendar
  WHERE space_id = ${spaceId}
    AND ${start} < event_start
    AND event_end < ${end};
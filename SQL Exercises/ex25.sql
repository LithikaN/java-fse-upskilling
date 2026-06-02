SELECT e.event_id, e.title, e.city, e.status
FROM Events e
WHERE e.event_id NOT IN (
  SELECT DISTINCT event_id FROM Sessions
)
ORDER BY e.event_id;
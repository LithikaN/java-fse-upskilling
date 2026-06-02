SELECT u.user_id, u.full_name,
       SUM(CASE WHEN e.status = 'upcoming'  THEN 1 ELSE 0 END) AS upcoming,
       SUM(CASE WHEN e.status = 'completed' THEN 1 ELSE 0 END) AS completed,
       SUM(CASE WHEN e.status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled,
       COUNT(e.event_id)                                         AS total_events
FROM Users u
JOIN Events e ON u.user_id = e.organizer_id
GROUP BY u.user_id, u.full_name
ORDER BY total_events DESC;
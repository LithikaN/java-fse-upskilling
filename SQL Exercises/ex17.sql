SELECT speaker_name,
       COUNT(session_id)  AS session_count,
       GROUP_CONCAT(title ORDER BY start_time SEPARATOR ' | ') AS sessions
FROM Sessions
GROUP BY speaker_name
HAVING COUNT(session_id) > 1
ORDER BY session_count DESC;
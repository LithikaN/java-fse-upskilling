SELECT a.event_id,
       a.session_id  AS session_a, a.title      AS title_a,
       a.start_time  AS start_a,   a.end_time   AS end_a,
       b.session_id  AS session_b, b.title      AS title_b,
       b.start_time  AS start_b,   b.end_time   AS end_b
FROM Sessions a
JOIN Sessions b
  ON  a.event_id   = b.event_id
  AND a.session_id < b.session_id        -- avoid duplicates & self-join
  AND a.start_time < b.end_time          -- overlap condition
  AND a.end_time   > b.start_time
ORDER BY a.event_id, a.session_id;
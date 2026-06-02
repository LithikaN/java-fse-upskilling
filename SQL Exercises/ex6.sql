SELECT e.event_id, e.title,
       SUM(CASE WHEN res.resource_type = 'pdf'   THEN 1 ELSE 0 END) AS pdfs,
       SUM(CASE WHEN res.resource_type = 'image' THEN 1 ELSE 0 END) AS images,
       SUM(CASE WHEN res.resource_type = 'link'  THEN 1 ELSE 0 END) AS links,
       COUNT(res.resource_id)                                         AS total_resources
FROM Events e
LEFT JOIN Resources res ON e.event_id = res.event_id
GROUP BY e.event_id, e.title
ORDER BY e.event_id;
 
/* backend/src/Model/Public/Attraction/AttractionById.js */

const attraction_by_id = `
SELECT 
a.id AS aid, a.slug AS aslug, a.route AS aroute, a.name AS aname, 
a.description, a.duration, a.height, a.width, a.speed, a.ability, 
c.name AS cname, 
ph.name AS photopass, ph.description AS photopass_description, 
pm.name AS pmr, pm.description AS pmr_description, 
pa.name AS premieraccess, pa.description AS premieraccess_description, 
p.name AS public,
e.name AS ename, e.level, e.description as evacuation_description,
h.name AS hname, h.description AS height_description,
s.name AS sname, s.description AS sensory_description,
hh.name AS hhname, hh.description AS handicap_description,
i.name AS iname, i.description AS interet_description
FROM attraction a
JOIN category c ON c.id = a.id_category
JOIN photopass ph ON ph.id = a.id_photopass 
JOIN pmr pm ON pm.id = a.id_pmr
LEFT JOIN premieraccess pa ON pa.id IN(a.premieraccess)
LEFT JOIN public p ON p.id = a.id_public
LEFT JOIN evacuation e ON e.id = a.id_evacuation
LEFT JOIN height h ON h.id = a.id_height
LEFT JOIN sensory s ON s.id = a.id_sensory
LEFT JOIN handicap hh ON hh.id IN(a.handicaps)
LEFT JOIN interest i ON i.id IN(a.interests)
WHERE a.id = ?
`;

module.exports = attraction_by_id;
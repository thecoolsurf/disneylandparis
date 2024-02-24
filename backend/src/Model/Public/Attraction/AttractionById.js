/* backend/src/Model/Public/Attraction/AttractionById.js */

const attraction_by_id = `
SELECT 
a.id AS aid, a.slug AS aslug, a.route AS aroute, a.name AS aname, 
a.description, a.duration, a.height, a.width, a.speed, a.ability, a.interests, a.handicaps, 
c.name AS cname, 
ph.name AS photopass, ph.description AS photopass_description, 
pm.name AS pmr, pm.description AS pmr_description, 
si.name AS singlerider, si.description AS singlerider_description, 
pr.name AS premieraccess, pr.description AS premieraccess_description, 
pu.name AS public,
ev.name AS evacuation_name, ev.level, ev.description as evacuation_description,
he.name AS height_name, he.description AS height_description,
se.name AS sensory_name, se.description AS sensory_description
FROM attraction a
JOIN category c ON c.id = a.id_category
JOIN photopass ph ON ph.id = a.id_photopass 
JOIN pmr pm ON pm.id = a.id_pmr
JOIN singlerider si ON si.id = a.id_singlerider
LEFT JOIN premieraccess pr ON pr.id IN(a.premieraccess)
LEFT JOIN public pu ON pu.id = a.id_public
LEFT JOIN evacuation ev ON ev.id = a.id_evacuation
LEFT JOIN height he ON he.id = a.id_height
LEFT JOIN sensory se ON se.id = a.id_sensory
WHERE a.id = ?
`;

module.exports = attraction_by_id;
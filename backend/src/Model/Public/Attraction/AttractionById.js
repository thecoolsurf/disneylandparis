// Model/Public/Attraction

const attraction_by_id = `
SELECT 
a.id AS aid, a.slug AS aslug, a.route AS aroute, a.name AS aname, a.public, a.description, a.pictures, a.movies, 
c.name AS cname, 
e.name AS ename, e.level, e.description as evacuation_description,
h.name AS hname, h.description AS height_description,
s.name AS sname, s.description AS sensory_description,
hh.name AS hhname, hh.description AS handicap_description,
i.name AS iname, i.description AS interet_description
FROM attraction a
JOIN category c ON c.id = a.id_category
JOIN evacuation e ON e.id = a.id_evacuation
JOIN height h ON h.id = a.id_height
JOIN sensory s ON s.id = a.id_sensory
JOIN handicap hh ON hh.id IN(a.handicaps)
JOIN interest i ON i.id IN(a.interests)
WHERE a.id = ?
`;

module.exports = attraction_by_id;
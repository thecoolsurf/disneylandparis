/* backend/src/Model/Admin/Handicap/Update.js */

const update = `
UPDATE handicap SET 
description = ?
WHERE id = ?`;

module.exports = update;

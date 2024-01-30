/* backend/src/Model/Admin/Height/Update.js */

const update = `
UPDATE height SET 
description = ?
WHERE id = ?`;

module.exports = update;

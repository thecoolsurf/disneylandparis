/* backend/src/Model/Admin/Attributes/Public/Update.js */

const update = `
UPDATE public SET 
name = ?
WHERE id = ?`;

module.exports = update;
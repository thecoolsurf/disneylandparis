/* backend/src/Model/Admin/Attributes/Public/Delete */

const deleting = `
DELETE FROM public WHERE id = ?`;

module.exports = deleting;
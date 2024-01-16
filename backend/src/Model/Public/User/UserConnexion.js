const user_connexion = `SELECT 
id, firstname, lastname, email, password
FROM user 
WHERE email = ? AND password = ?`;

module.exports = user_connexion;
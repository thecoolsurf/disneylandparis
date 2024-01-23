const user_update = `
UPDATE user SET 
firstname = ${datas.firstname}, 
lastname = ${datas.lastname}, 
email = ${datas.email}, 
password = ${datas.password}, 
born = ${datas.born}, 
date_start = ${datas.date_start}, 
date_end = ${datas.date_end}
WHERE id = ${datas.id}`;


module.exports = user_update;

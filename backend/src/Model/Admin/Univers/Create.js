/* backend/src/Model/Admin/Univers/Create.js */

const univers_create = `
CREATE TABLE IF NOT EXISTS attraction (
    'id' INT AUTO_INCREMENT, 
    'id_park' int,
    'id_univ' int,
    'name' VARCHAR(255),
    'slug' VARCHAR(255),
    'public' VARCHAR(255) NULL,
    'description' TEXT NULL, 
    'restriction' VARCHAR (255) NULL, 
    'pictures' VARCHAR (255) NULL, 
    'movies' VARCHAR (255) NULL, 
    PRIMARY KEY ('id'),
    CONSTRAINT FK_AttractionPark FOREIGN KEY ('id_park') REFERENCES park('id'),
    CONSTRAINT FK_AttractionUnivers FOREIGN KEY ('id_univ') REFERENCES univers('id')
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
`;

module.exports = univers_create;
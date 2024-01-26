/* backend/src/Model/Admin/Administrator/Create.js */

const attraction_create = `
CREATE TABLE IF NOT EXISTS attraction (
    'id' int NOT NULL,
    'id_park' int,
    'id_univ' int,
    'name' VARCHAR(255),
    'slug' VARCHAR(255),
    'public' VARCHAR(255),
    'description' TEXT, 
    'restriction' VARCHAR (255), 
    'pictures' VARCHAR (255), 
    'movies' VARCHAR (255), 
    PRIMARY KEY ('id'),
    CONSTRAINT FK_AttractionPark FOREIGN KEY ('id_park') REFERENCES park('id'),
    CONSTRAINT FK_AttractionUnivers FOREIGN KEY ('id_univ') REFERENCES univers('id')
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
`;

module.exports = attraction_create;
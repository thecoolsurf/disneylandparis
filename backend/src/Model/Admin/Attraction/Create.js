/* backend/src/Model/Admin/Administrator/Create.js */

const attraction_create = `
CREATE TABLE IF NOT EXISTS attraction (
    'id' INT AUTO_INCREMENT, 
    'id_park' int,
    'id_univ' int,
    'name' VARCHAR(255),
    'slug' VARCHAR(255),
    'route' VARCHAR(255),
    'public' VARCHAR(255) NULL,
    'id_evacuation' INT NULL,
    'id_height' INT NULL,
    'id_sensory' INT NULL,
    'handicaps' VARCHAR(255) NULL,
    'interests' VARCHAR(255) NULL,
    'description' TEXT NULL, 
    'pictures' VARCHAR (255) NULL, 
    'movies' VARCHAR (255) NULL, 
    PRIMARY KEY ('id'),
    CONSTRAINT FK_AttractionPark FOREIGN KEY ('id_park') REFERENCES park('id'),
    CONSTRAINT FK_AttractionUnivers FOREIGN KEY ('id_univ') REFERENCES univers('id'),
    CONSTRAINT FK_AttractionEvacuation FOREIGN KEY ('id_evacuation') REFERENCES evacuation('id'),
    CONSTRAINT FK_AttractionHeight FOREIGN KEY ('id_height') REFERENCES height('id'),
    CONSTRAINT FK_AttractionSensory FOREIGN KEY ('id_sensory') REFERENCES sensory('id')
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
`;

module.exports = attraction_create;
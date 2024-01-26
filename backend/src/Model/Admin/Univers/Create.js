/* backend/src/Model/Admin/Univers/Create.js */

const univers_create = `
CREATE TABLE IF NOT EXISTS univers (
    'id' int NOT NULL,
    'id_park' int,
    'name' VARCHAR(255),
    'slug' VARCHAR(255),
    'description' TEXT,
    PRIMARY KEY ('id'),
    CONSTRAINT FK_CategoryPark FOREIGN KEY ('id_park')
    REFERENCES park('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

module.exports = univers_create;
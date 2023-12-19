CREATE TABLE park (
    `id` INT AUTO_INCREMENT, 
    `name` VARCHAR (255), 
    `url` VARCHAR (255), 
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

CREATE TABLE category (
    `id` int NOT NULL,
    `id_park` int,
    `name` VARCHAR(255),
    `url` VARCHAR(255),
    PRIMARY KEY (`id`),
    CONSTRAINT FK_CategoryPark FOREIGN KEY (`id_park`)
    REFERENCES park(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4; 

CREATE TABLE attraction (
    `id` int NOT NULL,
    `id_cat` int,
    `name` VARCHAR(255),
    `url` VARCHAR(255),
    `description` VARCHAR (255), 
    `restriction` VARCHAR (255), 
    `pictures` VARCHAR (255), 
    `movies` VARCHAR (255), 
    PRIMARY KEY (`id`),
    CONSTRAINT FK_AttractionCategory FOREIGN KEY (`id_cat`)
    REFERENCES category(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

/* ******************************************************************* */
INSERT INTO park (id,name,url) 
VALUES
(null,'Parc Disneyland','park-disneyland'),
(null,'Walt Disney Studios','walt-disney-studio');

INSERT INTO category (`id`,`id_park`,`name`,`url`) VALUES
(1,1,'Adventureland','adventureland'),
(2,1,'Discoveryland','discoveryland'),
(3,1,'Fantasyland','fantasyland'),
(4,1,'Frontierland','Frontierland'),
(5,1,'Main Street, U.S.A','main-street-usa');
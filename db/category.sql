CREATE TABLE category (
    `id` int NOT NULL,
    `id_park` int,
    `name` VARCHAR(255),
    `url` VARCHAR(255),
    PRIMARY KEY (`id`),
    CONSTRAINT FK_CategoryPark FOREIGN KEY (`id_park`)
    REFERENCES park(`id`)
) ENGINE=InnoDB; 

INSERT INTO category (`id`,`id_park`,`name`,`url`) VALUES
(1,1,'Adventureland','adventureland'),
(2,1,'Discoveryland','discoveryland'),
(3,1,'Fantasyland','fantasyland'),
(4,1,'Frontierland','Frontierland'),
(5,1,'Main Street, U.S.A','main-street-usa');
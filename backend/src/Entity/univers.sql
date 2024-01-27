CREATE TABLE univers (
    `id` INT AUTO_INCREMENT, 
    `id_park` int,
    `name` VARCHAR(255),
    `slug` VARCHAR(255),
    `description` TEXT,
    PRIMARY KEY (`id`),
    CONSTRAINT FK_CategoryPark FOREIGN KEY (`id_park`)
    REFERENCES park(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO univers (`id`,`id_park`,`name`,`slug`,`description`) VALUES
(1,1,'Adventureland','adventureland','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(2,1,'Discoveryland','discoveryland','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(3,1,'Fantasyland','fantasyland','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(4,1,'Frontierland','frontierland','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(5,1,'Main Street, U.S.A','main-street-usa','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(6,2,'Toon Studio','toon-studio','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(7,2,'Avengers Campus','avengers-campus','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(8,2,'Worlds of Pixar','worlds-of-pixar','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(9,2,'Front Lot','front-lot','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.'),
(10,2,'Production Courtyard','production-courtyard','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.');
CREATE TABLE park (
    `id` INT AUTO_INCREMENT, 
    `name` VARCHAR (255), 
    `slug` VARCHAR (255),
    `title` VARCHAR (255) NULL,
    `description` TEXT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO park (`id`,`name`,`slug`,`title`,`description`) VALUES
(null,'Parc Disneyland','park-disneyland','Title','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.
'),
(null,'Walt Disney Studios','walt-disney-studios','Title','Est aute dolore incididunt laboris proident excepteur id consectetur sit ea pariatur pariatur proident adipisicing.
Veniam do ut laborum incididunt duis irure officia cupidatat et magna pariatur occaecat velit. 
Elit exercitation mollit deserunt aliquip esse culpa velit et dolor elit sit Lorem.
Proident adipisicing incididunt excepteur officia voluptate.
Occaecat laboris non minim adipisicing eiusmod dolor adipisicing ea proident ullamco officia consequat eiusmod.
');

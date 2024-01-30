CREATE TABLE IF NOT EXISTS sensory (
    `id` INT AUTO_INCREMENT, 
    `level` SMALLINT(10),
    `description` VARCHAR (255), 
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* ******************************************************************* */
INSERT INTO sensory (`id`,`level`,`description`) VALUES
(null,1,'Faible simulation sensorielle'),
(null,2,'Moyenne simulation sensorielle'),
(null,3,'Forte simulation sensorielle'),
(null,4,'Très forte simulation sensorielle');

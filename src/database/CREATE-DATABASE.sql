CREATE DATABASE products;

USE products;

CREATE TABLE product{
    id INT NOT NULL AUTO_INCREMENT, 
    nombre varchar(30) NOT NULL,
    categoria varchar(20) NOT NULL,
    precio  INT
    PRIMARY KEY (id)
};

DESCRIBE product;


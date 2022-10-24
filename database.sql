/**
*   DATABASE MySQL
*   TABLES
*   SQL
*/

CREATE DATABASE users;

CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    language VARCHAR(30) NULL,
    city VARCHAR(30) NULL,
);

INSERT INTO users (username, country, language, city) VALUES ('John', 'USA', 'English', 'New York');
INSERT INTO users (username, country, language, city) VALUES ('Peter', 'USA', 'English', 'New York');
INSERT INTO users (username, country, language, city) VALUES ('Hélène', 'France', 'Français', 'Paris');
INSERT INTO users (username, country, language, city) VALUES ('Pierre', 'France', 'Français', 'Paris');
INSERT INTO users (username, country, language, city) VALUES ('Juan', 'Spain', 'Español', 'Madrid');
INSERT INTO users (username, country, language, city) VALUES ('Pedro', 'Spain', 'Español', 'Madrid');





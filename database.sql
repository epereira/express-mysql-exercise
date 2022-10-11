/**
*   DATABASE MySQL
*   TABLES
*   SQL
*/

CREATE DATABASE users;

CREATE TABLE users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL
);

INSERT INTO users (username, country) VALUES ('John', 'UK');
INSERT INTO users (username, country) VALUES ('Peter', 'Germany');
INSERT INTO users (username, country) VALUES ('Mary', 'France');
INSERT INTO users (username, country) VALUES ('Jane', 'Spain');
INSERT INTO users (username, country) VALUES ('Mark', 'Italy');
INSERT INTO users (username, country) VALUES ('Sara', 'Greece');
INSERT INTO users (username, country) VALUES ('Paul', 'Ireland');
INSERT INTO users (username, country) VALUES ('Laura', 'Portugal');
INSERT INTO users (username, country) VALUES ('Bob', 'Belgium');
INSERT INTO users (username, country) VALUES ('Alice', 'France');



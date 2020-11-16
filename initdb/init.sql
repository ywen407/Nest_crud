SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS `signal`;
SET character_set_client = utf8mb4;

USE `signal`;

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'hello_world';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hello_world';
SELECT plugin FROM mysql.user WHERE User = 'root';
FLUSH PRIVILEGES;

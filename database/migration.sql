DROP DATABASE IF EXISTS pet_manager_db;

CREATE DATABASE pet_manager_db;

\c pet_manager_db;

DROP TABLE IF EXISTS pets CASCADE;
DROP TABLE IF EXISTS owners CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE owners (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone_number VARCHAR(255)
);

CREATE TABLE pets (
  id BIGSERIAL PRIMARY KEY,
  pet_name VARCHAR(255),
  age INT,
  breed VARCHAR(255),
  photo VARCHAR(255),
  owner_id INT REFERENCES owners(id)
);

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

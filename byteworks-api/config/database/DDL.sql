CREATE DATABASE byteworks;

\c byteworks;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  role VARCHAR(25) NOT NULL,
  skill VARCHAR(25) NOT NULL,
  status VARCHAR(25) NOT NULL
);

CREATE TABLE business (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  role VARCHAR(25) NOT NULL,
  type_of_service VARCHAR(25) NOT NULL
);

CREATE TABLE skills (
  id        INTEGER        NOT NULL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  review  INTEGER   NOT NULL,
  role       VARCHAR(25)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id        INTEGER        NOT NULL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  review  INTEGER   NOT NULL,
  comment       VARCHAR(255)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id        INTEGER        NOT NULL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  role       VARCHAR(25)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE jobs (
  id        INTEGER        NOT NULL,
  name VARCHAR(50) NOT NULL,
  business     VARCHAR(50)   NOT NULL,
  type_of_service VARCHAR(25) NOT NULL,
  type VARCHAR(25) NOT NULL,,
  user_dev  INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM ;

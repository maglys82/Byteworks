CREATE DATABASE byteworks;

\c byteworks;

CREATE TABLE users (
  id        INTEGER        NOT NULL,
  first_name          VARCHAR(50) NOT NULL,
  last_name          VARCHAR(50) NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  role       VARCHAR(25)   NOT NULL,
  type_of_work VARCHAR(25) NOT NULL,
  review  INTEGER   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE business (
  id        INTEGER        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  type      VARCHAR(50) NOT NULL,
  role       VARCHAR(25)   NOT NULL,
  type_of_service VARCHAR(25) NOT NULL,
  PRIMARY KEY (id)
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

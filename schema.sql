USE delta_app;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(30),
    email VARCHAR(50),
    password VARCHAR(30)
);
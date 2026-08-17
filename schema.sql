CREATE TABLE user (
 id VARCHAR(30) PRIMARY KEY,
 username VARCHAR(50) UNIQUE,
 email VARCHAR(50) UNIQUE not null,
 password VARCHAR(30)
);

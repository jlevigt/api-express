CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(254) UNIQUE,
    username VARCHAR(30) UNIQUE,
    password VARCHAR(60)
);


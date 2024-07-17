CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(254) UNIQUE,
    username VARCHAR(30) UNIQUE,
    password VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS links (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users(id),
    title VARCHAR(100),
    url VARCHAR(255),
    status VARCHAR(30) DEFAULT 'active'
);

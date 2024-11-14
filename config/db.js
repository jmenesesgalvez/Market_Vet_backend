const { Pool } = require('pg');
require('dotenv').config();

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("Tipo de DB_PASSWORD:", typeof process.env.DB_PASSWORD);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;

/* const { Pool } = require('pg');
require('dotenv').config();

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("Tipo de DB_PASSWORD:", typeof process.env.DB_PASSWORD);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, 
    },
});

module.exports = pool; */




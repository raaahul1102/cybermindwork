// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: 'localhost',
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: 5432,
// });

// pool.connect()
//     .then(() => console.log('Connected to PostgreSQL'))
//     .catch(err => console.error('Database connection error:', err));

// module.exports = pool;

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.URL,
    ssl: {
        rejectUnauthorized: false, 
    },
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL on Railway'))
    .catch(err => console.error('Database connection error:', err));

module.exports = pool;

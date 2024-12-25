const pool = require('../db/db');

const createJobTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS job (
            id SERIAL PRIMARY KEY,
            job_title VARCHAR(255) NOT NULL,
            company_name VARCHAR(255) NOT NULL,
            job_type VARCHAR(50) NOT NULL,
            salary_range VARCHAR(255),
            job_desc TEXT,
            application_deadline DATE,
            location VARCHAR(255)
        );
    `;
    try {
        await pool.query(query);
        console.log('Jobs table initialized');
    } catch (error) {
        console.error('Error creating jobs table:', error);
    }
};

createJobTable();

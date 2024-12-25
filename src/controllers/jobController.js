const pool = require('../db/db');


const getJobs = async (req, res) => {
    try {
        const { title, location, type, salary } = req.query;
        let query = 'SELECT * FROM job WHERE 1=1';
        const params = [];

        if (title) {
            query += ' AND job_title ILIKE $1';
            params.push(`%${title}%`);
        }

        if (location) {
            query += ` AND location ILIKE $${params.length + 1}`;
            params.push(`%${location}%`);
        }

        if (type) {
            query += ` AND job_type = $${params.length + 1}`;
            params.push(type);
        }

        if (salary) {
            query += ` AND salary_range ILIKE $${params.length + 1}`;
            params.push(`%${salary}%`);
        }

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching jobs' });
    }
};


const createJob = async (req, res) => {
    try {
        const {
            job_title,
            company_name,
            job_type,
            salary_range,
            job_desc,
            application_deadline,
            location,
        } = req.body;
        console.log(req.body)
        const query = `
            INSERT INTO job (job_title, company_name, job_type, salary_range, job_desc, application_deadline, location)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `;

        const values = [
            job_title,
            company_name,
            job_type,
            salary_range,
            job_desc,
            application_deadline,
            location,
        ];
        console.log("values",values)
        console.log({pool})
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error creating job:", error)
        res.status(500).json({ error: 'Error creating job' });
    }
};

module.exports = { getJobs, createJob };

run npm i
then turn up your postgres 
-> docker pull postgres 
-> then run "docker run --name postgres-container \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=zoro123 \
  -e POSTGRES_DB=zoro \
  -p 5432:5432 \
  -d postgres
"
-> docker exec -it postgres-container psql -U postgres -d zoro
-> inside the zoro tble use "CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    job_title VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    job_type VARCHAR(50) NOT NULL,
    salary_range VARCHAR(255),
    job_desc TEXT,
    application_deadline DATE,
    location VARCHAR(255)
);
"
-> verify the table - \d jobs
-> then do npm run dev
-> then add jobs unsing "curl -X POST http://localhost:8080/api/jobs \
-H "Content-Type: application/json" \
-d '{
    "job_title": "DevOps Engineer",
    "company_name": "CloudTech",
    "job_type": "Full-Time",
    "salary_range": "90k-120k",
    "job_desc": "Manage cloud infrastructure and CI/CD pipelines.",
    "application_deadline": "2024-12-31",
    "location": "Remote"
}'
"
-> then you can get the jobs using "curl -X GET http://localhost:8080/api/jobs
"
-> test using query parameters "curl -X GET "http://localhost:8080/api/jobs?title=DevOps&type=Full-Time&location=Remote"
"
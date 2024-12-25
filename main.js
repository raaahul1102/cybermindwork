const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./src/routes/jobRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());

app.use(bodyParser.json());
app.use('/api/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

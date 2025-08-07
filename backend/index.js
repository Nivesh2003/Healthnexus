const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./helper/db');
const userRoute = require('./Routes/userRoute');
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use('/api/login', userRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

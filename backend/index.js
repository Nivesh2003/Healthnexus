const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./helper/db');
const userRoute = require('./Routes/userRoute');
const chatbot = require('./Routes/chatbot');
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;


app.use('/api/users', userRoute); // All users routes

app.use('/chat', chatbot);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

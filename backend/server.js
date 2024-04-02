const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// MongoDB Atlas connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
    res.send('Hello World mansi!');
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

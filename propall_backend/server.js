// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const viewsRouter = require('./routes/views');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/views', viewsRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});


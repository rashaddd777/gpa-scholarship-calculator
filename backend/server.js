// server.js
const express = require('express');
const cors = require('cors'); // <--- Import cors
const config = require('./config/config');
const gpaRoutes = require('./src/routes/gpaRoutes');
const errorHandler = require('./src/middlewares/errorHandler');
const connectDB = require('./config/db'); // Optional: for DB connection

const app = express();

// Optional: Connect to the database if using one
if (config.mongoUri) {
  connectDB();
}

// Enable CORS for all incoming requests
app.use(cors());

// Middleware: parse JSON bodies
app.use(express.json());

// Routes: use the GPA routes for endpoints under /api/gpa
app.use('/api/gpa', gpaRoutes);

// Global error handling middleware
app.use(errorHandler);

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port} in ${config.nodeEnv} mode`);
});

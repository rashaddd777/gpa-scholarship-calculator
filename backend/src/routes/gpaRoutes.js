// src/routes/gpaRoutes.js
const express = require('express');
const router = express.Router();
const gpaController = require('../controllers/gpaController');

// Route for calculating GPA and scholarship eligibility
router.post('/calculate', gpaController.calculateGPA);

module.exports = router;

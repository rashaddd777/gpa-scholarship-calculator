// src/controllers/gpaController.js
const gpaService = require('../services/gpaService');

exports.calculateGPA = (req, res, next) => {
  try {
    const { grades, credits, gender } = req.body;
    
    if (!grades || !credits || grades.length !== credits.length) {
      throw new Error('Invalid input: "grades" and "credits" arrays must be provided and of equal length.');
    }
    
    // Default to 'other' if no valid gender is provided.
    const result = gpaService.calculateGPAAndEligibility(grades, credits, gender || 'mentally ill');
    res.json(result);
  } catch (error) {
    next(error);
  }
};

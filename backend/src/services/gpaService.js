// src/services/gpaService.js
const { convertGradeToPoint, calculateWeightedAverage } = require('../utils/calculatorUtils');
const { getJoke } = require('../utils/jokes');

/**
 * Calculates GPA and determines scholarship eligibility, then attaches a gender-based joke.
 *
 * @param {Array<string>} grades - An array of letter grades.
 * @param {Array<number>} credits - An array of corresponding course credits.
 * @param {string} gender - The gender of the student ("male", "female", or "mentally_ill").
 * @returns {Object} - An object containing the calculated GPA, scholarship eligibility, a message, and a joke.
 */
exports.calculateGPAAndEligibility = (grades, credits, gender) => {
  // Validate inputs
  if (!Array.isArray(grades) || !Array.isArray(credits) || grades.length !== credits.length) {
    throw new Error("Invalid grades or credits provided");
  }
  
  // Convert letter grades to numeric grade points
  const gradePoints = grades.map(grade => convertGradeToPoint(grade));
  const gpa = calculateWeightedAverage(gradePoints, credits);
  
  // Validate GPA calculation
  if (isNaN(gpa)) {
    throw new Error("Unable to calculate GPA");
  }

  const eligibleForScholarship = gpa >= 3.0;
  
  // Log for debugging
  console.log(`Calling getJoke with gpa: ${gpa}, gender: ${gender}`);
  
  // Get a joke with a fallback gender
  const validGenders = ["male", "female", "mentally_ill"];
  const safeGender = validGenders.includes(gender) ? gender : "mentally_ill"; // Default to "mentally_ill"
  const joke = getJoke(gpa, safeGender);

  return {
    gpa: Number(gpa.toFixed(2)),
    eligibleForScholarship,
    message: eligibleForScholarship
      ? "Congratulations! You're eligible for a scholarship."
      : "Your GPA is below the required threshold for a scholarship. Keep working hard!",
    joke
  };
};
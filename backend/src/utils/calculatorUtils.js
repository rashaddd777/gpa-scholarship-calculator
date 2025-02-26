// src/utils/calculatorUtils.js

/**
 * Converts a letter grade to its numerical grade point equivalent.
 * Adjust the conversion table as needed to match ADA University's grading scale.
 *
 * @param {string} grade - The letter grade (e.g., "A", "B+", "C").
 * @returns {number} The numerical grade point.
 * @throws {Error} If an invalid grade is provided.
 */
exports.convertGradeToPoint = (grade) => {
  const gradeTable = {
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'F': 0.0
  };

  const upperGrade = grade.toUpperCase();
  const point = gradeTable[upperGrade];

  if (point === undefined) {
    throw new Error(`Invalid grade "${grade}" provided.`);
  }

  return point;
};

/**
 * Calculates the weighted average (GPA) based on grade points and corresponding credits.
 *
 * @param {Array<number>} gradePoints - Array of numerical grade points.
 * @param {Array<number>} credits - Array of corresponding course credits.
 * @returns {number} The weighted average GPA.
 * @throws {Error} If the total credits equal zero.
 */
exports.calculateWeightedAverage = (gradePoints, credits) => {
  const totalWeightedPoints = gradePoints.reduce((acc, point, index) => {
    return acc + point * credits[index];
  }, 0);

  const totalCredits = credits.reduce((acc, credit) => acc + credit, 0);

  if (totalCredits === 0) {
    throw new Error('Total credits cannot be zero.');
  }

  return totalWeightedPoints / totalCredits;
};

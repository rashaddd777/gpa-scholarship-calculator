// src/services/api.js

// Optionally, set a base URL for your API (adjust as needed)
const BASE_URL = process.env.REACT_APP_API_URL || '';

/**
 * Sends a POST request to calculate GPA and scholarship eligibility.
 * @param {Array<string>} grades - An array of letter grades.
 * @param {Array<number>} credits - An array of corresponding course credits.
 * @returns {Promise<Object>} - The response data from the backend.
 */
export async function calculateGPA(grades, credits) {
  try {
    const response = await fetch(`${BASE_URL}/api/gpa/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ grades, credits })
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to calculate GPA');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in calculateGPA:', error);
    throw error;
  }
}

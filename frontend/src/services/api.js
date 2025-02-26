// src/services/api.js

// Replace with your actual backend domain
const BASE_URL = 'https://my-external-backend.com';

/**
 * Sends a POST request to calculate GPA and scholarship eligibility.
 * @param {Array<string>} grades - An array of letter grades (e.g. ["A", "B+"]).
 * @param {Array<number>} credits - An array of corresponding course credits (e.g. [3, 3]).
 * @param {string} gender - The selected gender (e.g. "male", "female", "other").
 * @returns {Promise<Object>} - The response data from the backend.
 */
export async function calculateGPA(grades, credits, gender) {
  try {
    const response = await fetch(`${BASE_URL}/api/gpa/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ grades, credits, gender })
    });

    if (!response.ok) {
      // Attempt to parse error details from the response
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to calculate GPA');
    }

    // If the response is OK, parse the JSON result
    return await response.json();
  } catch (error) {
    console.error('Error in calculateGPA:', error);
    throw error;
  }
}


// src/utils/jokes.js
const jokes = {
  male: {
    low: ["Military", "Abroad", "McDonalds", "UNEC"],
    medium: ["Its fine, nobody actually cares about GPA", "Build a Project"],
    high: ["If you are studying BAPA, FOOD course, or BBA it doesn't count"]
  },
  female: {
    low: ["Find a rich husband"],
    medium: ["Its fine, nobody actually cares about GPA", "Try to cheat more in exams"],
    high: ["If you are studying BAPA, FOOD course, or BBA it doesn't count"]
  },
  mentally_ill: {
    low: ["Access Denied", "Access Denied"],
    medium: ["Access Denied", "Access Denied"],
    high: ["Access Denied", "Access Denied"]
  }
};

/**
 * Returns a random joke based on the provided GPA and gender.
 *
 * @param {number} gpa - The calculated GPA.
 * @param {string} gender - The gender provided ("male", "female", or "mentally_ill").
 * @returns {string} A humorous message.
 */
function getJoke(gpa, gender) {
  // Determine the level based on GPA.
  const level = gpa < 2 ? "low" : gpa < 3 ? "medium" : "high";

  // Log the incoming parameters for debugging.
  console.log(`getJoke called with gpa: ${gpa}, gender: ${gender}, level: ${level}`);

  // Whitelist valid genders.
  const validGenders = ["male", "female", "mentally_ill"];
  const safeGender = validGenders.includes(gender) ? gender : "mentally_ill"; // Default to "mentally_ill"

  // This should never happen now, but keep for extra safety.
  if (!jokes[safeGender][level]) {
    console.error(`No jokes found for gender: ${safeGender} at level: ${level}`);
    return "No joke available";
  }

  const jokeArray = jokes[safeGender][level];
  return jokeArray[Math.floor(Math.random() * jokeArray.length)];
}

module.exports = { getJoke };
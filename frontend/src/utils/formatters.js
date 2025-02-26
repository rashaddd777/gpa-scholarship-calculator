// src/utils/formatters.js

/**
 * Formats a number to a fixed number of decimal places.
 * @param {number} num - The number to format.
 * @param {number} decimals - The number of decimals to show (default: 2).
 * @returns {string} The formatted number.
 */
export const formatNumber = (num, decimals = 2) => {
  if (typeof num !== 'number') return num;
  return num.toFixed(decimals);
};

/**
 * Formats a number as currency with a given symbol.
 * @param {number} amount - The monetary amount.
 * @param {string} currencySymbol - The symbol to use (default: Azerbaijani manat '₼').
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount, currencySymbol = '₼') => {
  return `${currencySymbol}${parseFloat(amount).toFixed(2)}`;
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} text - The text to format.
 * @returns {string} The text with the first letter capitalized.
 */
export const capitalize = (text) => {
  if (typeof text !== 'string' || text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Formats a number as a percentage string.
 * @param {number} num - The number to format (e.g., 0.25 for 25%).
 * @param {number} decimals - The number of decimal places (default: 0).
 * @returns {string} The formatted percentage.
 */
export const formatPercentage = (num, decimals = 0) => {
  if (typeof num !== 'number') return num;
  return `${(num * 100).toFixed(decimals)}%`;
};

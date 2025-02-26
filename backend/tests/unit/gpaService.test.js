// tests/unit/gpaService.test.js
const gpaService = require('../../src/services/gpaService');

describe('GPA Service', () => {
  test('should calculate correct GPA and scholarship eligibility', () => {
    const grades = ['A', 'B', 'C'];
    const credits = [3, 3, 4];
    const result = gpaService.calculateGPAAndEligibility(grades, credits);
    
    // Expected GPA: (4*3 + 3*3 + 2*4) / 10 = 29/10 = 2.9
    expect(result.gpa).toBeCloseTo(2.9, 1);
    expect(result.eligibleForScholarship).toBe(false);
    expect(result.message).toMatch(/below/);
  });

  test('should throw an error if grades and credits arrays have different lengths', () => {
    const grades = ['A', 'B'];
    const credits = [3];
    expect(() => {
      gpaService.calculateGPAAndEligibility(grades, credits);
    }).toThrow();
  });
});

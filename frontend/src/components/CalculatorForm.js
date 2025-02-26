// src/components/CalculatorForm.js
import React, { useState } from 'react';

const CalculatorForm = () => {
  // Store courses as an array of objects with grade and credit.
  const [courses, setCourses] = useState([{ grade: '', credit: '' }]);
  const [gender, setGender] = useState('other'); // Default gender is 'other'
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  // Handle changes for each course field.
  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  // Add a new course input field.
  const addCourse = () => {
    setCourses([...courses, { grade: '', credit: '' }]);
  };

  // Remove a course input field.
  const removeCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  // Handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract grades and credits from the courses array.
    const grades = courses.map((course) => course.grade);
    const credits = courses.map((course) => parseFloat(course.credit));

    // Basic validation: ensure no fields are empty.
    if (courses.some((course) => course.grade === '' || course.credit === '')) {
      setError('Please fill in all course fields.');
      return;
    }
    setError('');

    try {
      // Send data to the backend API
      const response = await fetch('https://my-external-backend.com/api/gpa/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grades, credits, gender }),
      });      

      if (!response.ok) {
        throw new Error('Failed to calculate GPA.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Error calculating GPA.');
    }
  };

  return (
    <>
      {/* Header Section */}
      <header className="bg-light py-5 mb-4">
        <div className="container text-center">
          <h1 className="mb-3">GPA Calculator</h1>
          <p className="lead mb-0">
            Welcome to the calculator that helps ADA University students compute their GPA.
          </p>
          <p>
          "If the content bothers you or makes you uncomfortable, feel free to get offended."
          </p>
        </div>
      </header>

      {/* Main Container for the Form */}
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Enter Your Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="gender-select" className="form-label">
                  Select Gender:
                </label>
                <div>
                  <select
                    id="gender-select"
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Mentally Ill</option>
                  </select>
                </div>
              </div>

              {courses.map((course, index) => (
                <div key={index} className="row g-2 align-items-end mb-3">
                  <div className="col-md-5">
                    <label className="form-label">Grade (e.g., A, B+)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Grade"
                      value={course.grade}
                      onChange={(e) =>
                        handleCourseChange(index, 'grade', e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-5">
                    <label className="form-label">Credit Hours</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Credits"
                      value={course.credit}
                      onChange={(e) =>
                        handleCourseChange(index, 'credit', e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-2 text-end">
                    {courses.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => removeCourse(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-between mb-3">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={addCourse}
                >
                  Add Course
                </button>
                <button type="submit" className="btn btn-primary">
                  Calculate GPA
                </button>
              </div>
            </form>

            {error && <p className="text-danger text-center">{error}</p>}

            {result && (
              <div className="alert alert-info mt-4">
                <h4>Results</h4>
                <p>
                  <strong>GPA:</strong> {result.gpa}
                </p>
                <p>
                  <strong>Status:</strong> {result.message}
                </p>
                <p>
                  <strong>Life Advice:</strong> {result.joke}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorForm;


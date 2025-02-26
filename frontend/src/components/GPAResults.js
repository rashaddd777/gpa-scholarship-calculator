// src/components/GPAResults.js
import React from 'react';

const GPAResults = ({ result }) => {
  if (!result) return null;

  return (
    <div className="gpa-results">
      <h2>Calculation Results</h2>
      <p><strong>GPA:</strong> {result.gpa}</p>
      <p><strong>Status:</strong> {result.message}</p>
    </div>
  );
};

export default GPAResults;

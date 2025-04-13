// src/components/Day1/CustomerProfile.jsx
import React from 'react';

const CustomerProfile = ({ name, totalFDs, totalRDs, totalInvestment }) => {
  return (
    <div className="card mb-3 shadow-sm">
         
      <div className="card-header bg-info text-white" style={{ color: '#6f42c1' }}>Customer Profile</div>
      <div className="card-body">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Total FDs:</strong> {totalFDs}</p>
        <p><strong>Total RDs:</strong> {totalRDs}</p>
        <p><strong>Total Investment:</strong> ₹{totalInvestment}</p>
      </div>
    </div>
  );
};

export default CustomerProfile;

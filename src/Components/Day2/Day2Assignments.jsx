import React from 'react';
import FDForm from './FDForm';
import RDForm from './RDForm';
import BranchSelector from './BranchSelector';
import './Day2Assignments.css'; 

const Day2Assignments = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Day 2 Components</h2>
      <div className="d-flex justify-content-between gap-4">
        <div className="assignment-box bg-light-blue">
          <FDForm />
        </div>
        <div className="assignment-box bg-light-yellow">
          <RDForm />
        </div>
        <div className="assignment-box bg-light-green">
          <BranchSelector />
        </div>
      </div>
    </div>
  );
};

export default Day2Assignments;

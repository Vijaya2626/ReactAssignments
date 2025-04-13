import React from 'react';
import FDMaturityCalc from './FDMaturityCalc';
import RDContributionEvents from './RDContributionEvents';
import ThemeSwitcher from './ThemeSwitcher';
import './Day4Assignments.css'; // Add custom CSS for styling

const Day4Assignments = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📅 Day 4 - Interactive Banking Features</h2>
      
      {/* Theme Switcher */}
      <div className="feature-box bg-light-purple">
        <ThemeSwitcher />
      </div>

      {/* FD Maturity Calculator */}
      <div className="feature-box bg-light-teal">
        <FDMaturityCalc />
      </div>

      {/* RD Contribution Tracker */}
      <div className="feature-box bg-light-orange">
        <RDContributionEvents />
      </div>
    </div>
  );
};

export default Day4Assignments;

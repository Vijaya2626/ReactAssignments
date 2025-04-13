import React from 'react';
import FixedDepositSummary from './FixedDepositSummary';
import RDContributionTracker from './RDContributionTracker';
import CustomerProfile from './CustomerProfile';

const Day1Assignments = () => {
  return (
    <div
      className="container my-5 p-4"
      style={{
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
        borderRadius: '20px',
      }}
    >
      <h2 className="text-center mb-5 border-bottom pb-3" style={{ color: '#6f42c1' }}>
        Day 1 Components
      </h2>

      <div className="row justify-content-center g-5">
        {/* Card 1 */}
        <div className="col-md-7">
          <div className="card shadow-sm rounded-0">
            <div className="card-body">
              <FixedDepositSummary
                depositAmount={50000}
                interestRate={7.5}
                tenure={12}
                maturityAmount={54000}
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-7">
          <div className="card shadow-sm rounded-0">
            <div className="card-body">
              <RDContributionTracker />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-7">
          <div className="card shadow-sm rounded-0">
            <div className="card-body">
              <CustomerProfile
                name="Vijaya Durga"
                totalFDs={3}
                totalRDs={2}
                totalInvestment={100000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day1Assignments;

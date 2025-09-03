import React from 'react';
import '../styles/components/StatsSection.scss';

const StatsSection = () => {
  return (
    <div className="stats-section">
      <div className="stat-item">
        <h2>75%</h2>
        <p>log in every day</p>
      </div>
      
      <div className="stat-item">
        <h2>15K</h2>
        <p>Users</p>
      </div>
      
      <div className="stat-item">
        <h2>63%</h2>
        <p>2x mood logs per day</p>
      </div>
    </div>
  );
};

export default StatsSection; 
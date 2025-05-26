import React from 'react';
import '../styles/components/FeaturesSection.scss';
import { FaBook, FaChartLine, FaBell } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>
          <span>Hiknow</span> Features
        </h2>
        <p>Discover how Hiknow can help you understand and improve your mental well-being</p>
      </div>

      <div className="features-grid">
        <div className="feature-box">
          <div className="feature-icon">
            <FaBook />
          </div>
          <h3>Daily Journaling & Mood Tracking</h3>
          <p>Log how you feel and what you're thinking. Capture your daily thoughts, emotions, and experiences in a secure and structured way — anytime, anywhere.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
            <FaChartLine />
          </div>
          <h3>Smart Insights & Reports</h3>
          <p>Visualize patterns in your mental well-being. Get weekly or monthly reports that help you understand your mood trends and emotional triggers over time.</p>
        </div>

        <div className="feature-box">
          <div className="feature-icon">
            <FaBell />
          </div>
          <h3>Reminders & Notifications</h3>
          <p>Never miss a check-in. Set personalized reminders to journal daily and stay on track with your emotional health journey.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 
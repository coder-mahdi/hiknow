import React from 'react';
import '../styles/components/FeaturesDetailSection.scss';
import { FaChalkboardTeacher, FaLock, FaFileExport, FaMobileAlt } from 'react-icons/fa';
import featureImage from '../data/feature.png';

const FeaturesDetailSection = () => {
  return (
    <div className="features-detail-section">
      <div className="features-detail-header">
        <h2><span>Hiknow</span> Features</h2>
        <p>This powerful feature makes mood tracking more efficient</p>
      </div>

      <div className="features-detail-content">
        <div className="feature-image">
          <img src={featureImage} alt="Hiknow Features" />
        </div>

        <div className="feature-list">
          <div className="feature-item">
            <div className="feature-icon">
              <FaChalkboardTeacher />
            </div>
            <p>A user interface designed for the classroom</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaLock />
            </div>
            <p>Your data is encrypted and stored securely. Your journal belongs to you — no one else.</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaFileExport />
            </div>
            <p>Export your data whenever you want — your notes are safe and portable</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <FaMobileAlt />
            </div>
            <p>Access your entries anytime, from any device — phone, tablet, or desktop.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDetailSection; 
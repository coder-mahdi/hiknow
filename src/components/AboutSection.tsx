import React from 'react';
import '../styles/components/AboutSection.scss';
import { FaPlay } from 'react-icons/fa';
import howToUseImage from '../data/how-to-use.png';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>What is <span>Hiknow</span>?</h2>
        <p><span>Hiknow</span> is a cloud-based journaling and mood tracking app that helps you reflect on your daily experiences. Log your emotions, thoughts, and activities in just a few minutes a day. Gain insights through personalized reports to better understand your mental well-being.</p>
      </div>

      <div className="about-image-container">
        <img src={howToUseImage} alt="How to use Hiknow" className="about-image" />
        <button className="watch-button">
          <FaPlay />
          <span>Watch How to Use</span>
        </button>
      </div>
    </div>
  );
};

export default AboutSection; 
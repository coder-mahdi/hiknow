import React from 'react';
import { FaPlay, FaUsers, FaCheckCircle, FaUserFriends } from 'react-icons/fa';
import heroImage from '../data/hero.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Say Hello to Simpler Self-Tracking with
            <span className="hero__highlight">Hiknow</span>
          </h1>
          <p className="hero__subtitle">
            Your Mood. Your Journal. Your Insights
          </p>
          <div className="hero__buttons">
            <button className="hero__button hero__button--primary">Join for Free</button>
            <button className="hero__button hero__button--watch">
              <span className="hero__watch-text">Watch How It Works</span>
              <FaPlay className="hero__icon" />
            </button>
          </div>
        </div>
        <div className="hero__image">
          <div className="hero__floating-box hero__floating-box--users">
            <FaUsers className="hero__floating-icon" />
            <span className="hero__floating-text">15K+ Canadians trust Hiknow</span>
          </div>
          <div className="hero__floating-box hero__floating-box--success">
            <FaCheckCircle className="hero__floating-icon" />
            <span className="hero__floating-text">Success! Your mood has been recorded</span>
          </div>
          <img src={heroImage} alt="Hiknow App Preview" />
        </div>
      </div>
    </div>
  );
};

export default Hero; 
import React from 'react';
import '../styles/components/TestimonialSection.scss';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import testimonialImage from '../data/testimonial.png';

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <div className="testimonial-header">
            <span className="section-label">Testimonial</span>
            <h2>What They Say?</h2>
          </div>
          <ul>
            <li>Hiknow has received over 40K positive ratings from users around the world.</li>
            <li>Mood tracking with Hiknow is now part of their daily routine</li>
            <li>Are you too? Please give your assessment</li>
          </ul>
          <button className="review-button">Leave Your Review</button>
        </div>

        <div className="testimonial-image-container">
          <img src={testimonialImage} alt="Testimonial" className="testimonial-image" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
          <div className="testimonial-box">
            <p>"As a university student, my days can get overwhelming. Hiknow helps me stay grounded and reflect on my emotions. It's become a small but powerful part of my daily routine."</p>
            <div className="testimonial-author">
              <h4>John Smith</h4>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection; 
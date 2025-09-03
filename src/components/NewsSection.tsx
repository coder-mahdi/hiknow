import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/NewsSection.scss';
import newsletter1 from '../data/newsletter-1.png';
import newsletter2 from '../data/newsletter-2.png';
import newsletter3 from '../data/newsletter-3.png';
import newsletter4 from '../data/newsletter-4.png';

const NewsSection: React.FC = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>Latest News and Resources</h2>
        <p>Discover the latest updates and developments from Hiknow</p>
      </div>

      <div className="news-content">
        <div className="main-news">
          <img src={newsletter1} alt="Main News" />
          <div className="news-text">
            <h3>Hiknow Partners with Canadian Universities for Student Mental Health Initiative</h3>
            <p>Through this partnership, thousands of students will gain free access to Hiknow's journaling and emotional insight tools starting this fall semester.</p>
            <Link to="/news/1" className="read-more">Read More</Link>
          </div>
        </div>

        <div className="side-news">
          <div className="news-item">
            <img src={newsletter2} alt="News 2" />
            <div className="news-text">
              <h4>New Feature: Mood Trends Dashboard Now Live on Hiknow</h4>
              <p>Users can now view week-to-week visual reports on their ...</p>
              <Link to="/news/2" className="read-more">Read More</Link>
            </div>
          </div>

          <div className="news-item">
            <img src={newsletter3} alt="News 3" />
            <div className="news-text">
              <h4>Hiknow Launches Multi-Language Support to Reach Global Users</h4>
              <p>With the addition of French, Spanish, and Farsi, Hiknow is now ...</p>
              <Link to="/news/3" className="read-more">Read More</Link>
            </div>
          </div>

          <div className="news-item">
            <img src={newsletter4} alt="News 4" />
            <div className="news-text">
              <h4>Hiknow Recognized as One of Canada's Top 10 Mental Health Startups of 2025</h4>
              <p>The award, presented by TechWellness Canada, highlights the ...</p>
              <Link to="/news/4" className="read-more">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 
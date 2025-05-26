import React from 'react';
import Layout from '../layouts/Layout';
import HeroSection from '../components/Hero';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import FeaturesDetailSection from '../components/FeaturesDetailSection';
import TestimonialSection from '../components/TestimonialSection';
import NewsSection from '../components/NewsSection';

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <div className="landing-page">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <AboutSection />
        <FeaturesDetailSection />
        <TestimonialSection />
        <NewsSection />
      </div>
    </Layout>
  );
};

export default LandingPage; 
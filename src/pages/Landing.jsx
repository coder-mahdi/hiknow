import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import FeaturesDetailSection from '../components/FeaturesDetailSection';

const Landing = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <StatsSection />
        <FeaturesSection />
        <AboutSection />
        <FeaturesDetailSection />
      </div>
    </Layout>
  );
};

export default Landing;

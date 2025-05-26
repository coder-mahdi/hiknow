import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';

const Landing = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <StatsSection />
      </div>
    </Layout>
  );
};

export default Landing;

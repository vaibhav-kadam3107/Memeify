import React from 'react';
import Navbar from './landingSections/Navbar';
import HeroSection from './landingSections/HeroSection';
import FeaturesSection from './landingSections/Features';
import Pricing from './landingSections/Pricing';
import Testimonials from './landingSections/Testimonials';
import Footer from './landingSections/Footer';
import HowItWorks from './landingSections/HowItWorks';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/Herosection.jsx";
import CompareColleges from "./components/CompareColleges.jsx";
import ExploreColleges from "./components/ExploreColleges.jsx";
import ShortlistColleges from "./components/ShortlistColleges.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CompareColleges />
      <ExploreColleges />
      <ShortlistColleges />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

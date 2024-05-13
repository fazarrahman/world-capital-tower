import React from 'react';
import StartButton from '../components//StartButton';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Flawless from '../components/Flawless';
import Location from '../components/Location';
import Apartments from '../components/Apartments';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from '@/components/ui/Carousel';



function Home() {
  return (
    <main>
      <Menu />
      <div className="smooth-scroll-content" id="scrollsmoother-container">
        <Navbar />
        <Header />
        <main>
          <About />
          <Carousel />
          <Apartments />
        </main>
        <Footer />
      </div>
      <StartButton />
    </main>
  );
}

export default Home;

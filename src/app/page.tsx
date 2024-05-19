import React from 'react';
import StartButton from '../components//StartButton';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from '@/components/ui/Carousel';
import Tenants from '@/components/Tenants';
import Contact from '@/components/Contact';



function Home() {
  return (
    <main>
      <Menu />
      <div className="smooth-scroll-content" id="scrollsmoother-container">
        <Navbar />
        <Header />
        <main>
          <About />
          <Tenants />
          <Contact />
        </main>
        <Footer />
      </div>
      <StartButton />
    </main>
  );
}

export default Home;

import React from 'react';
import Loader from '../components/common/Loader';
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
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <script src="/common/assets/js/common_js.js"></script>
        <script src="/assets/js/home_5_scripts.js"></script>
      </Head>
      <body className="home-style5">
        <Loader />
        <Menu />
        <div className="smooth-scroll-content" id="scrollsmoother-container">
          <Navbar />
          <Header />
          <main>
            <About />
            <Flawless />
            <Location />
            <Apartments />
            <Testimonials />
            <Services />
            <Blog />
          </main>
          <Footer />
        </div>
        <StartButton />
      </body>
    </>
  );
}

export default Home;

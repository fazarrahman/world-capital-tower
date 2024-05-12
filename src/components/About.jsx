import React from 'react';
import TextAppearDelay from './ui/TextAppearDelay';

function About() {
  return (
    <section className="tc-about-style5">
      <div className="container">
        <div className="content">
          <h2 className="about-title mb-150 js-splittext-lines">
            <TextAppearDelay className="color-brown1" text="Premium class apartments" />
            <TextAppearDelay text="with five stars hotel services" />
            <TextAppearDelay text="in your home" />
          </h2>
          <div className="main-content">
            <div className="row justify-content-between">
              <div className="col-lg-2">
                <div className="text">
                  <TextAppearDelay text="exclusive from" />
                  <TextAppearDelay text="mandarin oriental" />
                  <TextAppearDelay text="ny hotel" />
                </div>
                <div className="logo-mo mt-60 th-160 op-4">
                  <img
                    src="/assets/images/logo_mo.png"
                    alt=""
                    className="img-contain"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="img wow zoomIn slow" data-wow-delay="0.2s">
                  <img
                    src="/assets/images/header.jpg"
                    alt=""
                    className="img-cover"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <h6 className="color-brown1 text-uppercase fsz-24 lh-4 js-splittext-lines">
                  <TextAppearDelay text="archin rising above THE urbanLANDSCAPE and becomes A VISIBLE METAPHOR FOR THE DIZZYING SUCCESS OF ITS INHABITANTS." />
                </h6>
                <TextAppearDelay tag="p" className="fsz-13 mt-40" text="With amenities & services a 5* hotel at the lower levels of
                  building. Archin will bring the best best experience for you
                  freedom enjoy the life" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/about.png"
        alt=""
        className="float_img"
      />
      <span className="lg-txt js-title sub-font"> about </span>
    </section>
  );
}

export default About;

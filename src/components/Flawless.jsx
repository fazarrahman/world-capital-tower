import React from 'react';
import data from '@/data/flawless';
function Flawless() {
  return (
    <section className="tc-flawless-style5">
      <div className="container">
        <div className="flawless wow zoomIn slow" data-wow-delay="0.2s">
          <div className="flex-accordion">
            <ul className="acc-list">
              {data.map((item, i) => (
                <li key={i} className={`acc-li  ${i == 0 && 'is-open'}`}>
                  <img src={item.img} alt="" className="bg" />
                  <div className="panel-inner">
                    <div className="acc-title">
                      <div className="numb"> {i + 1} </div>
                      <div className="txt"> {item.title} </div>
                    </div>
                    <div className="acc-body">
                      <h3 className="text-title">
                        {item.subTitle.split('<br />')[0]} <br />{' '}
                        {item.subTitle.split('<br />')[1]}
                      </h3>
                      <a href="#" className="                                  x">
                        <i className="fat fa-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="numbers">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="number-card wow fadeInUp slow"
                data-wow-delay="0.2s"
              >
                <h2 className=""> 5,265 </h2>
                <p>
                  square meter <br /> areas
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="number-card wow fadeInUp slow"
                data-wow-delay="0.4s"
              >
                <h2 className=""> 924 </h2>
                <p>
                  spacious & modern <br /> apartments
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="number-card wow fadeInUp slow"
                data-wow-delay="0.6s"
              >
                <h2 className=""> 1,264 </h2>
                <p>
                  slot car parking indoor <br /> and outdoor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flawless;

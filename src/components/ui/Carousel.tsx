'use client'
import React, { useState } from 'react';
import { GrFormPrevious , GrFormNext } from "react-icons/gr";
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
    const slides = [
      {
        url: '/images/location/loc1.jpg',
      },
      {
        url: '/images/location/loc2.jpg',
      },
      {
        url: '/images/location/loc3.jpg',
      },
  
      {
        url: '/images/location/loc4.jpg',
      }
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex: any) => {
      setCurrentIndex(slideIndex);
    };
  
    return (
      <div className='w-screen h-screen m-auto relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        <div className="arrows">
          <GrFormPrevious className="swiper-button-prev" onClick={prevSlide} />
          <GrFormNext className="swiper-button-next" onClick={nextSlide} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled color='white' />
            </div>
          ))}
        </div>
      </div>
    );
  }
 
export default Carousel;
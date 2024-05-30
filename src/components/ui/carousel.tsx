"use client"
import { useEffect, useState } from 'react';

const images = [
    '/header@2x.png',
    '/header4@2x.png',
    '/worldcapitaltower201301@2x.png'
];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 10 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
            ))}
        </>
    );
}

export default Carousel;
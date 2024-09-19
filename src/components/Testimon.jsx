// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Testimon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      image: 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/Sourav+Ghosh.jpg',
      title: 'Sourav Ghosh',
      description: 'Founder, Sportsreconnect',
    },
    {
      image: 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/prateek+pathak.jpg',
      title: 'Prateek Pathak',
      description: 'Founder, Artociate',
    },
    {
      image: 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/Amit+Rambhia.jpg',
      title: 'Amit Rambhia',
      description: 'Founder, Panache DigiLife Ltd.',
    },
    {
      image: 'https://bookstoreapp1.s3.eu-north-1.amazonaws.com/jayesh+kirge.jpg',
      title: 'Jayesh Kirage',
      description: 'Founder,GlobeOp Financial ServicesGlobeOp',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Add a unique class name to the body
    document.body.classList.add('carousel-view');

    // Clean up by removing the class name when the component unmounts
    return () => {
      document.body.classList.remove('carousel-view');
    };
  }, []);

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-heading ">Testimonials</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-slide">
          <div className="carousel-item">
            <img src={items[currentIndex].image} alt="Slide" />
            <div className="carousel-content">
              <h3>{items[currentIndex].title}</h3>
              <p>{items[currentIndex].description}</p>
            </div>
          </div>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimon;

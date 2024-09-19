import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import { name } from '../constants'; // Assuming 'name' is 'VESIT E-Cell'
import Experience from './Experience';
import Testimonials from './Testimon';
import Team from './Projects';

const Home = () => {
  const [text, setText] = useState(''); // Holds the dynamic text
  const [isDeleting, setIsDeleting] = useState(false); // Toggle between typing and deleting
  const ref = useRef(0); // Index of the current character


  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (ref.current < name.length) {
          setText(name.slice(0, ref.current + 1));
          ref.current++;
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        if (ref.current > 0) {
          setText(name.slice(0, ref.current - 1));
          ref.current--;
        } else {
          setTimeout(() => setIsDeleting(false), 500); // Pause before retyping
        }
      }
    };

    const interval = setInterval(handleTyping, 150); // Typing/erasing speed
    return () => clearInterval(interval);
  }, [isDeleting]);

  return (
    <div className='relative z-0 bg-black w-screen h-screen'>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      {/* Hero Section */}
      <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
        <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl text-center'>
          <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
            Welcome to&nbsp;
            <span className='text-yellow-200 font-extrabold inline-block relative'>
              <span style={{ visibility: 'hidden' }}>VESIT E-Cell</span> {/* Invisible spacer to keep "Welcome to" in place */}
              <span className='absolute top-0 left-0'>{text}</span> {/* Dynamic typing text */}
            </span>
          </h1>
          <p className='mt-3'>Money grows on Entrepreneurship</p>
        </div>
      </div>

      {/* About Us Section */}
      <div className='about-us h-[calc(100vh)] flex justify-between items-center text-white p-10 bg-gray-900'>
        {/* Left Side Text */}
        <div className='about-text w-1/2'>
          <h2 className='text-4xl font-bold mb-6'>About Us</h2>
          <p className='text-lg'>
            We at VESIT E-Cell aim to foster the spirit of entrepreneurship and innovation among students.
            Our mission is to provide the right resources, guidance, and mentorship to help young
            innovators turn their ideas into successful ventures. Join us on our journey to create a
            thriving entrepreneurial ecosystem.
          </p>
        </div>

        {/* Right Side Image */}
        <div className='about-image w-1/2'>
          <img
            src="https://bookstoreapp1.s3.eu-north-1.amazonaws.com/abt_us.jpg" // Replace this with the actual image URL
            alt="About Us"
            className='rounded-lg shadow-lg w-full h-auto'
          />
        </div>
      </div>
      <div className='events-section'>
        <Experience /> {/* Renamed Experience component to show Events */}
      </div>
      <div className='Team'>
        <Team /> {/* Renamed Experience component to show Events */}
      </div>
      <div className='Testimonials'>
        <Testimonials /> {/* Renamed Experience component to show Events */}
      </div>
      <Footer/>
  
    </div>
  );
};

export default Home;

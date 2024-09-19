import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar12 = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${scrolling ? 'backdrop' : ''}`}>
      <div className="mx-auto flex w-5/6 justify-between items-center">
        <div className="text-3xl sm:text-2xl font-extrabold">
          <a href="/" className="nav-title">VESIT E-Cell</a>
        </div>
        <div className="hidden sm:flex space-x-4 items-center text-sm">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/about" className="nav-button">About</Link>
          <Link to="/projects" className="nav-button">Events</Link>
          <Link to="/experience" className="nav-button">Team</Link>
          <Link to="/experience" className="nav-button">Testimonials</Link>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="text-xl focus:outline-none">
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-center ${isMobileMenuOpen ? 'flex flex-col items-center justify-center' : 'hidden'}`}>
          <button onClick={closeMobileMenu} className="text-xl absolute top-4 right-4 focus:outline-none">
            ✕
          </button>
          <ul className="font-medium text-2xl space-y-4">
            <li><Link to='/' onClick={closeMobileMenu} className="nav-button">Home</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu} className="nav-button">About</Link></li>
            <li><Link to='/projects' onClick={closeMobileMenu} className="nav-button">Projects</Link></li>
            <li><Link to='/experience' onClick={closeMobileMenu} className="nav-button">Experience</Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu} className="nav-button">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar12;

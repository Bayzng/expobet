import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Navbar'>
      <div className='--Navbar-content'>
        <div className='--Navbar-expobet'>
          <h2>E<span className='spanX'>X</span>POBET<span className='span247'>247</span></h2>
        </div>
        <div className={`--Navbar-Data ${isOpen ? 'open' : ''}`}>
          <h3>EXPERT TIPS</h3>
          <h3>ABOUT US</h3>
          <h3>LIVESCORE</h3>
          <h3>FAQS</h3>
          <Link to='/register'>
           <button>SIGN UP</button>
          </Link>
        </div>
        <div className='--Navbar-icon' onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

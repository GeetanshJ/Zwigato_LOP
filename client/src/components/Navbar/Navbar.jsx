import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
        <img src={assets.logo} className='logo' alt='Logo' />
    
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={() => { setMenu("home"); setIsMenuOpen(false); }} className={menu === "home" ? "active" : ""}>Home</li>
            <li onClick={() => { setMenu("menu"); setIsMenuOpen(false); }} className={menu === "menu" ? "active" : ""}>Menu</li>
            <li onClick={() => { setMenu("mobile-app"); setIsMenuOpen(false); }} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
            <li onClick={() => { setMenu("contact-us"); setIsMenuOpen(false); }} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
        </ul>
    
        <div className="navbar-right">
            <img src={assets.search_icon} alt="Search" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="Basket" />
                <div className="dot"></div>
            </div>
            <button>Sign-In</button>
        </div>
    
        <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="icon" />
            ) : (
                <FontAwesomeIcon icon={faBars} className="icon" />
            )}
        </div>
    </div>
    
    );
};

export default Navbar;

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import "./Navbar.css";

const Navbar = ({ setLogin, scrollToSection }) => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { token, setToken } = useContext(StoreContext);

    const toggleMenu = () => setIsMenuOpen(prevState => !prevState);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setIsMenuOpen(false);
        scrollToSection(menuName);
    };

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem("token");
        setLogin(false);
    };

    const handleNav = () => {};

    return (
        <div className="navbar">
            <img src={assets.logo} className="logo" alt="Logo" />
            <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
                <li onClick={() => handleMenuClick("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => handleMenuClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => handleMenuClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
                <li onClick={() => handleMenuClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket" />
                </div>
                {token ? (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="Profile" onClick={toggleDropdown} />
                        {showDropdown && (
                            <div className="profile-dropdown">
                                <button className="dropdown-btn" onClick={handleNav}>Orders</button>
                                <button className="dropdown-btn" onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="sign-in-btn" onClick={() => setLogin(true)}>Sign-In</button>
                )}
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? (
                    <FontAwesomeIcon icon={faTimes} className="icon cross-icon" />
                ) : (
                    <FontAwesomeIcon icon={faBars} className="icon" />
                )}
            </div>
        </div>
    );
};

export default Navbar;

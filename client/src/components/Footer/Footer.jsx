import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id = 'footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minima deleniti alias, tempore consequuntur cum, placeat libero nobis perferendis rerum fugiat vero perspiciatis temporibus, assumenda voluptatum fuga error esse quibusdam.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a className='footer-a' href = "tel:9876543210" >CONTACT US</a></li>
                        <li>contact@zwigato.com</li>
                    </ul>
                </div>
            </div>

            <hr/>
            <div className="footer-copyright">Copyright 2024@ Zwigato.com-All Rights Reserved</div>
        </div>
    )
}

export default Footer

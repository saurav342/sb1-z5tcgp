import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Malama Cabs</h2>
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Malama Cabs. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
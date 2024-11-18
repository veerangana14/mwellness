import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import './Footer.css';
import '../../Assets/root.css';
import Logo from '../../Assets/images/logo.png';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();

    return (
        <div id="footer-outer-container">
            <div id='footer-container'>
                <div className='logo-img-container'>
                    <img src={Logo} alt="logo-img" />
                </div>

                <div id='page-links-container'>
                    <ul id='links-list'>
                        <li className='list-item' onClick={() => navigate("/")}>Home</li>
                        <li className='list-item' onClick={() => navigate("/")}>About</li>
                        <li className='list-item' onClick={() => navigate("/team")}>Team</li>
                        <li className='list-item' onClick={() => navigate("/faq")}>FAQ</li>
                        <li className='list-item' onClick={() => navigate("/contact")}>Contact</li>
                    </ul>
                </div>

                <div id='social-media-links-container'>
                    <div className='icon-container'>
                        <FaFacebookF className='social-media-icon' />
                    </div>
                    <div className='icon-container'>
                        <FaInstagram className='social-media-icon' />
                    </div>
                    <div className='icon-container'>
                        <FaTwitter className='social-media-icon' />
                    </div>
                    <div className='icon-container'>
                        <FaWhatsapp className='social-media-icon' />
                    </div>
                </div>

            </div>
            <hr id='footer-hr'></hr>
            <div id='copyrights'>
                <p>&copy; Webkype 2024-2025</p>
            </div>
        </div>
    )
}

export default Footer
import React, { useState } from 'react'
import './Navbar.css';
import '../../Assets/root.css';
import Logo from '../../Assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {

    const [isResourcesHovered, setIsResourcesHovered] = useState(false);
    const [isArtsHovered, setIsArtsHovered] = useState(false);
    const navigate = useNavigate();

  return (
    <div id="navbar-outer-container">
        <div id='navbar-container'>
            <div className='logo-img-container' onClick={() => navigate("/")}>
                <img src={Logo} alt="logo-img" />
            </div>

            <div id='nav-links-container'>
                <ul id='links-list'>
                    <div className='nav-list-item' onClick={() => navigate("/")}>
                        <li className='navbar-list-item'>Home</li>
                    </div>
                    <div className='nav-list-item' onClick={() => navigate("/about")}>                    
                        <li className='navbar-list-item'>About</li>
                    </div>
                    <div className='nav-list-item' onClick={() => navigate("/team")}>                    
                        <li className='navbar-list-item'>Team</li>
                    </div>
                    <div className='nav-list-item resources'
                        onMouseEnter={() => setIsResourcesHovered(true)}
                        onMouseLeave={() => setIsResourcesHovered(false)}
                    >                    
                        <li className='navbar-list-item'>
                            {/* Resources */}
                            Resources {isResourcesHovered ? <FaChevronUp /> : <FaChevronDown />}
                        </li>

                        {isResourcesHovered && (
                            <ul className="dropdown-menu">
                                <li onClick={() => navigate("/assessments")}>Assessments</li>
                                <li onClick={() => navigate("/awareness-campaigns")}>Awareness Campaigns</li>
                                <li onClick={() => navigate("/journals")}>Journals</li>
                                <li onClick={() => navigate("/seminars")}>Seminars</li>
                                <li onClick={() => navigate("/community")}>Community</li>
                                {/* <li onClick={() => navigate("/patient-gallery")}>Patient Gallery</li> */}
                            </ul>
                        )}
                    </div>
                    <div className='nav-list-item arts'
                        onMouseEnter={() => setIsArtsHovered(true)}
                        onMouseLeave={() => setIsArtsHovered(false)}
                    >                    
                        <li className='navbar-list-item'>
                            Arts {isArtsHovered ? <FaChevronUp /> : <FaChevronDown />}
                        </li>

                        {isArtsHovered && (
                            <ul className="dropdown-menu">
                                <li onClick={() => navigate("/arts-audio")}>Audio</li>
                                <li onClick={() => navigate("/arts-video")}>Video</li>
                            </ul>
                        )}
                    </div>
                    <div className='nav-list-item' onClick={() => navigate("/faq")}>                    
                        <li className='navbar-list-item'>FAQ</li>
                    </div>
                    <div className='nav-list-item' onClick={() => navigate("/contact")}>                    
                        <li className='navbar-list-item'>Contact</li>
                    </div>
                </ul>
            </div>

            <div id='get-started'>
                <button className='primary-btn'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
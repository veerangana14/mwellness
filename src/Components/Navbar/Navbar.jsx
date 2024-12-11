import React, { useState } from 'react'
import '../../Assets/root.css';
import Logo from '../../Assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import styles from './Navbar.module.css'

const Navbar = () => {

    const [isResourcesHovered, setIsResourcesHovered] = useState(false);
    const [isArtsHovered, setIsArtsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

  return (
    // <div id="navbar-outer-container">
    <div id={styles.NavbarOuterContainer}>
        <div id={styles.NavbarContainer}>
            {/* <div className='logo-img-container' id="navbar-logo" onClick={() => navigate("/")}> */}
            <div className={styles.LogoImgContainer} id={styles.NavbarLogo} onClick={() => navigate("/")}>
                <img src={Logo} alt="logo-img" />
            </div>
 
            {/* <div id="hamburger-icon" onClick={toggleMenu}> */}
            <div id={styles.HamburgerIcon} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
 
            <div id={styles.NavLinksContainer} className={isMenuOpen ? `${styles.Open}` : ""}>
                <ul id={styles.NavLinksList} className={styles.NavbarPageList}>
                    <div className={styles.NavListItem} onClick={() => navigate("/")}>
                        <li className={styles.NavbarListItem}>Home</li>
                    </div>
                    <div className={styles.NavListItem} onClick={() => navigate("/about")}>                    
                        <li className={styles.NavbarListItem}>About</li>
                    </div>
                    <div className={styles.NavListItem} onClick={() => navigate("/team")}>                    
                        <li className={styles.NavbarListItem}>Team</li>
                    </div>
                    <div className={`${styles.NavListItem} ${styles.Resources}`}
                        onMouseEnter={() => setIsResourcesHovered(true)}
                        onMouseLeave={() => setIsResourcesHovered(false)}
                        onClick={() => {setIsResourcesHovered((prev) => !prev);  setIsArtsHovered(false);}}
                    >                    
                        <li className={styles.NavbarListItem}>
                            {/* Resources */}
                            Resources {isResourcesHovered ? <FaChevronUp className={styles.ChevronIcon}/> : <FaChevronDown className={styles.ChevronIcon}/>}
                        </li>

                        {isResourcesHovered && (
                            <ul className={styles.DropdownMenu}>
                                <li onClick={() => navigate("/assessments")}>Assessments</li>
                                <li onClick={() => navigate("/awareness-campaigns")}>Awareness Campaigns</li>
                                <li onClick={() => navigate("/journals")}>Journals</li>
                                <li onClick={() => navigate("/seminars")}>Seminars</li>
                                <li onClick={() => navigate("/community")}>Community</li>
                            </ul>
                        )}
                    </div>
                    <div className={`${styles.NavListItem} ${styles.Arts}`}
                        onMouseEnter={() => setIsArtsHovered(true)}
                        onMouseLeave={() => setIsArtsHovered(false)}
                        onClick={() => {setIsArtsHovered((prev) => !prev); setIsResourcesHovered(false);}}
                    >                    
                        <li className={styles.NavbarListItem}>
                            Arts {isArtsHovered ? <FaChevronUp className={styles.ChevronIcon}/> : <FaChevronDown className={styles.ChevronIcon}/>}
                        </li>

                        {isArtsHovered && (
                            <ul className={styles.DropdownMenu}>
                                <li onClick={() => navigate("/arts-audio")}>Audio</li>
                                <li onClick={() => navigate("/arts-video")}>Video</li>
                            </ul>
                        )}
                    </div>
                    <div className={styles.NavListItem} onClick={() => navigate("/faq")}>                    
                        <li className={styles.NavbarListItem}>FAQ</li>
                    </div>
                    <div className={styles.NavListItem} onClick={() => navigate("/contact")}>                    
                        <li className={styles.NavbarListItem}>Contact</li>
                    </div>
                </ul>
            </div>
 
            <div id={styles.GetStartedBtnContainer}>
                <button className={styles.PrimaryBtn} onClick={() => navigate("/get-started")}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
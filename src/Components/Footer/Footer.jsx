import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import '../../Assets/root.css';
import Logo from '../../Assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css'

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div id={styles.FooterOuterContainer}>
            <div id={styles.FooterContainer}>
                <div className={styles.LogoImgContainer}>
                    <img src={Logo} alt="logo-img" />
                </div>

                <div id={styles.PageLinksContainer}>
                    <ul id={styles.LinksList} className={styles.FooterPageLinks}>
                        <li className={styles.ListItem} onClick={() => navigate("/")}>Home</li>
                        <li className={styles.ListItem} onClick={() => navigate("/")}>About</li>
                        <li className={styles.ListItem} onClick={() => navigate("/team")}>Team</li>
                        <li className={styles.ListItem} onClick={() => navigate("/faq")}>FAQ</li>
                        <li className={styles.ListItem} onClick={() => navigate("/contact")}>Contact</li>
                    </ul>
                </div>

                <div id={styles.SocialMediaLinksContainer}>
                    <div className={styles.IconContainer}>
                        <FaFacebookF className={styles.SocialMediaIcon} />
                    </div>
                    <div className={styles.IconContainer}>
                        <FaInstagram className={styles.SocialMediaIcon} />
                    </div>
                    <div className={styles.IconContainer}>
                        <FaTwitter className={styles.SocialMediaIcon} />
                    </div>
                    <div className={styles.IconContainer}>
                        <FaWhatsapp className={styles.SocialMediaIcon} />
                    </div>
                </div>

            </div>
            <hr id={styles.FooterHr}></hr>
            <div id={styles.Copyrights}>
                <p>&copy; Webkype 2024-2025</p>
            </div>
        </div>
    )
}

export default Footer
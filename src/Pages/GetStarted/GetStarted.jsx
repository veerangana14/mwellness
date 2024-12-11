import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from './GetStarted.module.css'
import { Helmet } from 'react-helmet'
import { CiCircleCheck } from "react-icons/ci"
import BannerImg from '../../Assets/images/get-started-banner-img.jpg'
import DocImg from '../../Assets/images/team-doc-2.jpg'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { MdArrowOutward } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

const GetStarted = () => {
    const navigate = useNavigate();

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    const handlePlayClick = (embedUrl) => {
        setVideoUrl(embedUrl);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setVideoUrl("");
        setPopupVisible(false);
    };

    return (
        <>
            <Helmet>
                <title>Get Started - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.OuterContainer}>

                {/* --------------------------------- BANNER IMAGE ------------------------------------ */}
                <div id={styles.BannerImgContainer}>
                    <img src={BannerImg} alt="banner-img" />

                    <div className={styles.VideoIconContainer}>
                            <button
                                className={styles.VideoPlayBtn}
                                onClick={() => handlePlayClick("https://www.youtube.com/embed/7e90gBu4pas?si=pEWc7IqCmVhq62T6&autoplay=0")}
                            >
                                <FaPlay className={styles.VideoIcon}/>
                            </button>
                        </div>
                </div>

                {isPopupVisible && (
                    <div className={styles.Popup} onClick={handleClosePopup}>
                        <div className={styles.PopupContent} onClick={(e) => e.stopPropagation()}>
                            <span id={styles.ClosePopup} onClick={handleClosePopup}>
                                &times;
                            </span>
                            <iframe
                                id={styles.VideoFrame}
                                width="100%"
                                height="100%"
                                src={videoUrl}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title='video-overlay'
                            />
                        </div>
                    </div>
                )}


                {/* --------------------------------- PAGE CONTENT------------------------------------ */}
                <div id={styles.ContentInnerContainer}>
                    <p className={styles.ParaStyle1}>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.</p>


                    <div id={styles.TherapySolutionContainer}>
                        <p className={styles.ParaStyle2}>How a therapy can solve your problem?</p>

                        <p className={styles.ParaStyle1}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>

                        <div id={styles.PointersGrid}>
                            <div className={styles.PointerItem}>
                                <div>
                                    <CiCircleCheck className={styles.PointerIcon} />
                                </div>
                                <p className={styles.PointerLine}>Realize you are not a victim</p>
                            </div>
                            <div className={styles.PointerItem}>
                                <div>
                                    <CiCircleCheck className={styles.PointerIcon} />
                                </div>
                                <p className={styles.PointerLine}>Give a little; get a lot</p>
                            </div>
                            <div className={styles.PointerItem}>
                                <div>
                                    <CiCircleCheck className={styles.PointerIcon} />
                                </div>
                                <p className={styles.PointerLine}>Change it up</p>
                            </div>
                            <div className={styles.PointerItem}>
                                <div>
                                    <CiCircleCheck className={styles.PointerIcon} />
                                </div>
                                <p className={styles.PointerLine}>Do what you say you will do</p>
                            </div>
                            <div className={styles.PointerItem}>
                                <div>
                                    <CiCircleCheck className={styles.PointerIcon} />
                                </div>
                                <p className={styles.PointerLine}>Be a good listener</p>
                            </div>
                        </div>

                        <p className={styles.ParaStyle1}>Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                </div>


                {/* --------------------------------- DOC CARD ------------------------------------ */}
                <div id={styles.DocCardContainer}>
                    <div id={styles.DocCard}>
                        <div id={styles.DocInfoContainer}>
                            <div id={styles.DocImgContainer}>
                                <img src={DocImg} alt="doc-img" />
                            </div>
                            <div id={styles.DocInfo}>
                                <p>Dr. Merry Rose</p>
                                <p>Practicing psychologist</p>
                                <p>Psy. D</p>
                            </div>
                        </div>
                        <div id={styles.SocialMediaLinksContainer}>
                            <div className={styles.IconContainer}>
                                <FaFacebookF className={styles.SocialMIcon} />
                            </div>
                            <div className={styles.IconContainer}>
                                <FaInstagram className={styles.SocialMIcon} />
                            </div>
                            <div className={styles.IconContainer}>
                                <FaTwitter className={styles.SocialMIcon} />
                            </div>
                            <div className={styles.IconContainer}>
                                <FaWhatsapp className={styles.SocialMIcon} />
                            </div>
                        </div>
                    </div>
                </div>

                <button id={styles.GreenBtn} onClick={() => navigate("/get-started2")}>
                    Continue
                    <MdArrowOutward id={styles.OutwardArrowIcon} />
                </button>

            </div>

            <Footer />
        </>
    )
}

export default GetStarted
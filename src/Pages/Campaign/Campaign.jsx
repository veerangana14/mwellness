import React, { useEffect, useState } from 'react'
import '../../Assets/root.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import CampaignHeaderImg from '../../Assets/images/campaign-header-img.jpg'
import { MdArrowOutward } from 'react-icons/md'
import CampaignImg1 from '../../Assets/images/campaign-img-1.jpg'
import CampaignImg2 from '../../Assets/images/campaign-img-2.png'
import CampaignImg3 from '../../Assets/images/campaign-img-3.jpeg'
import { CiCircleCheck } from 'react-icons/ci'
import CampaignPointersImg from '../../Assets/images/campaign-pointers-img.jpg'
import MentalCampaignImage from '../../Assets/images/mental-health-campaign.png'
import { Helmet } from 'react-helmet'
import styles from './Campaign.module.css'
import ArticleGrid from '../../Components/Grid/ArticleGrid'
import Carousel from '../../Components/Carousel/Carousel'
import { FaPlay } from 'react-icons/fa'


const patientReviews = [
    {
        name: "Kerry Banks",
        job: "Housewife",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "John Doe",
        job: "Entrepreneur",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Tim Burton",
        job: "Engineer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Meghan Fox",
        job: "Student",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Justin",
        job: "Manager",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Kelly Johnson",
        job: "Teacher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    }
]

const Articles = [
    {
        articleImg: CampaignImg1,
        title: "The pros and cons of group psychotherapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: CampaignImg2,
        title: "Top seven challenges in counselling children",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: CampaignImg3,
        title: "Action, types and tips for finding group therapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    }
]


const Campaign = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [currentSlide2, setCurrentSlide2] = useState(0);

    // // Split reviews into groups of 2 for each slide
    // const reviewsPerSlide = 2;
    // const slides = [];
    // for (let i = 0; i < patientReviews.length; i += reviewsPerSlide) {
    //     slides.push(patientReviews.slice(i, i + reviewsPerSlide));
    // }

    // const reviewsPerSlide2 = 1;
    // const slides2 = [];
    // for (let i = 0; i < patientReviews.length; i += reviewsPerSlide2) {
    //     slides2.push(patientReviews.slice(i, i + reviewsPerSlide2));
    // }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const handlePlayClick = (embedUrl) => {
        setVideoUrl(embedUrl);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setVideoUrl("");
        setPopupVisible(false);
    };


    // Automatically cycle through slides every 8 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [slides.length]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide2((prevSlide) => (prevSlide + 1) % slides2.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [slides2.length]);

    return (
        <>
            <Helmet>
                <title>Campaign - MWellness</title>
            </Helmet>

            <Navbar />

            <div id='outer-container'>
                {/* ---------------- CAMPAIGN PAGE HEADER SECTION -------------------- */}
                <div id={styles.HeaderSection}>
                    <div id={styles.InnerContainer1}>
                        <div id={styles.HeaderLeftSection}>
                            <p>Understand Your Mental Health</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam architecto iste vitae non perspiciatis repellendus totam ipsa odio deserunt natus, eveniet.</p>

                            <div id={styles.HeaderSectionButtons}>
                                <button className={styles.PrimaryBtn} id={styles.HeaderGreenBtn}>
                                    Get a Consultation
                                    <MdArrowOutward className={styles.HeaderBtnArrowIcon} />
                                </button>
                                <button className={styles.SecondaryBtn} id={styles.HeaderOrangeBtn}>
                                    Learn More
                                    <MdArrowOutward className={styles.HeaderBtnArrowIcon} />
                                </button>
                            </div>

                            <div id={styles.HeaderStatsSection}>
                                <div className={styles.HeaderStatsItem}>
                                    <p>20+</p>
                                    <hr />
                                    <p>The Years of our experience</p>
                                </div>
                                <div className={styles.HeaderStatsItem}>
                                    <p>840+</p>
                                    <hr />
                                    <p>Patients recieved help this year</p>
                                </div>
                                <div className={styles.HeaderStatsItem}>
                                    <p>98%</p>
                                    <hr />
                                    <p>Clients improved their condition</p>
                                </div>
                            </div>
                        </div>
                        <div id={styles.HeaderRightSection}>
                            <div id={styles.HeaderImgContainer}>
                                <img src={CampaignHeaderImg} alt="campaign-header-img" />
                            </div>
                        </div>
                        <div id={styles.HeaderBanner}>
                            <div id={styles.HeaderBannerContainer}>
                                <img src={CampaignHeaderImg} alt="campaign-header-img" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---------------- LATEST CAMPAIGNS SECTION -------------------- */}
                <div id={styles.InnerContainer7}>
                    <div id={styles.ArticlesHeader}>
                        <p>Latest Campaigns</p>
                        <div>
                            <button className={styles.PrimaryBtn} id={styles.ArticleBtn}>
                                Read More Articles
                                <MdArrowOutward id={styles.ArticleBtnArrowIcon} />
                            </button>
                        </div>
                    </div>


                    <div id={styles.ArticledGrid}>
                        {
                            Articles.map((article, index) => (
                                <ArticleGrid
                                    index={index}
                                    articleImg={article.articleImg}
                                    title={article.title}
                                    description={article.description}
                                    date={article.date}
                                    views={`${article.views} Views`}
                                    comments={article.comments === 0 ? "No Comments" : `${article.comments} Comments`}
                                    linkText={"Read More"}
                                />
                            ))
                        }
                    </div>
                </div>



                {/* ---------------- CAMPAIGN PAGE HEADER SECTION -------------------- */}
                {/* <div id='inner-container-4' style={{ marginTop: '80px' }}>
                    <div id='counselor-left-section' style={{ marginTop: "30px" }}>
                        <p>Mental Health <span style={{ color: "#26aba3" }}>At Workplace</span> - Campaign 2024</p>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                        <div id='pointers-grid'>
                            <div className='pointers'>
                                <CiCircleCheck className='pointers-icon' />
                                <p>Stress</p>
                            </div>
                            <div className='pointers'>
                                <CiCircleCheck className='pointers-icon' />
                                <p>Mental Health Issues</p>
                            </div>
                            <div className='pointers'>
                                <CiCircleCheck className='pointers-icon' />
                                <p>Depression</p>
                            </div>
                            <div className='pointers'>
                                <CiCircleCheck className='pointers-icon' />
                                <p>Work vs Life Balance</p>
                            </div>
                            <div className='pointers'>
                                <CiCircleCheck className='pointers-icon' />
                                <p>Anxiety</p>
                            </div>
                        </div>

                        <button className='primary-btn'>
                            Tell us More.<MdArrowOutward />
                        </button>
                    </div>

                    <div id='counselor-right-section'>
                        <div id='campaign-img-container'>
                            <img src={MentalCampaignImage} alt="mental-campaign-img" />
                        </div>
                    </div>
                    <div id='counselor-mid-right-section'>
                        <div id='counselor-mid-img-container'>
                            <img src={MentalCampaignImage} alt="mental-campaign-img" />
                        </div>
                    </div>
                </div> */}

                
                <div id={styles.AboutFirstContainer}>
                    <div id={styles.CounselorLeftSection}>
                        <p>Mental Health <span style={{ color: "#26aba3" }}>At Workplace</span> - Campaign 2024</p>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                        <div id={styles.PointersGrid}>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon} />
                                <p>Stress</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon} />
                                <p>Mental Health Issues</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon} />
                                <p>Depression</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon} />
                                <p>Work vs Life Balance</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon} />
                                <p>Anxiety</p>
                            </div>
                        </div>

                        <button className={styles.PrimaryBtn} id={styles.LearnMoreBtn}>
                            Tell Us More <MdArrowOutward id={styles.LearnMoreBtnArrowIcon} />
                        </button>
                    </div>

                    <div id={styles.CounselorRightSection}>
                        <div id={styles.CounselorImgContainer}>
                            <img src={CampaignPointersImg} alt="campaign-pointers-img" />
                        </div>
                        <div className={styles.AboutVideoIcon}>
                            <button
                                className={`${styles.VideoPlayBtn} ${styles.PopupVideo}`}
                                onClick={() => handlePlayClick("https://www.youtube.com/embed/7e90gBu4pas?si=pEWc7IqCmVhq62T6&autoplay=0")}
                            >
                                <FaPlay className={styles.VideoIcon} />
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
                                    // src={"https://www.youtube.com/watch?v=7e90gBu4pas"}
                                    src={videoUrl}
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                    title='video-overlay'
                                />
                            </div>
                        </div>
                    )}
                </div>




                {/* ---------------- REVIEW SECTION -------------------- */}
                <div id={styles.InnerContainer5}>
                    <p>What People Say About It</p>
                    <p>Lorem ipsum dlor sit amet consectetur adipisicing elit.</p>

                    <Carousel />
                </div>


            </div>

            <Footer />
        </>
    )
}

export default Campaign
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import HeaderImg from '../../Assets/images/header-img.png'
import { MdArrowOutward } from "react-icons/md"
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon2 from '../../Assets/images/grid-icon-2.svg'
import GridIcon3 from '../../Assets/images/grid-icon-3.svg'
import GridIcon4 from '../../Assets/images/grid-icon-4.svg'
import GridIcon5 from '../../Assets/images/grid-icon-5.svg'
import GridIcon6 from '../../Assets/images/grid-icon-6.svg'
import { BsArrowUpRightCircleFill } from "react-icons/bs"
import CounselorImg from '../../Assets/images/counselor-section-img.png'
import ArticleImg1 from '../../Assets/images/articles-img-1.jpg'
import ArticleImg2 from '../../Assets/images/articles-img-2.jpg'
import ArticleImg3 from '../../Assets/images/articles-img-3.jpg'
import AccordImg1 from '../../Assets/images/accord-img-1.jpg'
import AccordImg2 from '../../Assets/images/accord-img-2.jpg'
import AccordImg3 from '../../Assets/images/accord-img-3.jpg'
import AccordImg4 from '../../Assets/images/accord-img-4.jpg'
import HomeBanner from '../../Assets/images/home-header.png'
import QuesBanner from '../../Assets/images/ques-banner-image.png'
import CounselorImage from '../../Assets/images/counselor-image.png'
import { Helmet } from 'react-helmet'
import { FaPlay } from "react-icons/fa"
import styles from './Home.module.css'
import Grid from '../../Components/Grid/Grid'
import Accordion from '../../Components/Accordion/Accordion'
import ArticleGrid from '../../Components/Grid/ArticleGrid'
import Carousel from '../../Components/Carousel/Carousel'
import ConsultationForm from '../../Components/ConsultationForm/ConsultationForm'

// const patientReviews = [
//     {
//         name: "Kerry Banks",
//         job: "Housewife",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
//     },
//     {
//         name: "John Doe",
//         job: "Entrepreneur",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
//     },
//     {
//         name: "Tim Burton",
//         job: "Engineer",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
//     },
//     {
//         name: "Meghan Fox",
//         job: "Student",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
//     },
//     {
//         name: "Justin",
//         job: "Manager",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
//     },
//     {
//         name: "Kelly Johnson",
//         job: "Teacher",
//         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
//     }
// ]

const AccordionItems = [
    {
        question: "What is mental health?",
        answer: "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act."
    },
    {
        question: "How can I support a friend with mental health issues?",
        answer: "Listening and offering support, encouraging them to seek professional help, and staying connected can make a big difference."
    },
    {
        question: "Can you prevent mental health problems ?",
        answer: "Listening and offering support, encouraging them to seek professional help, and staying connected can make a big difference."
    },
    {
        question: "What are the 7 components of mental health?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

const GridItems = [
    {
        img: GridIcon1,
        title: "Assessments",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon2,
        title: "Educational Seminars",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon3,
        title: "Mental Health Journals",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon4,
        title: "Meet The Experts",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon5,
        title: "ARTS Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon6,
        title: "Awareness Campaign",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    }
]

const Articles = [
    {
        articleImg: ArticleImg1,
        title: "The pros and cons of group psychotherapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg2,
        title: "The pros and cons of group psychotherapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg3,
        title: "Action, types and tips for finding group therapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    }
]


const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const contentRef = useRef([]); // Array of refs to measure content height

    // Split reviews into groups of 2 for each slide
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


    const handlePlayClick = (embedUrl) => {
        // const embedUrl = "https://www.youtube.com/embed/7e90gBu4pas?si=pEWc7IqCmVhq62T6&autoplay=1";
        setVideoUrl(embedUrl);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setVideoUrl("");
        setPopupVisible(false);
    };


    return (
        <div>
            <Helmet>
                <title>Home - MWellness</title>
            </Helmet>

            <Navbar />


            {/* ---------------- LANDING PAGE HEADER SECTION -------------------- */}
            <div id={styles.HeaderSection}>
                <div id={styles.InnerContainer1}>
                    <div id={styles.HeaderLeftSection}>
                        <p>Understand Mental Health</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam architecto iste vitae non perspiciatis repellendus totam ipsa odio deserunt natus, eveniet.</p>

                        <div id={styles.HeaderSectionButtons}>
                            <button className={styles.PrimaryBtn} id={styles.HeaderGreenBtn}>
                                Meet Experts
                                <MdArrowOutward className={styles.HeaderBtnArrowIcon}/>
                            </button>
                            <button className={styles.SecondaryBtn} id={styles.HeaderOrangeBtn}>
                                Get Started
                                <MdArrowOutward className={styles.HeaderBtnArrowIcon}/>
                            </button>
                        </div>

                        <div id={styles.HeaderStatsSection}>
                            <div className={styles.HeaderStatsItem}>
                                <p>20+</p>
                                <hr />
                                <p>Mental Health Experts</p>
                            </div>
                            <div className={styles.HeaderStatsItem}>
                                <p>100+</p>
                                <hr />
                                <p>Assessments and Games</p>
                            </div>
                            <div className={styles.HeaderStatsItem}>
                                <p>50+</p>
                                <hr />
                                <p>Educational Seminars</p>
                            </div>
                        </div>
                    </div>
                    <div id={styles.HeaderRightSection}>
                        <div id={styles.HeaderImgContainer}>
                            <img src={HeaderImg} alt="header-img" />
                        </div>
                    </div>
                    <div id={styles.HeaderBanner}>
                        <div id={styles.HeaderBannerContainer}>
                            <img src={HomeBanner} alt="header-img" />
                        </div>
                    </div>
                </div>
            </div>





            {/* ---------------- LANDING PAGE QUES SECTION -------------------- */}
            <div id={styles.QuestionSection}>
                <div id={styles.InnerContainer2}>
                    <div id={styles.QuestionsLeftSection}>
                        <div id={styles.QuestionImgContainer}>
                            <div className={styles.ImgGroupContainer}>
                                <img src={AccordImg1} alt="accord-img-1" />
                                <img src={AccordImg2} alt="accord-img-2" />
                            </div>
                            <div className={styles.ImgGroupContainer}>
                                <img src={AccordImg3} alt="accord-img-3" />
                                <img src={AccordImg4} alt="accord-img-4" />
                            </div>
                        </div>
                        <div id={styles.QuestionImgContainer2}>
                            <img src={QuesBanner} alt="question-img" />
                        </div>
                    </div>
                    <div id={styles.QuestionsRightSection}>
                        <p>The most popular questions to discuss mental health</p>

                        <div id={styles.FaqAccordion}>
                            {/* {AccordionItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.AccordionItem} ${openIndex === index ? `${styles.Open}` : ''}`}
                                >
                                    <div
                                        className={`${styles.AccordionHeader} ${openIndex === index ? `${styles.Active}` : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <p className={styles.AccordionQuestion}>{AccordionItems[index].question}</p>
                                        <span className={styles.AccordionIcon}>{openIndex === index ? '−' : '+'}</span>
                                    </div>
                                    <div
                                        className={styles.AccordionContent}
                                        ref={(el) => (contentRef.current[index] = el)}
                                        style={{
                                            maxHeight: openIndex === index ? `${contentRef.current[index]?.scrollHeight}px` : '0',
                                            transition: 'max-height 0.5s ease-in-out, padding 0.3s ease',
                                        }}
                                    >
                                        <p>{AccordionItems[index].answer}</p>
                                    </div>
                                </div>
                            ))} */}

                            {
                                AccordionItems.map((item, index) => (
                                    <Accordion 
                                        openIndex={openIndex}
                                        contentRef={contentRef}
                                        index={index}
                                        question={item.question}
                                        answer={item.answer}
                                        handleClick={toggleAccordion}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>





            {/* ---------------- LANDING PAGE THIRD SECTION -------------------- */}
            <div id={styles.ThirdSection}>
                <div id={styles.GridContainer}>
                    <p>Ways to improve and treat mental health issues</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                    <div id={styles.GridSection}>
                        {
                            GridItems.map((item, index) => (
                                <Grid 
                                    index={index+1}
                                    gridImg={item.img}
                                    title={item.title}
                                    description={item.description}
                                    linkText={"More Info"}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>




            {/* ---------------- LANDING PAGE FOURTH SECTION -------------------- */}
            <div id={styles.FourthSection}>
                <div id={styles.InnerContainer4}>
                    <div id={styles.CounselorLeftSection}>
                        <p>Meet <span style={{ color: "#26aba3" }}>Dr. Chitrabh Sinha</span> - Licensed Mental Health Counselor</p>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                        <button className={styles.PrimaryBtn} id={styles.DownloadBtn}>
                            Download App <MdArrowOutward id={styles.DownloadBtnArrowIcon}/>
                        </button>
                    </div>

                    <div id={styles.CounselorRightSection}>
                        <div id={styles.CounselorImgContainer}>
                            <img src={CounselorImg} alt="counselor-img" />
                        </div>
                        <div className={styles.AboutVideoIcon}>
                            {/* <a class="video_play_btn popup_video" href="https://www.youtube.com/watch?v=7e90gBu4pas" target='__blank'>
                                <FaPlay className='video-icon'/>
                            </a> */}

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
            </div>



            {/* ---------------- PATIENT REVIEW SECTION -------------------- */}
            <div id={styles.FifthSection}>
                <div id={styles.InnerContainer5}>
                    <p>What Patients Say</p>
                    <p>Lorem ipsum dlor sit amet consectetur adipisicing elit.</p>

                    <Carousel />


                    {/* <div id={styles.CarouselContainer}> */}
                        {/* <div className="slide">
                            {slides[currentSlide]?.map((review, index) => (
                            <div key={index} className={styles.ReviewCard}>
                                <h4 className={styles.ReviewName}>{review.name}</h4>
                                <p className={styles.ReviewJob}>{review.job}</p>
                                <p className={styles.ReviewText}>{review.review}</p>
                            </div>
                            ))}
                        </div> */}

                        {/* <div className={styles.Slide2}>
                            {slides2[currentSlide2]?.map((review, index) => (
                            <div key={index} className={styles.ReviewCard}>
                                <h4 className={styles.ReviewName}>{review.name}</h4>
                                <p className={styles.ReviewJob}>{review.job}</p>
                                <p className={styles.ReviewText}>{review.review}</p>
                            </div>
                            ))}
                        </div> */}

                        {/* <div
                            className={styles.Slide}
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className={styles.SlideContent}>
                                    {slide.map((review, idx) => (
                                        <div key={idx} className={styles.ReviewCard}>
                                            <h4 className={styles.ReviewName}>{review.name}</h4>
                                            <p className={styles.ReviewJob}>{review.job}</p>
                                            <p className={styles.ReviewText}>{review.review}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>


                        <div
                            className={styles.Slide2}
                            style={{
                                transform: `translateX(-${currentSlide2 * 100}%)`,
                            }}
                        >
                            {slides2.map((slide, index) => (
                                <div key={index} className={styles.SlideContent2}>
                                    {slide.map((review, idx) => (
                                        <div key={idx} className={styles.ReviewCard}>
                                            <h4 className={styles.ReviewName}>{review.name}</h4>
                                            <p className={styles.ReviewJob}>{review.job}</p>
                                            <p className={styles.ReviewText}>{review.review}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        


                        <div className={styles.SlideIndicators}>
                            {slides.map((_, index) => (
                                <span
                                    key={index}
                                    className={`${styles.Indicator} ${index === currentSlide ? `${styles.IActive}` : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                ></span>
                            ))}
                        </div> */}
                    {/* </div> */}
                </div>
            </div>


            {/* ---------------- CONSULTATION FORM SECTION -------------------- */}
            <div id={styles.SixthSection}>
                <div id={styles.InnerContainer6}>
                    <p>Get your first free online consultation</p>

                    <ConsultationForm />

                    <button className={styles.PrimaryBtn}>
                        Get A Consultation
                        <MdArrowOutward id={styles.FormOutwardArrowIcon}/> 
                    </button>
                </div>
            </div>


            {/* ---------------- LATEST ARTICLES SECTION -------------------- */}
            <div id={styles.SeventhContainer}>
                <div id={styles.InnerContainer7}>
                    <div id={styles.ArticlesHeader}>
                        <p>Latest Articles</p>
                        <div>
                            <button className={styles.PrimaryBtn} id={styles.ArticleBtn}>
                                Read More Articles
                                <MdArrowOutward id={styles.ArticleBtnArrowIcon}/>
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
            </div>

            <Footer />
        </div>
    )
}

export default Home
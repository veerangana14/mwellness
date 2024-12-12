import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AccordImg1 from '../../Assets/images/accord-img-1.jpg'
import AccordImg2 from '../../Assets/images/accord-img-2.jpg'
import AccordImg3 from '../../Assets/images/accord-img-3.jpg'
import AccordImg4 from '../../Assets/images/accord-img-4.jpg'
// import CommunityHeaderImg from '../../Assets/images/community-image.png'
import CommunityHeaderImg from '../../Assets/images/community-header-img.jpg'
import QuesBanner from '../../Assets/images/ques-banner-image.png'
import { MdArrowOutward } from 'react-icons/md'
import { CiCircleCheck } from 'react-icons/ci'
import '../../Assets/root.css'
import { Helmet } from 'react-helmet'
import { FaPlay } from 'react-icons/fa'
import styles from './Community.module.css'
import ConsultationForm from '../../Components/ConsultationForm/ConsultationForm'
import Carousel from '../../Components/Carousel/Carousel'
import Accordion from '../../Components/Accordion/Accordion'
import Grid from '../../Components/Grid/Grid'
import GridImg1 from '../../Assets/images/community-grid-img-1.jpg'
import GridImg2 from '../../Assets/images/community-grid-img-2.gif'
import GridImg3 from '../../Assets/images/community-grid-img-3.jpg'

const AccordionItems = [
    {
        question: "What services does XXX offer?",
        answer: "XXX provides a wide range of mental health services, including one-on-one therapy, group sessions, self-assessment tools, and expressive arts therapies such as music, art, and dance therapy. Our platform connects you with qualified professionals in psychiatry, clinical psychology, counselling psychology, and more—all available online."
    },
    {
        question: "How do I book a consultation?",
        answer: "Booking a consultation is simple! Click on 'Get the App', register, choose your preferred therapy type, and select a time that works best for you. You can opt for individual or group sessions via text, call, or video. Our secure portal ensures a seamless booking and payment experience"
    },
    {
        question: " Are the consultations condential?",
        answer: "Absolutely. Your privacy and confidentiality are our top priorities. All sessions are conducted through secure channels, and your personal information is protected in compliance with industry standards and regulations."
    },
    {
        question: "How does expressive arts therapy work?",
        answer: "Expressive arts therapy uses creative forms of expression—like drawing, music, and movement—to help you explore and process emotions. Guided by trained expressive arts therapists, this approach can be an effective complement to traditional therapies, providing a holistic healing experience."
    },
    {
        question: "What can I expect from the self-assessment tools?",
        answer: "Our self-assessment tools are designed to help you understand your mental health better. These evidence-based forms cover areas like anxiety, stress, depression, and more. Results are private, insightful, and can be shared with your therapist for personalised care planning."
    },
    {
        question: " Is XXX affordable?",
        answer: "Yes, we aim to make mental health care accessible and affordable for everyone. Our transparent pricing includes flat fees for consultations, subscription packages for ongoing support, and discounts for young adults (18–23). Explore the right plan for you during your registration process."
    }
]

const GridItems = [
    {
        img: GridImg1,
        title: "Doctors",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridImg2,
        title: "Patients",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridImg3,
        title: "Subject Experts",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    }
]


const Community = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const contentRef = useRef([]); // Array of refs to measure content height

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <Helmet>
                <title>Community - MWellness</title>
            </Helmet>

            <Navbar />
            <div id='outer-container'>

                {/* ---------------- COMMUNITY PAGE HEADER SECTION -------------------- */}
                <div id={styles.AboutFirstSection}>
                    <div id={styles.AboutFirstContainer}>
                        <div id={styles.CounselorLeftSection}>
                            <p>Asharika Community</p>

                            <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                            <div id={styles.PointersGrid}>
                                <div className={styles.Pointers}>
                                    <CiCircleCheck className={styles.PointersIcon} />
                                    <p>Elder Group</p>
                                </div>
                                <div className={styles.Pointers}>
                                    <CiCircleCheck className={styles.PointersIcon} />
                                    <p>Lifestyle & Profession</p>
                                </div>
                                <div className={styles.Pointers}>
                                    <CiCircleCheck className={styles.PointersIcon} />
                                    <p>Couples & Relations</p>
                                </div>
                                <div className={styles.Pointers}>
                                    <CiCircleCheck className={styles.PointersIcon} />
                                    <p>Doctor - Patient Relations</p>
                                </div>
                                <div className={styles.Pointers}>
                                    <CiCircleCheck className={styles.PointersIcon} />
                                    <p>Age Groups</p>
                                </div>
                            </div>

                            <button className={styles.PrimaryBtn} id={styles.LearnMoreBtn}>
                                Join Us <MdArrowOutward id={styles.LearnMoreBtnArrowIcon} />
                            </button>
                        </div>

                        <div id={styles.CounselorRightSection}>
                            <div id={styles.CounselorImgContainer}>
                                <img src={CommunityHeaderImg} alt="community-header-img" />
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
                </div>


                {/* ---------------- COMMUNITY PAGE QUES SECTION -------------------- */}
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


                <div id={styles.AboutThirdSection}>
                    <div id={styles.AboutInnerContainer3}>
                        <p>Who Should Join</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        <div id={styles.GridSection}>
                            {
                                GridItems.map((item, index) => (
                                    <Grid
                                        index={index + 1}
                                        gridImg={item.img}
                                        title={item.title}
                                        description={item.description}
                                        linkText={"More Info"}
                                    />
                                ))
                            }
                        </div>

                        <button className={styles.PrimaryBtn} id={styles.AllProgramsBtn}>
                            All programs
                            <MdArrowOutward id={styles.AllProgramsBtnIcon} />
                        </button>
                    </div>
                </div>


                {/* ---------------- COMMUNITY PAGE REVIEWS SECTION -------------------- */}
                <div id={styles.InnerContainer5}>
                    <p>What Patients Say</p>
                    <p>Lorem ipsum dlor sit amet consectetur adipisicing elit.</p>

                    <Carousel />
                </div>


                {/* ---------------- CONSULTATION FORM SECTION -------------------- */}
                <div id={styles.InnerContainer6}>
                    <p>Get your first free online consultation</p>

                    <ConsultationForm />

                    <button className={styles.PrimaryBtn}>
                        Get A Consultation
                        <MdArrowOutward id={styles.FormOutwardArrowIcon} />
                    </button>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Community
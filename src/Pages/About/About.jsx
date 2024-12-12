import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { MdArrowOutward } from "react-icons/md"
import { CiCircleCheck } from "react-icons/ci"
import TeamDoc2 from '../../Assets/images/team-doc-2.jpg'
import '../../Assets/root.css'
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon2 from '../../Assets/images/grid-icon-2.svg'
import GridIcon3 from '../../Assets/images/grid-icon-3.svg'
import GridIcon4 from '../../Assets/images/grid-icon-4.svg'
import GridIcon5 from '../../Assets/images/grid-icon-5.svg'
import GridIcon6 from '../../Assets/images/grid-icon-6.svg'
import { BsArrowUpRightCircleFill } from "react-icons/bs"
import StagesImg1 from '../../Assets/images/stages-img-1.png'
import StagesImg2 from '../../Assets/images/stages-img-2.png'
import StagesImg3 from '../../Assets/images/stages-img-3.png'
import StagesImg4 from '../../Assets/images/stages-img-4.png'
import PhotosImg1 from '../../Assets/images/photos-img-1.jpg'
import PhotosImg2 from '../../Assets/images/photos-img-2.jpg'
import PhotosImg3 from '../../Assets/images/photos-img-3.jpg'
import PhotosImg4 from '../../Assets/images/photos-img-4.jpg'
import PhotosImg5 from '../../Assets/images/photos-img-5.jpg'
import PhotosImg6 from '../../Assets/images/photos-img-6.jpg'
import AboutHeader from '../../Assets/images/about-header.png'
import ConsultStage from '../../Assets/images/consult-stage.png'

import CertiImg1 from '../../Assets/images/certificate-img-1.jpg'
import CertiImg2 from '../../Assets/images/certificate-img-2.jpg'
import CertiImg3 from '../../Assets/images/certificate-img-3.jpg'
import CertiImg4 from '../../Assets/images/certificate-img-4.jpg'
import CertiImg5 from '../../Assets/images/certificate-img-5.jpg'
import CertiImg6 from '../../Assets/images/certificate-img-6.jpg'
import { Helmet } from 'react-helmet'
import Logo from '../../Assets/images/logo.png'
import { FaPlay } from 'react-icons/fa'
import styles from './About.module.css'
import Grid from '../../Components/Grid/Grid'
import ConsultationForm from '../../Components/ConsultationForm/ConsultationForm'
import Carousel from '../../Components/Carousel/Carousel'


const certificates = [
    {
        img: CertiImg1
    },
    {
        img: CertiImg2
    },
    {
        img: CertiImg3
    },
    {
        img: CertiImg4
    },
    {
        img: CertiImg5
    },
    {
        img: CertiImg6
    },
]

const GridItems = [
    {
        img: GridIcon1,
        title: "Depression Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon2,
        title: "Couples Counseling",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon3,
        title: "Relationships",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon4,
        title: "Anxiety Disorder",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon5,
        title: "Children Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    },
    {
        img: GridIcon6,
        title: "Individual Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
    }
]


const ImpactGoals = [
    {
        svgPath: "M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z",
        title: "Erasing Stigma",
        description: "We actively work to normalise conversations around mental health through awareness campaigns, online educational seminars, and collaborations with communities. By fostering understanding, we aim to dissolve the shame often associated with seeking help.",
    },
    {
        svgPath: "m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 14a5.006 5.006 0 0 0 -5-5h-5a5.006 5.006 0 0 0 -5 5v4h2v-4a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v4h2zm2.5-11a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm6.5 14a5.006 5.006 0 0 0 -5-5h-4v2h4a3 3 0 0 1 3 3v4h2z",
        title: "Affordable Access for All",
        description: "With cost-effective consultation models and tailored subscription packages, XXX ensures that quality mental health care is not a privilege but a right for everyone.",
    },
    {
        svgPath: "M19.5,24a1,1,0,0,1-.929-.628l-.844-2.113-2.116-.891a1.007,1.007,0,0,1,.035-1.857l2.088-.791.837-2.092a1.008,1.008,0,0,1,1.858,0l.841,2.1,2.1.841a1.007,1.007,0,0,1,0,1.858l-2.1.841-.841,2.1A1,1,0,0,1,19.5,24ZM10,21a2,2,0,0,1-1.936-1.413L6.45,14.54,1.387,12.846a2.032,2.032,0,0,1,.052-3.871L6.462,7.441,8.154,2.387A1.956,1.956,0,0,1,10.108,1a2,2,0,0,1,1.917,1.439l1.532,5.015,5.03,1.61a2.042,2.042,0,0,1,0,3.872h0l-5.039,1.612-1.612,5.039A2,2,0,0,1,10,21Zm.112-17.977L8.2,8.564a1,1,0,0,1-.656.64L2.023,10.888l5.541,1.917a1,1,0,0,1,.636.643l1.77,5.53,1.83-5.53a1,1,0,0,1,.648-.648l5.53-1.769a.072.072,0,0,0,.02-.009L12.448,9.2a1,1,0,0,1-.652-.661Zm8.17,8.96h0ZM20.5,7a1,1,0,0,1-.97-.757l-.357-1.43L17.74,4.428a1,1,0,0,1,.034-1.94l1.4-.325L19.53.757a1,1,0,0,1,1.94,0l.354,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355L21.47,6.243A1,1,0,0,1,20.5,7Z",
        title: "Holistic Wellness Through Creativity",
        description: "Our commitment to expressive arts therapy, including music, dance, and art, allows individuals to explore unconventional pathways to healing and self-expression.",
    },
    {
        svgPath: "m4 13h3v2h-3zm5 2h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm-5-12h3v-2h-3zm5 0h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm15-3v16h-24v-21a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h5a3 3 0 0 1 3 3zm-10-5a1 1 0 0 0 -1-1h-10a1 1 0 0 0 -1 1v19h12zm8 5a1 1 0 0 0 -1-1h-5v15h6zm-4 7h2v-2h-2zm0 4h2v-2h-2zm0-8h2v-2h-2z",
        title: "Building Resilience in Communities",
        description: "By connecting users with local and online support groups, we create a network of care that extends beyond individual therapy.",
    },
    {
        svgPath: "M24,11c0-1.57-.75-3.04-2-3.98v-.02c0-1.9-1.33-3.49-3.1-3.9-.41-1.77-2-3.1-3.9-3.1-1.19,0-2.27,.53-3,1.36-.73-.83-1.81-1.36-3-1.36-1.9,0-3.49,1.33-3.9,3.1-1.77,.41-3.1,2-3.1,3.9v.02c-1.25,.94-2,2.41-2,3.98,0,.89,.24,1.74,.69,2.5-.45,.76-.69,1.61-.69,2.5,0,1.69,.86,3.24,2.27,4.17,.72,2.28,2.81,3.83,5.23,3.83,1.86,0,3.5-.93,4.5-2.34,1,1.41,2.64,2.34,4.5,2.34,2.42,0,4.51-1.56,5.23-3.83,1.41-.92,2.27-2.48,2.27-4.17,0-.89-.24-1.74-.69-2.5,.45-.76,.69-1.61,.69-2.5ZM7.5,22c-1.63,0-3.03-1.12-3.4-2.71l-.1-.44-.4-.21c-.98-.53-1.6-1.54-1.6-2.63,0-.67,.23-1.32,.68-1.87l.51-.63-.51-.63c-.44-.55-.68-1.2-.68-1.87,0-1.07,.59-2.07,1.54-2.6l.62-.35s-.16-.93-.16-1.05c0-1.1,.9-2,2-2h1v-1c0-1.1,.9-2,2-2s2,.9,2,2v14.5c0,1.93-1.57,3.5-3.5,3.5Zm13.82-7.87c.44,.55,.68,1.2,.68,1.87,0,1.1-.61,2.1-1.6,2.63l-.4,.21-.1,.44c-.37,1.6-1.77,2.71-3.4,2.71-1.93,0-3.5-1.57-3.5-3.5V4c0-1.1,.9-2,2-2s2,.9,2,2v1h1c1.1,0,2,.9,2,2,0,.12-.16,1.05-.16,1.05l.62,.35c.95,.54,1.54,1.53,1.54,2.6,0,.68-.23,1.32-.68,1.87l-.51,.63,.51,.63Z",
        title: "Empowering the Next Generation",
        description: "With a focus on young adults and working professionals, our platform offers tools and resources to help them navigate the complexities of modern life.",
    }
]


const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
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


    // const visibleCount = 3; // Number of certificates to show at a time
    const visibleCount = window.innerWidth <= 768 ? 1 : (window.innerWidth > 768 && window.innerWidth < 1201) ? 2 : 3; // Number of certificates to show at a time
    const maxSlideIndex = certificates.length - visibleCount;

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    // Automatically cycle through slides every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => 
                (prevSlide + 1) % (maxSlideIndex + 1) // Loop back to start
            );
        }, 4000);
        return () => clearInterval(interval);
    }, [maxSlideIndex]);

    const getTransformStyle = () => ({
        transform: `translateX(-${currentSlide * (100 / visibleCount)}%)`
    });


  return (
    <>
        <Helmet>
            <title>About - MWellness</title>
        </Helmet>

        <Navbar />

        <div id={styles.AboutOuterContainer}>
            <div id='page-header'>
                <div id="page-header-content">
                    <p className='header-title'>About</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; About</p>
                </div>
            </div>


            {/* --------------------------- ABOUT FIRST SECTION -------------------------- */}
            <div id={styles.AboutFirstSection}>
                <div id={styles.AboutFirstContainer}>
                    <div id={styles.CounselorLeftSection}>
                        {/* <p><span style={{ color: "#26aba3" }}>Dr. Merry Stone</span> — Licensed Mental Health Counselor, Psychotherapist</p>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                        <div id={styles.PointersGrid}>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon}/>
                                <p>Personal Consultations</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon}/>
                                <p>Unique Technique</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon}/>
                                <p>Group Therapy</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon}/>
                                <p>Couple Problem</p>
                            </div>
                            <div className={styles.Pointers}>
                                <CiCircleCheck className={styles.PointersIcon}/>
                                <p>Online Therapy</p>
                            </div>
                        </div>

                        <button className={styles.PrimaryBtn} id={styles.LearnMoreBtn}>
                            Learn More <MdArrowOutward id={styles.LearnMoreBtnArrowIcon}/>
                        </button> */}

                        <p>Mission and Vision</p>

                        <p>At XXX, our mission is to revolutionise mental health care by breaking barriers to accessibility, affordability, and acceptance. We are committed to providing an inclusive, secure, and holistic space where individuals can connect with certified experts and explore transformative therapies, empowering them to lead healthier, more balanced lives.</p>

                        <p>We envision a world where mental health is treated with the same urgency and compassion as physical health. By leveraging technology and fostering creativity through expressive arts, we aim to create a mental health ecosystem that prioritises care, understanding, and innovation, reshaping how the world perceives and accesses mental health support.</p>
                    </div>

                    <div id={styles.CounselorRightSection}>
                        <div id={styles.CounselorImgContainer}>
                            <img src={TeamDoc2} alt="about-header-img" />
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







            {/* --------------------------- ABOUT SECOND SECTION -------------------------- */}
            {/* <div id={styles.AboutInnerContainer2}>
                <div id={styles.StatsCard}>
                    <div className={styles.StatsCol}>
                        <p>20+</p>
                        <p>Years of experience</p>
                        <p>In psychology</p>
                    </div>
                    <div className={styles.StatsCol}>
                        <p>840+</p>
                        <p>Patients received help</p>
                        <p>This year</p>
                    </div>
                    <div className={styles.StatsCol}>
                        <p>98%</p>
                        <p>Positive Feedback</p>
                        <p>From our doctors</p>
                    </div>
                </div>
            </div> */}


            <div id={styles.StoryContainer}>
                <p id={styles.StoryHeading}>Our Story</p>

                <div id={styles.StoryBgContainer}>
                    <p>XXX was born out of a shared realisation of the urgent need for accessible mental health care in India. With the rising stigma surrounding mental health, limited availability of affordable services, and geographical barriers to care, many individuals are left to struggle alone.</p>

                    <p>Founded in 2021 by Dr. Chitrabh Raghav Sinha and Neelabh Keshav Sinha, XXX set out to address these challenges head-on. Inspired by their combined experience in psychiatry, public health, and the innovative potential of digital platforms, the Sinha brothers envisioned a virtual mental health hospital—accessible to all, regardless of location or financial status.</p>

                    <p>Drawing upon the expertise of a multidisciplinary team, including specialists in psychiatry, psychology, and expressive arts therapy, XXX integrates traditional and creative therapeutic approaches. By harnessing the power of music, art, and dance therapies alongside evidence-based clinical practices, we offer a unique pathway to healing that acknowledges the complexities of every individual’s mental health journey.</p>
                </div>

                {/* <ul id={styles.GoalsList}>
                    <li className={styles.GoalItem}><span>Erasing Stigma: &nbsp;</span>We actively work to normalise conversations around mental health through awareness campaigns, online educational seminars, and collaborations with communities. By fostering understanding, we aim to dissolve the shame often associated with seeking help.</li>
                    
                    <li className={styles.GoalItem}><span>Affordable Access for All: &nbsp;</span>With cost-effective consultation models and tailored subscription packages, XXX ensures that quality mental health care is not a privilege but a right for everyone.</li>
                    
                    <li className={styles.GoalItem}><span>Holistic Wellness Through Creativity: &nbsp;</span>Our commitment to expressive arts therapy, including music, dance, and art, allows individuals to explore unconventional pathways to healing and self-expression.</li>
                    
                    <li className={styles.GoalItem}><span>Building Resilience in Communities: &nbsp;</span>By connecting users with local and online support groups, we create a network of care that extends beyond individual therapy.</li>
                    
                    <li className={styles.GoalItem}><span>Empowering the Next Generation: &nbsp;</span> With a focus on young adults and working professionals, our platform offers tools and resources to help them navigate the complexities of modern life.</li>
                </ul> */}


                {/* <p id={styles.StorySubheading}>Impact Goals</p>
                <div id={styles.GridSection}>
                    {
                        ImpactGoals.map((item, index) => (
                            <Grid 
                                index={index+1}
                                gridImg={item.img}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }
                </div> */}

            </div>


            {/* ---------------- CERTIFICATE SECTION -------------------- */}

            <div id={styles.CarouselSection}>
                <div id={styles.CarouselSectionContainer}>
                    <p>Certificates</p>
                    <p>Lorem ipsum dlor sit amet consectetur adipisicing elit.</p>
                    

                    <div id={styles.CarouselContainer}>
                        <div className={styles.Slide} style={getTransformStyle()}>
                            {certificates.map((cert, index) => (
                                <div key={index} className={styles.CertiCard}>
                                    <div className={styles.Cerificate}>
                                        <img src={cert.img} alt={`cert${index + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.SlideIndicators}>
                            {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
                                <span
                                    key={index}
                                    className={`${styles.Indicator} ${index === currentSlide ? `${styles.Active}` : ''}`}
                                    onClick={() => setCurrentSlide(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* ---------------- ABOUT STAGES SECTION -------------------- */}
            <div id={styles.ConsultationStagesSection}>
                <div id={styles.StagesInnerContainer}>      
                    <div id={styles.StagesRightSection}>
                        <p>Stages of consultation with patients on mental health</p>

                        <div id={styles.StagesGrid}>
                            <div className={styles.StagesCard}>
                                <p>01</p>
                                <p>Request on the site</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                            <div className={styles.StagesCard}>
                                <p>02</p>
                                <p>Timing</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                            <div className={styles.StagesCard}>
                                <p>03</p>
                                <p>Conducting a session</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                            <div className={styles.StagesCard}>
                                <p>04</p>
                                <p>Satisfied review</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                        </div>
                    </div>
                    
                    <div id={styles.QuestionsLeftSection}>
                        <div id={styles.QuestionImgContainer}>
                            <div className={styles.ImgGroupContainer}>
                                <img src={StagesImg1} alt="stages-img-1" />
                                <img src={StagesImg3} alt="stages-img-3" />
                            </div>
                            <div className={styles.ImgGroupContainer}>
                                <img src={StagesImg2} alt="stages-img-2" />
                                <img src={StagesImg4} alt="stages-img-4" />
                            </div>
                        </div>
                        <div id={styles.QuestionImgContainer2}>
                            <img src={ConsultStage} alt="consult-stage-image" />
                        </div>
                    </div>
                </div>
            </div>


            {/* ---------------- ABOUT PAGE THIRD SECTION -------------------- */}
            <div id={styles.AboutThirdSection}>
                <div id={styles.AboutInnerContainer3}>
                    <p>Impact Goals</p>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}

                    {/* <div id={styles.GridSection}>
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
                    </div> */}

                    <div id={styles.GridSection}>
                        {
                            ImpactGoals.map((item, index) => (
                                <Grid 
                                    index={index+1}
                                    gridImg={item.img}
                                    title={item.title}
                                    description={item.description}
                                    svgPath={item.svgPath}
                                />
                            ))
                        }
                    </div>

                    {/* <button className={styles.PrimaryBtn} id={styles.AllProgramsBtn}>
                        All programs
                        <MdArrowOutward id={styles.AllProgramsBtnIcon}/>
                    </button> */}
                </div>
            </div>



            {/* ---------------- PHOTOS SECTION -------------------- */}
            <div id={styles.PhotoSection}>
                <div id={styles.PhotosInnerContainer}>
                    <p>Photos from our Classes</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


                    <div id={styles.PhotosGrid}>
                        <div className={styles.PhotosCard}>
                            <img src={PhotosImg1} alt="photos-img-1" />
                        </div>
                        <div className={styles.PhotosCard}>
                            <img src={PhotosImg2} alt="photos-img-2" />
                        </div>
                        <div className={styles.PhotosCard}>
                            <img src={PhotosImg3} alt="photos-img-3" />
                        </div>
                        <div className={styles.PhotosCard}>
                            <img src={PhotosImg4} alt="photos-img-4" />
                        </div>
                        <div className={styles.PhotosCard}>
                            <img src={PhotosImg5} alt="photos-img-5" />
                        </div>
                        <div className={styles.PhotosCard}>
                            <img src={PhotosImg6} alt="photos-img-6" />
                        </div>
                    </div>

                    <button className={styles.PrimaryBtn} id={styles.PhotosBtn}>
                        See more photos
                        <MdArrowOutward id={styles.PhotosBtnArrowIcon}/>
                    </button>
                </div>
            </div>


            {/* ---------------- CONSULTATION FORM SECTION -------------------- */}
            <div id={styles.SixthSection}>
                <div id={styles.InnerContainer6}>
                    <p>Get your first free online consultation</p>

                    <ConsultationForm />

                    {/* <div id='consultation-form'>
                        <div className='form-input'>
                            <label htmlFor="fullName">Name</label>
                            <input type="text" name='fullName' id='fullName' placeholder='Your Name' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name='phone' id='phone' placeholder='Mobile Phone Number' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor="therapy">Section</label>
                            <select name='therapy' id='therapy' placeholder="Select Therapy">
                                <option value="">Select Therapy</option>
                                <option value="Therapy 1">Therapy 1</option>
                                <option value="Therapy 2">Therapy 2</option>
                                <option value="Therapy 3">Therapy 3</option>
                            </select>
                        </div>
                        <div className='form-input'>
                            <label htmlFor="consultation-date">Consultation Date</label>
                            <input type="date" name='consultation-date' id='consultation-date' placeholder='dd/mm/yyyy'/>
                        </div>

                    </div> */}

                    <button className={styles.PrimaryBtn}>
                        Get A Consultation
                        <MdArrowOutward id={styles.FormOutwardArrowIcon}/> 
                    </button>
                </div>
            </div>


        </div>

        <Footer />    
    </>
  )
}

export default About
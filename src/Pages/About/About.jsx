import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { MdArrowOutward } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import TeamDoc2 from '../../Assets/images/team-doc-2.jpg'
import './About.css';
import '../../Assets/root.css';
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon2 from '../../Assets/images/grid-icon-2.svg'
import GridIcon3 from '../../Assets/images/grid-icon-3.svg'
import GridIcon4 from '../../Assets/images/grid-icon-4.svg'
import GridIcon5 from '../../Assets/images/grid-icon-5.svg'
import GridIcon6 from '../../Assets/images/grid-icon-6.svg'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import StagesImg1 from '../../Assets/images/stages-img-1.png';
import StagesImg2 from '../../Assets/images/stages-img-2.png';
import StagesImg3 from '../../Assets/images/stages-img-3.png';
import StagesImg4 from '../../Assets/images/stages-img-4.png';
import PhotosImg1 from '../../Assets/images/photos-img-1.jpg';
import PhotosImg2 from '../../Assets/images/photos-img-2.jpg';
import PhotosImg3 from '../../Assets/images/photos-img-3.jpg';
import PhotosImg4 from '../../Assets/images/photos-img-4.jpg';
import PhotosImg5 from '../../Assets/images/photos-img-5.jpg';
import PhotosImg6 from '../../Assets/images/photos-img-6.jpg';

import CertiImg1 from '../../Assets/images/certificate-img-1.jpg';
import CertiImg2 from '../../Assets/images/certificate-img-2.jpg';
import CertiImg3 from '../../Assets/images/certificate-img-3.jpg';
import CertiImg4 from '../../Assets/images/certificate-img-4.jpg';
import CertiImg5 from '../../Assets/images/certificate-img-5.jpg';
import CertiImg6 from '../../Assets/images/certificate-img-6.jpg';


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


const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const visibleCount = 3; // Number of certificates to show at a time
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
        <Navbar />

        <div id='about-outer-container'>
            <div id='page-header'>
                <div id="page-header-content">
                    <p className='header-title'>About</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; About</p>
                </div>
            </div>


            {/* --------------------------- ABOUT FIRST SECTION -------------------------- */}
            <div id='about-inner-container-1'>
                <div id="about-left-section">
                    <p><span style={{ color: "#26aba3" }}>Dr. Merry Stone</span> — Licensed Mental Health Counselor, Psychotherapist</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                    <div id='pointers-grid'>
                        <div className='pointers'>
                            <CiCircleCheck className='pointers-icon'/>
                            <p>Personal Consultations</p>
                        </div>
                        <div className='pointers'>
                            <CiCircleCheck className='pointers-icon'/>
                            <p>Unique Technique</p>
                        </div>
                        <div className='pointers'>
                            <CiCircleCheck className='pointers-icon'/>
                            <p>Group Therapy</p>
                        </div>
                        <div className='pointers'>
                            <CiCircleCheck className='pointers-icon'/>
                            <p>Couple Problem</p>
                        </div>
                        <div className='pointers'>
                            <CiCircleCheck className='pointers-icon'/>
                            <p>Online Therapy</p>
                        </div>
                    </div>

                    <button className='primary-btn' id='about-header-btn'>
                        Learn More
                        <MdArrowOutward />
                    </button>
                </div>
                <div id="about-right-section">
                    <div id='about-header-img-container'>
                        <img src={TeamDoc2} alt="about-header-img" />
                    </div>
                </div>
            </div>


            {/* --------------------------- ABOUT SECOND SECTION -------------------------- */}
            <div id='about-inner-container-2'>
                <div id='stats-card'>
                    <div className='stat-col'>
                        <p>20+</p>
                        <p>Years of experience</p>
                        <p>In psychology</p>
                    </div>
                    <div className='stat-col'>
                        <p>840+</p>
                        <p>Patients received help</p>
                        <p>This year</p>
                    </div>
                    <div className='stat-col'>
                        <p>98%</p>
                        <p>Positive Feedback</p>
                        <p>From our doctors</p>
                    </div>
                </div>
            </div>


            {/* ---------------- CERTIFICATE SECTION -------------------- */}
            <div id='carousel-section'>
                <div id='carousel-section-container'>
                    <p>Certificates</p>
                    <p>Lorem ipsum dlor sit amet consectetur adipisicing elit.</p>
                    

                    <div id="carousel-container">
                        <div className="slide" style={getTransformStyle()}>
                            {certificates.map((cert, index) => (
                                <div key={index} className="certi-card">
                                    <div className="certificate">
                                        <img src={cert.img} alt={`cert${index + 1}`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="slide-indicators">
                        {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* ---------------- ABOUT STAGES SECTION -------------------- */}
            <div id='consultation-stages-section'>
                <div id='about-inner-container-3'>      
                    <div id="stages-right-section">
                        <p>Stages of consultation with patients on mental health</p>

                        <div id='stages-grid'>
                            <div className="stages-card">
                                <p>01</p>
                                <p>Request on the site</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                            <div className="stages-card">
                                <p>02</p>
                                <p>Timing</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                            <div className="stages-card">
                                <p>03</p>
                                <p>Conducting a session</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                            <div className="stages-card">
                                <p>04</p>
                                <p>Satisfied review</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                            </div>
                        </div>
                    </div>
                    <div id="stages-left-section">
                        <div id='stages-img-container'>
                            <div className='img-group-container'>
                                <img src={StagesImg1} alt="stages-img-1" />
                                <img src={StagesImg3} alt="stages-img-3" />
                            </div>
                            <div className='img-group-container'>
                                <img src={StagesImg2} alt="stages-img-2" />
                                <img src={StagesImg4} alt="stages-img-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ---------------- LANDING PAGE THIRD SECTION -------------------- */}
            <div id='about-third-section'>
                <div id='inner-container-3'>
                    <p>What I'm Offer</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div id='grid-section'>
                        <div className='grid-card'>
                            <img src={GridIcon1} alt="grid-icon-1" />
                            <p>Assessments</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>More Info</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>

                        <div className='grid-card'>
                            <img src={GridIcon2} alt="grid-icon-2" />
                            <p>Educational Seminars</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>More Info</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>

                        <div className='grid-card'>
                            <img src={GridIcon3} alt="grid-icon-3" />
                            <p>Mental Health Journals</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>More Info</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>

                        <div className='grid-card'>
                            <img src={GridIcon4} alt="grid-icon-4" />
                            <p>Meet The Experts</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>More Info</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>

                        <div className='grid-card'>
                            <img src={GridIcon5} alt="grid-icon-5" />
                            <p>ARTS Therapy</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>More Info</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>

                        <div className='grid-card'>
                            <img src={GridIcon6} alt="grid-icon-6" />
                            <p>Awareness Campaign</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>More Info</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>
                    </div>

                    <button className='primary-btn'>
                        All programs
                        <MdArrowOutward />
                    </button>
                </div>
            </div>



            {/* ---------------- PHOTOS SECTION -------------------- */}
            <div id='photos-section'>
                <div id="photos-inner-container">
                    <p>Photos from out Classes</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>


                    <div id='photos-grid'>
                        <div className="photo-card">
                            <img src={PhotosImg1} alt="photos-img-1" />
                        </div>
                        <div className="photo-card">
                            <img src={PhotosImg2} alt="photos-img-2" />
                        </div>
                        <div className="photo-card">
                            <img src={PhotosImg3} alt="photos-img-3" />
                        </div>
                        <div className="photo-card">
                            <img src={PhotosImg4} alt="photos-img-4" />
                        </div>
                        <div className="photo-card">
                            <img src={PhotosImg5} alt="photos-img-5" />
                        </div>
                        <div className="photo-card">
                            <img src={PhotosImg6} alt="photos-img-6" />
                        </div>
                    </div>

                    <button className='primary-btn'>
                        See more photos
                        <MdArrowOutward />
                    </button>
                </div>
            </div>


            {/* ---------------- CONSULTATION FORM SECTION -------------------- */}
            <div id='sixth-section'>
                <div id='inner-container-6'>
                    <p>Get your first free online consultation</p>

                    <div id='consultation-form'>
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

                    </div>

                    <button className='primary-btn'>
                        Get A Consultation
                        <MdArrowOutward />
                    </button>
                </div>
            </div>


        </div>

        <Footer />    
    </>
  )
}

export default About
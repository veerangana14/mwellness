import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import HeaderImg from '../../Assets/images/header-img.png'
import './Home.css';
import { MdArrowOutward } from "react-icons/md";
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon2 from '../../Assets/images/grid-icon-2.svg'
import GridIcon3 from '../../Assets/images/grid-icon-3.svg'
import GridIcon4 from '../../Assets/images/grid-icon-4.svg'
import GridIcon5 from '../../Assets/images/grid-icon-5.svg'
import GridIcon6 from '../../Assets/images/grid-icon-6.svg'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import CounselorImg from '../../Assets/images/counselor-section-img.png'
import ArticleImg1 from '../../Assets/images/articles-img-1.jpg'
import ArticleImg2 from '../../Assets/images/articles-img-2.jpg'
import ArticleImg3 from '../../Assets/images/articles-img-3.jpg'
import AccordImg1 from '../../Assets/images/accord-img-1.jpg'
import AccordImg2 from '../../Assets/images/accord-img-2.jpg'
import AccordImg3 from '../../Assets/images/accord-img-3.jpg'
import AccordImg4 from '../../Assets/images/accord-img-4.jpg'
import HomeBanner from '../../Assets/images/home-header.png'

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

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split reviews into groups of 2 for each slide
    const reviewsPerSlide = 2;
    const slides = [];
    for (let i = 0; i < patientReviews.length; i += reviewsPerSlide) {
        slides.push(patientReviews.slice(i, i + reviewsPerSlide));
    }

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    // Automatically cycle through slides every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [slides.length]);


    return (
        <div>
            <Navbar />


            {/* ---------------- LANDING PAGE HEADER SECTION -------------------- */}
            <div id='header-section'>
                <div id='inner-container-1'>
                    <div id="header-left-section">
                        <p>Understand Mental Health</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam architecto iste vitae non perspiciatis repellendus totam ipsa odio deserunt natus, eveniet.</p>

                        <div id='header-section-buttons'>
                            <button className='primary-btn'>
                                Meet Experts
                                <MdArrowOutward />
                            </button>
                            <button className='secondary-btn'>
                                Get Started
                                <MdArrowOutward />
                            </button>
                        </div>

                        <div id='header-stats-section'>
                            <div className='header-stats-item'>
                                <p>20+</p>
                                <hr />
                                <p>Mental Health Experts</p>
                            </div>
                            <div className='header-stats-item'>
                                <p>100+</p>
                                <hr />
                                <p>Assessments and Games</p>
                            </div>
                            <div className='header-stats-item'>
                                <p>50+</p>
                                <hr />
                                <p>Educational Seminars</p>
                            </div>
                        </div>
                    </div>
                    <div id="header-right-section">
                        <div id='header-img-container'>
                            <img src={HeaderImg} alt="header-img" />
                        </div>
                    </div>
                    <div id="header-banner">
                        <div id='header-banner-container'>
                            <img src={HomeBanner} alt="header-img" />
                        </div>
                    </div>
                </div>
            </div>





            {/* ---------------- LANDING PAGE QUES SECTION -------------------- */}
            <div id='ques-section'>
                <div id='inner-container-2'>
                    <div id="ques-left-section">
                        <div id='ques-img-container'>
                            <div className='img-group-container'>
                                <img src={AccordImg1} alt="accord-img-1" />
                                <img src={AccordImg2} alt="accord-img-2" />
                            </div>
                            <div className='img-group-container'>
                                <img src={AccordImg3} alt="accord-img-3" />
                                <img src={AccordImg4} alt="accord-img-4" />
                            </div>
                        </div>
                    </div>
                    <div id="ques-right-section">
                        <p>The most popular questions to discuss mental health</p>

                        <div id='faq-accordion'>
                            <div className="accordion-item">
                                <input type="radio" name="accordion" id="faq1" className="accordion-radio" />
                                <div className={`accordion-header ${openIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                                    <p className="accordion-question">What is mental health?</p>
                                    <span className="accordion-icon">{openIndex === 1 ? '−' : '+'}</span>
                                </div>
                                {openIndex === 1 && (
                                    <div className="accordion-content">
                                        <p>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.</p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion-item">
                                <input type="radio" name="accordion" id="faq2" className="accordion-radio" />
                                <div className={`accordion-header ${openIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                                    <p className="accordion-question">How can I support a friend with mental health issues?</p>
                                    <span className="accordion-icon">{openIndex === 2 ? '−' : '+'}</span>
                                </div>
                                {openIndex === 2 && (
                                    <div className="accordion-content">
                                        <p>Listening and offering support, encouraging them to seek professional help, and staying connected can make a big difference.</p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion-item">
                                <input type="radio" name="accordion" id="faq3" className="accordion-radio" />
                                <div className={`accordion-header ${openIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                                    <p className="accordion-question">Can you prevent mental health problems ?</p>
                                    <span className="accordion-icon">{openIndex === 3 ? '−' : '+'}</span>
                                </div>
                                {openIndex === 3 && (
                                    <div className="accordion-content">
                                        <p>Listening and offering support, encouraging them to seek professional help, and staying connected can make a big difference.</p>
                                    </div>
                                )}
                            </div>
                            <div className="accordion-item">
                                <input type="radio" name="accordion" id="faq4" className="accordion-radio" />
                                <div className={`accordion-header ${openIndex === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)}>
                                    <p className="accordion-question">What are the 7 components of mental health?</p>
                                    <span className="accordion-icon">{openIndex === 4 ? '−' : '+'}</span>
                                </div>
                                {openIndex === 4 && (
                                    <div className="accordion-content">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* ---------------- LANDING PAGE THIRD SECTION -------------------- */}
            <div id='third-section'>
                <div id='inner-container-3'>
                    <p>Ways to improve and treat mental health issues</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

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
                </div>
            </div>




            {/* ---------------- LANDING PAGE FOURTH SECTION -------------------- */}
            <div id='fourth-section'>
                <div id='inner-container-4'>
                    <div id='counselor-left-section'>
                        <p>Meet <span style={{ color: "#26aba3" }}>Dr. Chitrabh Sinha</span> - Licensed Mental Health Counselor</p>

                        <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                        <button className='primary-btn'>
                            Download App <MdArrowOutward />
                        </button>
                    </div>

                    <div id='counselor-right-section'>
                        <div id='counselor-img-container'>
                            <img src={CounselorImg} alt="counselor-img" />
                        </div>
                    </div>
                </div>
            </div>



            {/* ---------------- PATIENT REVIEW SECTION -------------------- */}
            <div id='fifth-section'>
                <div id='inner-container-5'>
                    <p>What Patients Say</p>
                    <p>Lorem ipsum dlor sit amet consectetur adipisicing elit.</p>
                    

                    <div id="carousel-container">
                        <div className="slide">
                            {slides[currentSlide].map((review, index) => (
                            <div key={index} className="review-card">
                                <h4 className="review-name">{review.name}</h4>
                                <p className="review-job">{review.job}</p>
                                <p className="review-text">{review.review}</p>
                            </div>
                            ))}
                        </div>

                        {/* Slide indicators */}
                        <div className="slide-indicators">
                            {slides.map((_, index) => (
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


            {/* ---------------- LATEST ARTICLES SECTION -------------------- */}
            <div id='seventh-section'>
                <div id='inner-container-7'>
                    <div id='articles-header'>
                        <p>Latest Articles</p>
                        <div>
                            <button className='primary-btn'>
                                Read More Articles
                                <MdArrowOutward />
                            </button>
                        </div>
                    </div>


                    <div id='articles-grid'>
                        <div className='article-card'>
                            <div className='article-card-img-container'>
                                <img src={ArticleImg1} alt="article-img-1" />
                            </div>

                            <div className='article-card-content-container'>
                                <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                <p className='article-card-title'>The pros and cons of group psychotherapy</p>

                                <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                <div className='grid-link'>
                                    <p>Read More</p>
                                    <BsArrowUpRightCircleFill className='grid-link-icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='article-card'>
                            <div className='article-card-img-container'>
                                <img src={ArticleImg2} alt="article-img-2" />
                            </div>

                            <div className='article-card-content-container'>
                                <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                <p className='article-card-title'>Top seven challenges in counselling children</p>

                                <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                <div className='grid-link'>
                                    <p>Read More</p>
                                    <BsArrowUpRightCircleFill className='grid-link-icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='article-card'>
                            <div className='article-card-img-container'>
                                <img src={ArticleImg3} alt="article-img-3" />
                            </div>

                            <div className='article-card-content-container'>
                                <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                <p className='article-card-title'>Action, types and tips for finding group therapy</p>

                                <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                <div className='grid-link'>
                                    <p>Read More</p>
                                    <BsArrowUpRightCircleFill className='grid-link-icon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
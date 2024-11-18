import React, { useEffect, useState } from 'react'
import '../../Assets/root.css';
import './Campaign.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CampaignHeaderImg from '../../Assets/images/campaign-header-img.jpg'
import { MdArrowOutward } from 'react-icons/md';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import CampaignImg1 from '../../Assets/images/campaign-img-1.jpg'
import CampaignImg2 from '../../Assets/images/campaign-img-2.png'
import CampaignImg3 from '../../Assets/images/campaign-img-3.jpeg'
import { CiCircleCheck } from 'react-icons/ci';
import CampaignPointersImg from '../../Assets/images/campaign-pointers-img.jpg'


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

const Campaign = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

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
        <>
            <Navbar />

            <div id='outer-container'>
                {/* ---------------- CAMPAIGN PAGE HEADER SECTION -------------------- */}
                <div id='header-section'>
                    <div id='inner-container-1'>
                        <div id="header-left-section">
                            <p>Understand Mental Health</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam architecto iste vitae non perspiciatis repellendus totam ipsa odio deserunt natus, eveniet.</p>

                            <div id='header-section-buttons'>
                                <button className='primary-btn'>
                                    Get a Consultation
                                    <MdArrowOutward />
                                </button>
                                <button className='secondary-btn'>
                                    Learn More
                                    <MdArrowOutward />
                                </button>
                            </div>

                            <div id='header-stats-section'>
                                <div className='header-stats-item'>
                                    <p>20+</p>
                                    <hr />
                                    <p>The Years of our experience</p>
                                </div>
                                <div className='header-stats-item'>
                                    <p>840+</p>
                                    <hr />
                                    <p>Patients recieved help this year</p>
                                </div>
                                <div className='header-stats-item'>
                                    <p>98%</p>
                                    <hr />
                                    <p>Clients improved their condition</p>
                                </div>
                            </div>
                        </div>
                        <div id="header-right-section">
                            <div id='header-img-container'>
                                <img src={CampaignHeaderImg} alt="campaign-header-img" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---------------- LATEST CAMPAIGNS SECTION -------------------- */}
                <div id='campaign-section'>
                    <div id='campaign-container'>
                        <div id='articles-header'>
                            <p>Latest Campaigns</p>
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
                                    <img src={CampaignImg1} alt="campaign-img-1" />
                                </div>

                                <div className='article-card-content-container'>
                                    <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                    <p className='article-card-title'>The pros and cons of group psychotherapy</p>

                                    <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                    <div className='grid-link'>
                                        <p>Read More</p>
                                        <BsArrowUpRightCircleFill className='grid-link-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='article-card'>
                                <div className='article-card-img-container'>
                                    <img src={CampaignImg2} alt="campaign-img-2" />
                                </div>

                                <div className='article-card-content-container'>
                                    <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                    <p className='article-card-title'>Top seven challenges in counselling children</p>

                                    <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                    <div className='grid-link'>
                                        <p>Read More</p>
                                        <BsArrowUpRightCircleFill className='grid-link-icon' />
                                    </div>
                                </div>
                            </div>

                            <div className='article-card'>
                                <div className='article-card-img-container'>
                                    <img src={CampaignImg3} alt="campaign-img-3" />
                                </div>

                                <div className='article-card-content-container'>
                                    <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                    <p className='article-card-title'>Action, types and tips for finding group therapy</p>

                                    <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                    <div className='grid-link'>
                                        <p>Read More</p>
                                        <BsArrowUpRightCircleFill className='grid-link-icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* ---------------- CAMPAIGN PAGE HEADER SECTION -------------------- */}
                <div id='header-section'>
                    <div id='header-inner-container'>
                        <div id="campaign-left-section">
                            <p><span style={{ color: "#26aba3" }}>Mental Health </span> <br /> At Workplace - Campaign 2024</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                            <div id='pointers-grid'>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon' />
                                    <p>Elder Group</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon' />
                                    <p>Lifestyle & Profession</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon' />
                                    <p>Couples & Relations</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon' />
                                    <p>Doctor - Patient Relations</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon' />
                                    <p>Age Groups</p>
                                </div>
                            </div>

                            <button className='primary-btn' id='campaign-header-btn'>
                                Tell Us More
                                <MdArrowOutward />
                            </button>
                        </div>

                        <div id='campaign-right-section'>
                            <div id='campaign-img-container'>
                                <img src={CampaignPointersImg} alt="campaign-pointers-img" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---------------- REVIEW SECTION -------------------- */}
                <div id='review-section'>
                    <div id='review-container'>
                        <p>What People Say About It</p>
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


            </div>

            <Footer />
        </>
    )
}

export default Campaign
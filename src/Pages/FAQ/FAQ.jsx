import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './FAQ.css';
import { FaClock, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import FAQImg from '../../Assets/images/faq-img.jpg';

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Navbar />

            <div id='faq-outer-container'>

                <div id='page-header'>
                    <div id="page-header-content">
                        <p className='header-title'>Personal Questions</p>

                        <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; FAQ</p>
                    </div>
                </div>


                <div id='faq-section'>
                    <div id='faq-inner-container'>
                        <div id="faq-right-section">
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
                        <div id="faq-left-section">
                            <div id='faq-img-container'>
                                <img src={FAQImg} alt="faq-img" />
                            </div>
                        </div>
                    </div>
                </div>


                <div id="contact-inner-container">
                    <p>Contact Info</p>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>

                    <div id='contact-info-grid'>
                        <div className='contact-info-card'>
                            <div className='contact-info-icon'>
                                <FaPhoneAlt className='contact-icons' />
                            </div>

                            <p className='contact-card-category'>Phone</p>
                            <p className='contact-card-info-lines'>+880-1680-6361-89</p>
                            <p className='contact-card-info-lines'>+1-234-56-78-123</p>
                        </div>

                        <div className='contact-info-card'>
                            <div className='contact-info-icon'>
                                <MdEmail className='contact-icons' />
                            </div>

                            <p className='contact-card-category'>Email</p>
                            <p className='contact-card-info-lines'>info@talkingminds.com</p>
                            <p className='contact-card-info-lines'>contact@talkingminds.com</p>
                        </div>

                        <div className='contact-info-card'>
                            <div className='contact-info-icon'>
                                <FaLocationDot className='contact-icons' />
                            </div>

                            <p className='contact-card-category'>Address</p>
                            <p className='contact-card-info-lines'>49, Caradon Hill,</p>
                            <p className='contact-card-info-lines'>ULBSTER</p>
                        </div>

                        <div className='contact-info-card'>
                            <div className='contact-info-icon'>
                                <FaClock className='contact-icons' />
                            </div>

                            <p className='contact-card-category'>Working Hours</p>
                            <p className='contact-card-info-lines'>Mon to Fri 8 am - 6 pm</p>
                            <p className='contact-card-info-lines'>Sat to Sun 9 am - 2 pm</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default FAQ
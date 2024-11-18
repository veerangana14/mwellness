import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AccordImg1 from '../../Assets/images/accord-img-1.jpg'
import AccordImg2 from '../../Assets/images/accord-img-2.jpg'
import AccordImg3 from '../../Assets/images/accord-img-3.jpg'
import AccordImg4 from '../../Assets/images/accord-img-4.jpg'
import CommunityHeaderImg from '../../Assets/images/community-header-img.jpg'
import { MdArrowOutward } from 'react-icons/md'
import { CiCircleCheck } from 'react-icons/ci'
import './Community.css';
import '../../Assets/root.css';

const Community = () => {
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
            <div id='outer-container'>

                {/* ---------------- COMMUNITY PAGE HEADER SECTION -------------------- */}
                <div id='header-section'>
                    <div id='header-inner-container'>
                        <div id="community-left-section">
                            <p>Asharika Community</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page. Sed ut perspiciatis unde omnis iste natus error.</p>

                            <div id='pointers-grid'>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon'/>
                                    <p>Elder Group</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon'/>
                                    <p>Lifestyle & Profession</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon'/>
                                    <p>Couples & Relations</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon'/>
                                    <p>Doctor - Patient Relations</p>
                                </div>
                                <div className='pointers'>
                                    <CiCircleCheck className='pointers-icon'/>
                                    <p>Age Groups</p>
                                </div>
                            </div>

                            <button className='primary-btn' id='community-header-btn'>
                                Join Us
                                <MdArrowOutward />
                            </button>
                        </div>

                        <div id='community-right-section'>
                            <div id='community-img-container'>
                                <img src={CommunityHeaderImg} alt="community-header-img" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---------------- COMMUNITY PAGE QUES SECTION -------------------- */}
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


                {/* ---------------- CONSULTATION FORM SECTION -------------------- */}
                <div id='consultation-form-section'>
                    <div id='consultation-form-container'>
                        <p>Join Our Community</p>

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
                                <label htmlFor="role">I'm a</label>
                                <select name='role' id='role' placeholder="Doctor">
                                    <option value="Doctor">Doctor</option>
                                    <option value="Patient">Patient</option>
                                    <option value="Subject Expert">Subject Expert</option>
                                    <option value="Internet User">Internet User</option>
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

export default Community
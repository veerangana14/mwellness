import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import '../../Assets/root.css'
import './Assessments.css';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon5 from '../../Assets/images/grid-icon-5.svg'
import GridIcon6 from '../../Assets/images/grid-icon-6.svg'
import { MdArrowOutward } from 'react-icons/md';
import AssessmentFormImg from  '../../Assets/images/assessment-form-img.jpg';

const Assessments = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Navbar />

        <div id='outer-container'>
            <div id='page-header'>
                <div id="page-header-content">
                    <p className='header-title'>All Programs</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; All Programs</p>
                </div>
            </div>


            {/* ---------------- ASSESSMENTS PROCESS SECTION -------------------- */}
            <div id='assessment-process-section'>
                <p>Assessment Process</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis</p>


                <div id='process-grid'>
                    <div className="process-card">
                        <p>01</p>
                        <p>Be Relaxed</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                    </div>
                    <div className="process-card">
                        <p>02</p>
                        <p>Be Honest</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                    </div>
                    <div className="process-card">
                        <p>03</p>
                        <p>Answer Questions</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                    </div>
                    <div className="process-card">
                        <p>04</p>
                        <p>Get Right Expert</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                    </div>
                </div>
            </div>


            {/* ---------------- ASSESSMENTS PROGRAMS SECTION -------------------- */}
            <div id='programs-section'>
                <div id='programs-container'>
                    <p>Mental Health Assessments Programs</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div id='grid-section'>
                        <div className='grid-card'>
                            <img src={GridIcon1} alt="grid-icon-1" />
                            <p>Depression Assessment</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>Start</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>

                       

                        <div className='grid-card'>
                            <img src={GridIcon5} alt="grid-icon-5" />
                            <p>Anxiety Assessment</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>Start</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>

                        <div className='grid-card'>
                            <img src={GridIcon6} alt="grid-icon-6" />
                            <p>Stress Assessment</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>
                            <div className='grid-link'>
                                <p>Start</p>
                                <BsArrowUpRightCircleFill className='grid-link-icon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* ---------------- ASSESSMENTS CONSULTATION FORM SECTION -------------------- */}
            <div id='assessments-form-section'>
                <div id='form-img-container'>
                    <img src={AssessmentFormImg} alt="form-side-img" />
                </div>
                
                <div id='form-container'>
                    <p>Take Care of your Mental Health</p>

                    <div id='assessment-consultation-form'>
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

export default Assessments
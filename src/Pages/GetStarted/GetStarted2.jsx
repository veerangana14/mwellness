import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from './GetStarted.module.css'
import { Helmet } from 'react-helmet'
import ProcessCard from '../../Components/ProcessCard/ProcessCard'
import { MdArrowOutward } from 'react-icons/md'
import AssessmentFormImg from '../../Assets/images/assessment-form-img.jpg'
import ConsultationForm2 from '../../Components/ConsultationForm/ConsultationForm2'

let process = [
    {
        processNumber: "01",
        title: "Request on the site",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    },
    {
        processNumber: "02",
        title: "Timing",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    },
    {
        processNumber: "03",
        title: "Conducting a session",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    },
    {
        processNumber: "04",
        title: "Satisfied review",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    }
]

const GetStarted2 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Helmet>
                <title>Get Started - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.OuterContainer}>


                {/* ---------------- ASSESSMENTS PROCESS SECTION -------------------- */}
                <div id={styles.AssessmentProcessSection}>
                    <p>Counseling Process</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit ut elit tellus, luctus nec ullamcorper mattis</p>

                    <div id={styles.ProcessGrid}>
                        {process.map((step, index) => (
                            <ProcessCard
                                key={index}
                                stepNumber={step.processNumber}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>
                </div>


                {/* --------------- ASSESSMENTS CONSULTATION FORM SECTION --------------- */}
                {/* <div id={styles.AssessmentsFormSection}>
                    <div id={styles.FormImgContainer}>
                        <img src={AssessmentFormImg} alt="form-side-img" />
                    </div>

                    <div id={styles.FormContainer}>
                        <p>Take Care of your Mental Health</p>

                        <div id={styles.AssessmentConsultationForm}>
                            <div className={styles.AssessmentFormInput}>
                                <label htmlFor="fullName">Name</label>
                                <input type="text" name='fullName' id='fullName' placeholder='Your Name' />
                            </div>
                            <div className={styles.AssessmentFormInput}>
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name='phone' id='phone' placeholder='Mobile Phone Number' />
                            </div>
                            <div className={styles.AssessmentFormInput}>
                                <label htmlFor="therapy">Section</label>
                                <select name='therapy' id='therapy'>
                                    <option value="">Select Therapy</option>
                                    <option value="Therapy 1">Therapy 1</option>
                                    <option value="Therapy 2">Therapy 2</option>
                                    <option value="Therapy 3">Therapy 3</option>
                                </select>
                            </div>
                            <div className={styles.AssessmentFormInput}>
                                <label htmlFor="consultation-date">Consultation Date</label>
                                <input
                                    name='consultation-date'
                                    id='consultation-date'
                                    placeholder='dd/mm/yyyy'
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => (e.target.type = e.target.value ? 'date' : 'text')}
                                />
                            </div>
                        </div>

                        <div id={styles.StartedBtn}>
                            <button id={styles.GreenBtn}>
                                Get A Consultation
                                <MdArrowOutward id={styles.OutwardArrowIcon} />
                            </button>
                        </div>
                    </div>
                </div> */}

                <ConsultationForm2 />

            </div>

            <Footer />
        </>
    )
}

export default GetStarted2
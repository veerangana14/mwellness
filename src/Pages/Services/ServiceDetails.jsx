import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from './ServiceDetails.module.css'
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon2 from '../../Assets/images/grid-icon-2.svg'
import GridIcon3 from '../../Assets/images/grid-icon-3.svg'
import StagesImg1 from '../../Assets/images/service_details_img1.png'
import StagesImg2 from '../../Assets/images/service_details_img2.png'
import StagesImg3 from '../../Assets/images/service_details_img3.png'
import StagesImg4 from '../../Assets/images/service_details_img4.png'
import ServiceStagesImg from '../../Assets/images/service-stages-img.png'
import { useNavigate } from 'react-router-dom'
import AssessmentAccordion from '../../Components/Accordion/AssessmentAccordion'
import { MdArrowOutward } from "react-icons/md"
import Grid from '../../Components/Grid/Grid'

const otherServices = [
    {
        gridImg: GridIcon1,
        title: "Depression Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "/service-details"
    },
    {
        gridImg: GridIcon2,
        title: "Couples Counseling",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "/service-details"
    },
    {
        gridImg: GridIcon3,
        title: "Relationships",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "/service-details"
    }
]

const assessment = [
    {
        ques: "What is mental health?",
        ans: {
            0: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            1: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            2: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            3: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam."
        }
    },
    {
        ques: "What do I do if support doesn't help?",
        ans: {
            0: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            1: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            2: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            3: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam."
        }
    },
    {
        ques: "Can you prevent mental health problems?",
        ans: {
            0: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            1: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            2: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            3: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam."
        }
    },
    {
        ques: "What are 7 components of mental health?",
        ans: {
            0: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            1: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            2: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            3: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam."
        }
    },
    {
        ques: "Are there cures for mental health problems?",
        ans: {
            0: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            1: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            2: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam.",
            3: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam."
        }
    }
]

const ServiceDetails = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [answers, setAnswers] = useState({});
    const [assessmentAnswers, setAssessmentAnswers] = useState([]);

    const contentRef = useRef([]);

    const navigate = useNavigate();

    const handleAnswerChange = (questionIndex, answerValue) => {

        setAssessmentAnswers(prev => (
            assessmentAnswers.find((ans) => ans.quesIndex === questionIndex) ?
                [
                    ...assessmentAnswers.filter((ans) => ans.quesIndex !== questionIndex),
                    {
                        quesIndex: questionIndex,
                        answerIndex: answerValue,
                        question: assessment[questionIndex].ques,
                        answer: assessment[questionIndex].ans[answerValue]
                    }
                ] :
                [
                    ...prev,
                    {
                        quesIndex: questionIndex,
                        answerIndex: answerValue,
                        question: assessment[questionIndex].ques,
                        answer: assessment[questionIndex].ans[answerValue]
                    }
                ]
        ))
    };

    const handleSubmitAssesment = () => {
        // console.log("Answers: ", answers);
        // setAnswers({});

        console.log("Answers: ", assessmentAnswers);
        setAssessmentAnswers([]);

        window.scrollTo(0, 0);
    }

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Helmet>
                <title>Anxiety Assessment - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.OuterContainer}>
                {/* ---------------- STAGES SECTION -------------------- */}
                <div id={styles.ConsultationStagesSection}>
                    <div id={styles.StagesInnerContainer}>
                        <div id={styles.StagesRightSection}>
                            <p>Stages of Consultation with Patients on Mental Health</p>

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
                                <img src={ServiceStagesImg} alt="consult-stage-image" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------- SERVICES FAQs ------------------- */}
                <div id={styles.Questionaire}>
                    <p id={styles.QuestionaireHeading}>The most popular questions to discuss mental health</p>

                    <div id={styles.FaqAccordion}>
                        {
                            assessment.map((item, index) => (
                                <AssessmentAccordion
                                    openIndex={openIndex}
                                    contentRef={contentRef}
                                    index={index}
                                    question={item.ques}
                                    answerObj={item.ans}
                                    handleClick={toggleAccordion}
                                    handleAnswerChange={handleAnswerChange}
                                    selectedAnswer={assessmentAnswers.find((a) => index === a.quesIndex) ? assessmentAnswers.find((a) => index === a.quesIndex)?.answerIndex : null}
                                />
                            ))
                        }
                    </div>

                    <button className={styles.PrimaryBtn} id={styles.AllProgramsBtn} onClick={handleSubmitAssesment}>
                        Submit Assessment
                        <MdArrowOutward id={styles.AllProgramsBtnIcon} />
                    </button>
                </div>

                <div id={styles.AboutThirdSection}>
                    <div id={styles.AboutInnerContainer3}>
                        <p>Other Services</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        <div id={styles.GridSection}>
                            {
                                otherServices.map((item, index) => (
                                    <Grid
                                        index={index + 1}
                                        gridImg={item.gridImg}
                                        title={item.title}
                                        description={item.description}
                                        linkText={"More Info"}
                                        onClick={() => { 
                                            navigate(`${item.redirectUrl}`);
                                            window.scrollTo(0, 0);
                                        }}
                                    />
                                ))
                            }
                        </div>

                        <button className={styles.PrimaryBtn} id={styles.AllProgramsBtn} onClick={() => navigate("/programs")}>
                            All Services
                            <MdArrowOutward id={styles.AllProgramsBtnIcon} />
                        </button>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default ServiceDetails
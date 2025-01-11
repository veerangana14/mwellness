import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import styles from './SingleAssessment.module.css'
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon2 from '../../Assets/images/grid-icon-2.svg'
import GridIcon3 from '../../Assets/images/grid-icon-3.svg'
import Grid from '../../Components/Grid/Grid'
import { MdArrowOutward } from "react-icons/md"
import Navbar from '../../Components/Navbar/Navbar'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import AssessmentAccordion from '../../Components/Accordion/AssessmentAccordion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AssessmentResult from '../../Components/AssessmentResult/AssessmentResult'
import { X } from 'lucide-react'
import axios from 'axios'

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
        ques: "In the last month, how often have you been upset because of something that happened unexpectedly?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you felt that you were unable to control the important things in your life?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you felt nervous and stressed?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you felt confident about your ability to handle your personal problems?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you felt that things were going your way?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you found that you could not cope with all the things that you had to do?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you been able to control irritations in your life?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you felt that you were on top of things?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you been angered because of things that happened that were outside of your control?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    },
    {
        ques: "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
        ans: {
            0: "never",
            1: "almost never",
            2: "sometimes",
            3: "fairly often",
            4: "very often"
        }
    }
]

const PerceivedStressAssessment = () => {
    const [resultModalOpen, setResultModalOpen] = useState(false);
    const [assessmentResult, setAssessmentResult] = useState(null);

    const [openIndex, setOpenIndex] = useState(assessment.map((_, index) => index)); // All accordions open initially
    const [assessmentAnswers, setAssessmentAnswers] = useState(
        assessment.map((row, index) => ({
            questionIndex: index,
            question: row.ques,
            answer: null,
            answerIndex: null
        }))
    );

    const contentRef = useRef([]);

    const navigate = useNavigate();

    const handleAnswerChange = (questionIndex, answerValue, ansKeyword) => {
        setAssessmentAnswers(
            assessmentAnswers.map((ans) => ans.questionIndex === questionIndex ? 
            {
                ...ans,
                answer: ansKeyword,
                answerIndex: answerValue
            } : ans)
        );
    };

    const handleSubmitAssesment = async () => {
        // Check if all questions are answered
        const unansweredQuestions = assessmentAnswers.filter(item => item.answerIndex === null);

        if (unansweredQuestions.length > 0) {
            toast.warn('Please answer all the questions before submitting the assessment.', {
                position: "top-right",
                autoClose: 3000,
            });

            setAssessmentAnswers(
                assessment.map((row, index) => ({
                    questionIndex: index,
                    question: row.ques,
                    answer: null,
                    answerIndex: null
                }))
            );
            return;
        }

        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/mwellness/assessments/calculate-score`, {
            "assessmentName": "Perceived Stress Assessment",
            "assessmentAnswers": assessmentAnswers
        })
        .then((result) => {
            console.log("result ====>", result.data);

            setAssessmentResult(result.data?.data);
            setResultModalOpen(true);
    
            toast.success('Assessment submitted successfully.', {
                position: "top-right",
                autoClose: 3000,
            });
        })
        .catch((err) => {
            alert(err);
        });

        console.log("Answers: ", assessmentAnswers);
        setAssessmentAnswers(
            assessment.map((row, index) => ({
                questionIndex: index,
                question: row.ques,
                answer: null,
                answerIndex: null
            }))
        );

        window.scrollTo(0, 0);
    }

    const toggleAccordion = (index) => {
        if (openIndex.includes(index)) {
            setOpenIndex(openIndex.filter((i) => i !== index)); // Close the accordion
        } else {
            setOpenIndex([...openIndex, index]); // Open the accordion
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Helmet>
                <title>Perceived Stress Assessment - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.OuterContainer}>
                <div id={styles.Questionaire}>
                    <p id={styles.QuestionaireHeading}>Perceived Stress Assessment - Start Now</p>

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
                                    selectedAnswer={assessmentAnswers.find((a) => index === a.questionIndex) ? assessmentAnswers.find((a) => index === a.questionIndex)?.answerIndex : null}
                                />
                            ))
                        }
                    </div>

                    <button 
                        className={styles.PrimaryBtn} 
                        id={styles.AllProgramsBtn} 
                        onClick={handleSubmitAssesment}
                    >
                        Submit Assessment
                        <MdArrowOutward id={styles.AllProgramsBtnIcon} />
                    </button>

                    <ToastContainer />

                    {/* ------------------------- RESULT MODAL --------------------------- */}
                    {
                        assessmentResult && resultModalOpen && 
                        <div id={styles.ResultModalContainer}>
                            <div className={styles.OverlayContent}>
                                <button 
                                    className={styles.CloseButton} 
                                    onClick={() => {
                                        setAssessmentResult(null);
                                        setResultModalOpen(false);
                                    }} 
                                    title="Close Modal"
                                >
                                    <X size={24} />
                                </button>

                                <AssessmentResult 
                                    result={assessmentResult}
                                    setResultModalOpen={setResultModalOpen}
                                />
                            </div>
                        </div>
                    }
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
                                        onClick={() => navigate(`/${item.redirectUrl}`)}
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

export default PerceivedStressAssessment
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
        ques: "Question-1",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-2",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-3",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-4",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-5",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-6",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-7",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-8",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-9",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    },
    {
        ques: "Question-10",
        ans: {
            0: "I do not feel sad",
            1: "I feel sad",
            2: "I am sad all the time and I can't snap out of it",
            3: "I am so sad and unhappy that I can't stand it"
        }
    }
]

const DepressionAssessment = () => {
    const [resultModalOpen, setResultModalOpen] = useState(false);

    const [openIndex, setOpenIndex] = useState(assessment.map((_, index) => index)); // All accordions open initially

    const [answers, setAnswers] = useState({});
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

    const handleSubmitAssesment = () => {
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

        setResultModalOpen(true);

        toast.success('Assessment submitted successfully.', {
            position: "top-right",
            autoClose: 3000,
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
                <title>Depression Assessments - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.OuterContainer}>
                <div id={styles.Questionaire}>
                    <p id={styles.QuestionaireHeading}>Depression Assessment - Start Now</p>

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
                        resultModalOpen && 
                        <div id={styles.ResultModalContainer}>
                            <div className={styles.OverlayContent}>
                                <button 
                                    className={styles.CloseButton} 
                                    onClick={() => setResultModalOpen(false)} 
                                    title="Close Modal"
                                >
                                    <X size={24} />
                                </button>

                                <AssessmentResult 
                                    score={10}
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
                                        onClick={() => navigate(`${item.redirectUrl}`)}
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

export default DepressionAssessment
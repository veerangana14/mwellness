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
    const [openIndex, setOpenIndex] = useState(null);
    const [answers, setAnswers] = useState({});
    const [assessmentAnswers, setAssessmentAnswers] = useState([]);

    const contentRef = useRef([]);

    const navigate = useNavigate();

    // const handleAnswerChange = (questionIndex, answerValue) => {
    //     setAnswers((prev) => ({
    //         ...prev,
    //         [questionIndex]: answerValue,
    //     }));
    // };

    const handleAnswerChange = (questionIndex, answerValue) => {
       
        // setAssessmentAnswers(prev => (
        //     [
        //         ...prev,
        //         {
        //             answerIndex: answerValue,
        //             question: assessment[questionIndex].ques,
        //             answer: assessment[questionIndex].ans[answerValue]
        //         }
        //     ]
        // ))

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
                                    // selectedAnswer={answers[index] || null}
                                    // selectedAnswer={assessmentAnswers[index]?.answerIndex || null}
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
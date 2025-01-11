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
        ques: "Question-1",
        ans: {
            0: "I do not feel sad. ",
            1: "I feel sad. ",
            2: "I am sad all the time and I can't snap out of it. ",
            3: "I am so sad and unhappy that I can't stand it. "
        }
    },
    {
        ques: "Question-2",
        ans: {
            0: "I am not particularly discouraged about the future. ",
            1: "I feel discouraged about the future. ",
            2: "I feel I have nothing to look forward to. ",
            3: "I feel the future is hopeless and that things cannot improve. "
        }
    },
    {
        ques: "Question-3",
        ans: {
            0: "I do not feel like a failure",
            1: "I feel I have failed more than the average person",
            2: "As I look back on my life, all I can see is a lot of failures. ",
            3: "I feel I am a complete failure as a person. "
        }
    },
    {
        ques: "Question-4",
        ans: {
            0: "I get as much satisfaction out of things as I used to.",
            1: "I don't enjoy things the way I used to.",
            2: "I don't get real satisfaction out of anything anymore.",
            3: "I am dissatisfied or bored with everything."
        }
    },
    {
        ques: "Question-5",
        ans: {
            0: "I don't feel particularly guilty",
            1: "I feel guilty a good part of the time.",
            2: "I feel quite guilty most of the time.",
            3: "I feel guilty all of the time. "
        }
    },
    {
        ques: "Question-6",
        ans: {
            0: "I don't feel I am being punished.",
            1: "I feel I may be punished.",
            2: "I expect to be punished.",
            3: "I feel I am being punished. "
        }
    },
    {
        ques: "Question-7",
        ans: {
            0: "I don't feel disappointed in myself.",
            1: "I am disappointed in myself.",
            2: "I am disgusted with myself.",
            3: "I hate myself. "
        }
    },
    {
        ques: "Question-8",
        ans: {
            0: "I don't feel I am any worse than anybody else.",
            1: "I am critical of myself for my weaknesses or mistakes.",
            2: "I blame myself all the time for my faults.",
            3: "I blame myself for everything bad that happens."
        }
    },
    {
        ques: "Question-9",
        ans: {
            0: "I don't have any thoughts of killing myself.",
            1: "I have thoughts of killing myself, but I would not carry them out.",
            2: "I would like to kill myself.",
            3: "I would kill myself if I had the chance." 
        }
    },
    {
        ques: "Question-10",
        ans: {
            0: "I don't cry any more than usual.",
            1: "I cry more now than I used to.",
            2: "I cry all the time now.",
            3: "I used to be able to cry, but now I can&apos;t cry even though I want to."
        }
    },
    {
        ques: "Question-11",
        ans: {
            0: "I am no more irritated by things than I ever was.",
            1: "I am slightly more irritated now than usual.",
            2: "I am quite annoyed or irritated a good deal of the time.",
            3: "I feel irritated all the time. "
        }
    },
    {
        ques: "Question-12",
        ans: {
            0: "I have not lost interest in other people.",
            1: "I am less interested in other people than I used to be.",
            2: "I have lost most of my interest in other people.",
            3: "I have lost all of my interest in other people."
        }
    },
    {
        ques: "Question-13",
        ans: {
            0: "I make decisions about as well as I ever could.",
            1: "I put off making decisions more than I used to.",
            2: "I have greater difficulty in making decisions more than I used to.",
            3: "I can't make decisions at all anymore."
        }
    },
    {
        ques: "Question-14",
        ans: {
            0: "I don't feel that I look any worse than I used to.",
            1: "I am worried that I am looking old or unattractive.",
            2: "I feel there are permanent changes in my appearance that make me look unattractive",
            3: "I believe that I look ugly. "
        }
    },
    {
        ques: "Question-15",
        ans: {
            0: "I can work about as well as before.",
            1: "It takes an extra effort to get started at doing something.",
            2: "I have to push myself very hard to do anything.",
            3: "I can't do any work at all."
        }
    },
    {
        ques: "Question-16",
        ans: {
            0: "I can sleep as well as usual.",
            1: "I don't sleep as well as I used to.",
            2: "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.",
            3: "I wake up several hours earlier than I used to and cannot get back to sleep." 
        }
    },
    {
        ques: "Question-17",
        ans: {
            0: "I don't get more tired than usual.",
            1: "I get tired more easily than I used to.",
            2: "I get tired from doing almost anything.",
            3: "I am too tired to do anything. "
        }
    },
    {
        ques: "Question-18",
        ans: {
            0: "My appetite is no worse than usual.",
            1: "My appetite is not as good as it used to be.",
            2: "My appetite is much worse now.",
            3: "I have no appetite at all anymore. "
        }
    },
    {
        ques: "Question-19",
        ans: {
            0: "I haven't lost much weight, if any, lately.",
            1: "I have lost more than five pounds.",
            2: "I have lost more than ten pounds.",
            3: "I have lost more than fifteen pounds." 
        }
    },
    {
        ques: "Question-20",
        ans: {
            0: "I am no more worried about my health than usual.",
            1: "I am worried about physical problems like aches, pains, upset stomach, or constipation.",
            2: " I am very worried about physical problems and it's hard to think of much else.",
            3: "I am so worried about my physical problems that I cannot think of anything else. "
        }
    },
    {
        ques: "Question-21",
        ans: {
            0: "I have not noticed any recent change in my interest in sex.",
            1: "I am less interested in sex than I used to be.",
            2: "I have almost no interest in sex.",
            3: "I have lost interest in sex completely." 
        }
    },
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

    const [assessmentResult, setAssessmentResult] = useState(null);

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

    const handleSubmitAssesment = async() => {
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
            "assessmentName": "Depression Assessment",
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
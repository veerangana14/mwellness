import React, { useEffect, useState } from 'react'

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
import CustomTable from '../../Components/CustomTable/CustomTable'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const AnxietyAssessment = () => {
    const [assessmentResult, setAssessmentResult] = useState(null);
    const navigate = useNavigate();

    const [resultModalOpen, setResultModalOpen] = useState(false);

    const columns = ["Not at all", "Mildly, but it didn’t bother me much", "Moderately – it wasn’t pleasant at times", "Severely – it bothered me a lot"];

    const rows = ["Numbness or tingling", "Feeling hot", "Wobbliness in legs", "Unable to relax", "Fear of worst happening", "Dizzy or lightheaded", "Heart pounding / racing", "Unsteady", "Terrified or afraid", "Nervous", "Feeling of choking", "Hands trembling", "Shaky / unsteady", "Fear of losing control", "Difficulty in breathing", "Fear of dying", "Scared", "Indigestion", "Faint / lightheaded", "Face flushed", "Hot / cold sweats"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedValues, setSelectedValues] = useState(
        rows.map((row, index) => ({
            questionIndex: index,
            question: row,
            answer: null,
            answerIndex: null
        }))
    );

    const handleSubmitAssesment = async () => {
        const unansweredQuestions = selectedValues.filter(item => item.answer === null);

        if (unansweredQuestions.length > 0) {
            toast.warn('Please answer all the questions before submitting the assessment.', {
                position: "top-right",
                autoClose: 3000,
            });
            setSelectedValues([]);
            return;
        }

        await axios.post(`${process.env.REACT_APP_API_BASE_URL}/mwellness/assessments/calculate-score`, {
            "assessmentName": "Anxiety Assessment",
            "assessmentAnswers": selectedValues
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

        console.log("Submitted Results:", selectedValues);


        setSelectedValues(rows.map((row, index) => ({
            questionIndex: index,
            question: row,
            answer: null,
            answerIndex: null
        })));

        window.scrollTo(0, 0);
    }

    return (
        <>
            <Helmet>
                <title>Anxiety Assessment - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.OuterContainer}>
                <div id={styles.SecondQuestionaire}>
                    <p id={styles.QuestionaireHeading}>Beck Anxiety Inventory (BAI)</p>

                    <div id={styles.FaqAccordion}>
                        <div style={{ padding: "20px" }}>
                            <CustomTable selectedValues={selectedValues} setSelectedValues={setSelectedValues} columns={columns} rows={rows} onSelectionChange={(results) => setSelectedValues(results)}/>
                        </div>
                    </div>

                    <button className={styles.PrimaryBtn} id={styles.AllProgramsBtn} onClick={handleSubmitAssesment}>
                        Submit Assessment
                        <MdArrowOutward id={styles.AllProgramsBtnIcon} />
                    </button>

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
                                        onClick={`/${item.redirectUrl}`}
                                    />
                                ))
                            }
                        </div>

                        <button className={styles.PrimaryBtn} id={styles.AllProgramsBtn} onClick={() => navigate("/programs")}>
                            All Services
                            <MdArrowOutward id={styles.AllProgramsBtnIcon} />
                        </button>

                        <ToastContainer />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AnxietyAssessment
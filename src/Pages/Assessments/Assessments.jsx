import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import '../../Assets/root.css'
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon4 from '../../Assets/images/grid-icon-4.svg'
import GridIcon6 from '../../Assets/images/grid-icon-6.svg'
import ProcessCard from './ProcessCard'
import { Helmet } from 'react-helmet'
import styles from './Assessments.module.css'
import ConsultationForm2 from '../../Components/ConsultationForm/ConsultationForm2'
import Grid from '../../Components/Grid/Grid'
import { useNavigate } from 'react-router-dom'

const processSteps = [
    { 
        stepNumber: "01", 
        title: "Be Relaxed", 
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem" 
    },
    { 
        stepNumber: "02", 
        title: "Be Honest", 
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem" 
    },
    { 
        stepNumber: "03", 
        title: "Answer Questions", 
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem" 
    },
    { 
        stepNumber: "04", 
        title: "Get Right Expert", 
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem" 
    }
];

const assessments = [
    {
        img: GridIcon1,
        title: 'Depression Assessment',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
        linkText: 'Start',
        redirectUrl: "/depression-assessment"
    },
    {
        img: GridIcon4,
        title: 'Anxiety Assessment',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
        linkText: 'Start',
        redirectUrl: "/anxiety-assessment"
    },
    {
        img: GridIcon6,
        title: 'Stress Assessment',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
        linkText: 'Start',
        redirectUrl: "/perceived-stress-assessment"
    },
];

const Assessments = () => {
    const navigate = useNavigate();

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Helmet>
            <title>Assessments - MWellness</title>
        </Helmet>

        <Navbar />

        <div id={styles.OuterContainer}>
            <div id='page-header'>
                <div id="page-header-content">
                    <p className='header-title'>All Programs</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; All Programs</p>
                </div>
            </div>


            {/* ---------------- ASSESSMENTS PROCESS SECTION -------------------- */}
            <div id={styles.AssessmentProcessSection}>
                <p>Assessment Process</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis</p>

                <div id={styles.ProcessGrid}>
                    {processSteps.map((step, index) => (
                        <ProcessCard
                            key={index}
                            stepNumber={step.stepNumber}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>


            {/* ---------------- ASSESSMENTS PROGRAMS SECTION -------------------- */}
            <div id={styles.ProgramsSection}>
                <div id={styles.GridContainer}>
                    <p>Mental Health Assessments Programs</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div id={styles.GridSection}>
                        {
                            assessments.map((item, index) => (
                                <Grid 
                                    index={index+1}
                                    gridImg={item.img}
                                    title={item.title}
                                    description={item.description}
                                    linkText={"Start"}
                                    onClick={() => navigate(`${item.redirectUrl}`)}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>


            {/* ---------------- ASSESSMENTS CONSULTATION FORM SECTION -------------------- */}
            <ConsultationForm2 />

        </div>

        <Footer />
    </>
  )
}

export default Assessments
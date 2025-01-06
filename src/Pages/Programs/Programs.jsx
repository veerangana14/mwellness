import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import GridIcon1 from '../../Assets/images/grid-icon-1.svg'
import GridIcon2 from '../../Assets/images/grid-icon-2.svg'
import GridIcon3 from '../../Assets/images/grid-icon-3.svg'
import GridIcon4 from '../../Assets/images/grid-icon-4.svg'
import GridIcon5 from '../../Assets/images/grid-icon-5.svg'
import GridIcon6 from '../../Assets/images/grid-icon-6.svg'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from './Programs.module.css'
import '../../Assets/root.css'
import Grid from '../../Components/Grid/Grid'
import { MdArrowOutward } from 'react-icons/md'
import ProcessCard from '../Assessments/ProcessCard'
import ConsultationForm2 from '../../Components/ConsultationForm/ConsultationForm2'
import ChildrenTherapyImg from '../../Assets/images/children_therapy_img.jpg'
import { useNavigate } from 'react-router-dom'
import { FaHandHoldingHeart } from "react-icons/fa"
import { FaHeadset } from "react-icons/fa"
import { FaShieldAlt } from "react-icons/fa"
import { FaHeadSideVirus } from "react-icons/fa"
import PointerCards from '../../Components/PointerCards/PointerCards'
import SwitchTab from '../../Components/SwitchTab/SwitchTab'
import Pricing from '../../Components/Pricing/Pricing'

const GridItems = [
    {
        img: GridIcon1,
        title: "Depression Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "service-details"
    },
    {
        img: GridIcon2,
        title: "Couples Counseling",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "service-details"
    },
    {
        img: GridIcon3,
        title: "Relationships",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "service-details"
    },
    {
        img: GridIcon4,
        title: "Anxiety Disorder",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "service-details"
    },
    {
        img: GridIcon5,
        title: "Children Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "service-details"
    },
    {
        img: GridIcon6,
        title: "Individual Therapy",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.",
        redirectUrl: "service-details"
    }
];

const processSteps = [
    {
        stepNumber: "01",
        title: "Request on the site",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    },
    {
        stepNumber: "02",
        title: "Timing",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    },
    {
        stepNumber: "03",
        title: "Conducting a session",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    },
    {
        stepNumber: "04",
        title: "Satisfied review",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
    }
];

const childrenTherapyPointers = [
    {
        icon: <FaHandHoldingHeart />,
        head: "Reliability",
        description: "Similique sunt in culpa qui officia deserunt mollitia animi"
    },
    {
        icon: <FaHeadset />,
        head: "Support",
        description: "Similique sunt in culpa qui officia deserunt mollitia animi"
    },
    {
        icon: <FaHeadSideVirus />,
        head: "Reliability",
        description: "Similique sunt in culpa qui officia deserunt mollitia animi"
    },
    {
        icon: <FaShieldAlt />,
        head: "Confidentiality",
        description: "Similique sunt in culpa qui officia deserunt mollitia animi"
    },
];

const monthlyPricingPlans = [
    {
        pricingPlan: "Light Session",
        pricing: "150",
        savingPrice: "0",
        benefits: ["6 Session Therapy", "Duration 30 Minutes", "Group Meeting", "Personal Meeting", "Support 24 Hours"], popularPlan: false
    },
    {
        pricingPlan: "Standard Session",
        pricing: "250",
        savingPrice: "0",
        benefits: ["10 Session Therapy", "Duration 30 Minutes", "Group Meeting", "Personal Meeting", "Support 24 Hours"], popularPlan: true
    },
    {
        pricingPlan: "Individual Session",
        pricing: "400",
        savingPrice: "0",
        benefits: ["1 Year Therapy", "Duration 30 Minutes", "Group Meeting", "Personal Meeting", "Support 24 Hours"], popularPlan: false
    }
]

const annualPricingPlans = [
    {
        pricingPlan: "Light Session",
        pricing: "1,440",
        savingPrice: "360",
        benefits: ["6 Session Therapy", "Duration 30 Minutes", "Group Meeting", "Personal Meeting", "Support 24 Hours"], popularPlan: false,
        monthly: true
    },
    {
        pricingPlan: "Standard Session",
        pricing: "2,400",
        savingPrice: "600",
        benefits: ["10 Session Therapy", "Duration 30 Minutes", "Group Meeting", "Personal Meeting", "Support 24 Hours"], popularPlan: true,
        monthly: true
    },
    {
        pricingPlan: "Individual Session",
        pricing: "3,840",
        savingPrice: "960",
        benefits: ["1 Year Therapy", "Duration 30 Minutes", "Group Meeting", "Personal Meeting", "Support 24 Hours"], popularPlan: false,
        monthly: true
    }
]


const Programs = () => {
    const [activeTab, setActiveTab] = useState("Monthly");

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        console.log(`Active tab: ${tab}`);
    };

    return (
        <>
            <Helmet>
                <title>Anxiety Assessment - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.OuterContainer}>
                <div id='page-header'>
                    <div id="page-header-content">
                        <p className='header-title'>All Programs</p>

                        <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; All Programs</p>
                    </div>
                </div>


                <div id={styles.AboutThirdSection}>
                    <div id={styles.AboutInnerContainer3}>
                        <p>Mental Health Therapy Programs</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        <div id={styles.GridSection}>
                            {
                                GridItems.map((item, index) => (
                                    <Grid
                                        index={index + 1}
                                        gridImg={item.img}
                                        title={item.title}
                                        description={item.description}
                                        linkText={"More Info"}
                                        onClick={() => navigate(`/${item.redirectUrl}`)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* ------------------------- CHILDREN THERAPY -------------------------------- */}
                <div id={styles.ChildrenTherapyContainer}>
                    <div id={styles.ChildrenTherapySection}>
                        <div id={styles.ChildrenTherapyContent}>
                            <p>Children Therapy</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.</p>

                            <div id={styles.ChildrenTherapyPointersGrid}>
                                {
                                    childrenTherapyPointers.map((pointer, index) => (
                                        <PointerCards
                                            icon={pointer.icon}
                                            head={pointer.head}
                                            description={pointer.description}
                                        />
                                    ))
                                }
                            </div>

                            <div id={styles.StartedBtn}>
                                <button id={styles.GreenBtn}>
                                    Get A Consultation
                                    <MdArrowOutward id={styles.OutwardArrowIcon} />
                                </button>
                            </div>
                        </div>

                        <div id={styles.ChildrenTherapyImgContainer}>
                            <img src={ChildrenTherapyImg} alt="chiildren-therapy-img" />
                        </div>
                    </div>
                </div>

                <div id={styles.AssessmentProcessSection}>
                    <p>Counseling Process</p>
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

                {/* ------------------------- PRICING -------------------------------- */}
                <div id={styles.PricingContainer}>
                    <p>Pricing Plans</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                    <div id={styles.SwitchTabBox}>
                        <SwitchTab 
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            onTabChange={handleTabChange} 
                        />
                    </div>

                    {
                        activeTab === "Monthly" ? (
                            <div id={styles.PricingPlanContainer}>
                               { monthlyPricingPlans.map((plan, planIndex) => (
                                    <Pricing 
                                        pricingPlan={plan.pricingPlan}
                                        pricing={plan.pricing}
                                        savingPrice={plan.savingPrice}
                                        benefits={plan.benefits}
                                        popularPlan={plan.popularPlan}
                                        monthly={true}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div id={styles.PricingPlanContainer}>
                                {annualPricingPlans.map((plan, planIndex) => (
                                    <Pricing 
                                        pricingPlan={plan.pricingPlan}
                                        pricing={plan.pricing}
                                        savingPrice={plan.savingPrice}
                                        benefits={plan.benefits}
                                        popularPlan={plan.popularPlan}
                                        monthly={false}
                                    />
                                ))}
                            </div>
                        )
                    }
                </div>


                {/* ---------------- CONSULTATION FORM SECTION -------------------- */}
                <ConsultationForm2 />

            </div>

            <Footer />
        </>
    )
}

export default Programs
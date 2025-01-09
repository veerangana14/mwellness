import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import FAQImg from '../../Assets/images/faq-img.jpg'
import FAQImage from '../../Assets/images/faq-image.png'
import { Helmet } from 'react-helmet'
import styles from './FAQ.module.css'
import ContactInfo from '../../Components/Contact/ContactInfo'
import Accordion from '../../Components/Accordion/Accordion'
import '../../Assets/root.css'
import { useNavigate } from 'react-router-dom'


const AccordionItems = [
    {
        question: "What services does Asharika offer?",
        answer: "Asharika provides a wide range of mental health services, including one-on-one therapy, group sessions, self-assessment tools, and expressive arts therapies such as music, art, and dance therapy. Our platform connects you with qualified professionals in psychiatry, clinical psychology, counselling psychology, and more—all available online."
    },
    {
        question: "How do I book a consultation?",
        answer: "Booking a consultation is simple! Click on 'Get the App', register, choose your preferred therapy type, and select a time that works best for you. You can opt for individual or group sessions via text, call, or video. Our secure portal ensures a seamless booking and payment experience"
    },
    {
        question: " Are the consultations condential?",
        answer: "Absolutely. Your privacy and confidentiality are our top priorities. All sessions are conducted through secure channels, and your personal information is protected in compliance with industry standards and regulations."
    },
    {
        question: "How does expressive arts therapy work?",
        answer: "Expressive arts therapy uses creative forms of expression—like drawing, music, and movement—to help you explore and process emotions. Guided by trained expressive arts therapists, this approach can be an effective complement to traditional therapies, providing a holistic healing experience."
    },
    {
        question: "What can I expect from the self-assessment tools?",
        answer: "Our self-assessment tools are designed to help you understand your mental health better. These evidence-based forms cover areas like anxiety, stress, depression, and more. Results are private, insightful, and can be shared with your therapist for personalised care planning."
    },
    {
        question: " Is Asharika affordable?",
        answer: "Yes, we aim to make mental health care accessible and affordable for everyone. Our transparent pricing includes flat fees for consultations, subscription packages for ongoing support, and discounts for young adults (18–23). Explore the right plan for you during your registration process."
    }
]

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const contentRef = useRef([]); // Array of refs to measure content height
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Helmet>
                <title>FAQs - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.FaqOuterContainer}>

                <div id='page-header'>
                    <div id="page-header-content">
                        <p className='header-title'>Personal Questions</p>

                        <p className='header-sub-title'>
                            <span className='header-link' onClick={() => navigate("/")}>Home</span>  &nbsp; &gt; &nbsp; FAQ
                        </p>
                    </div>
                </div>

                <div id={styles.QuestionSection}>
                    <div id={styles.InnerContainer2}>
                        <div id={styles.QuestionsLeftSection}>
                            <div id={styles.QuestionImgContainer}>
                                <img src={FAQImg} alt="question-img" />
                            </div>
                        </div>
                        <div id={styles.QuestionsRightSection}>
                            <p>The most popular questions to discuss mental health</p>

                            <div id={styles.FaqAccordion}>
                                {
                                    AccordionItems.map((item, index) => (
                                        <Accordion
                                            openIndex={openIndex}
                                            contentRef={contentRef}
                                            index={index}
                                            question={item.question}
                                            answer={item.answer}
                                            handleClick={toggleAccordion}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <ContactInfo />
            </div>

            <Footer />
        </>
    )
}

export default FAQ
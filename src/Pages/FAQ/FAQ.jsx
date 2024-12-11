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


const AccordionItems = [
    {
        question: "What is mental health?",
        answer: "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act."
    },
    {
        question: "How can I support a friend with mental health issues?",
        answer: "Listening and offering support, encouraging them to seek professional help, and staying connected can make a big difference."
    },
    {
        question: "Can you prevent mental health problems ?",
        answer: "Listening and offering support, encouraging them to seek professional help, and staying connected can make a big difference."
    },
    {
        question: "What are the 7 components of mental health?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const contentRef = useRef([]); // Array of refs to measure content height

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

                        <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; FAQ</p>
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
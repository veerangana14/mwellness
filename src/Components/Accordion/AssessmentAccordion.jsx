import React from 'react'
import styles from './AssessmentAccordion.module.css'

const AssessmentAccordion = ({ openIndex, contentRef, index, question, answerObj, handleClick, handleAnswerChange, selectedAnswer }) => {
    return (
        <div
            className={`${styles.AccordionItem} ${openIndex === index ? `${styles.Open}` : ''}`}
        >
            <div
                className={`${styles.AccordionHeader} ${openIndex === index ? `${styles.Active}` : ''}`}
                onClick={() => handleClick(index)}
            >
                <p className={styles.AccordionQuestion}>{question}</p>
                <span className={styles.AccordionIcon}>{openIndex === index ? '−' : '+'}</span>
            </div>
            <div
                className={styles.AccordionContent}
                ref={(el) => (contentRef.current[index] = el)}
                style={{
                    maxHeight: openIndex === index ? `${contentRef.current[index]?.scrollHeight}px` : '0',
                    transition: 'max-height 0.5s ease-in-out, padding 0.3s ease',
                    textAlign: "left"
                }}
            >
                {Object.entries(answerObj).map(([key, value]) => (
                    <div className={styles.AnswerRadioBtn} key={key}>
                        <label key={key} htmlFor={key}>
                            <input
                                type="radio"
                                name={`radio-group-${index}`}
                                id={key}
                                value={value}
                                checked={selectedAnswer === key}
                                onChange={() => handleAnswerChange(index, key)}
                            />
                            {key}: {value}
                        </label>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AssessmentAccordion
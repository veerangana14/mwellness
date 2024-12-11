import React from 'react'
import styles from './Accordion.module.css'

const Accordion = ({ openIndex, contentRef, index, question, answer, handleClick }) => {
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
                }}
            >
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default Accordion
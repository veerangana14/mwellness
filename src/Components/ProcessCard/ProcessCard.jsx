import React from 'react';
import styles from './ProcessCard.module.css';

const ProcessCard = ({ stepNumber, title, description }) => {
    return (
        <div className={styles.ProcessCard}>
            <p>{stepNumber}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProcessCard;

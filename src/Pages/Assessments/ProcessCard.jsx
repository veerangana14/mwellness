import React from 'react';
import './Assessments.css';

const ProcessCard = ({ stepNumber, title, description }) => {
    return (
        <div className="process-card">
            <p>{stepNumber}</p>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProcessCard;

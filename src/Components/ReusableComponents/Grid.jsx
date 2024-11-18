import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import '../../Assets/root.css';

const GridCard = ({ image, title, description, linkText, onClick }) => {
    return (
        <div className="grid-card">
            <img src={image} alt={`${title}-icon`} />
            <p className="grid-card-title">{title}</p>
            <p className="grid-card-description">{description}</p>
            <div className="grid-link" onClick={onClick}>
                <p>{linkText}</p>
                <BsArrowUpRightCircleFill className="grid-link-icon" />
            </div>
        </div>
    );
};

export default GridCard;

import React from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import styles from './Grid.module.css'

const Grid = ({ index, gridImg, title, description, linkText, onClick }) => {
    return (
        <>
            <div className={styles.GridCard}>
                <img src={gridImg} alt={`grid-icon-${index}`} 
                    className={(title === "Doctors" || title === "Subject Experts" || title === "Patients") ? styles.CommunityGridImg : ''}
                />
                <p>{title}</p>
                <p>{description}</p>
                <div className={styles.GridLink} onClick={onClick}>
                    <p>{linkText}</p>
                    <BsArrowUpRightCircleFill className={styles.GridLinkIcon} />
                </div>
            </div>
        </>
    );
};

export default Grid;
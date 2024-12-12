import React from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import styles from './Grid.module.css'

const Grid = ({ index, gridImg, svgPath, title, description, linkText, onClick }) => {
    return (
        <>
            <div className={styles.GridCard}>
                {
                    gridImg && 
                    <img src={gridImg} alt={`grid-icon-${index}`} 
                        className={(title === "Doctors" || title === "Subject Experts" || title === "Patients") ? styles.CommunityGridImg : styles.GridIconImg}
                    />
                }
                {
                    linkText === undefined && 
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles.ImpactGoalsIcon}
                    >
                        <path d={svgPath} />
                    </svg>
                }
                <p>{title}</p>
                <p>{description}</p>
                {
                    linkText && 
                    <div className={styles.GridLink} onClick={onClick}>
                        <p>{linkText}</p>
                        <BsArrowUpRightCircleFill className={styles.GridLinkIcon} />
                    </div>
                }
            </div>
        </>
    );
};

export default Grid;
import React from 'react'
import styles from './ArticleGrid.module.css'
import { BsArrowUpRightCircleFill } from "react-icons/bs"

const ArticleGrid = ({ index, articleImg, title, description, date, views, comments, linkText }) => {
    return (
        <div className={styles.ArticleCard}>
            <div className={styles.ArticleCardImgContainer}>
                <img src={articleImg} alt={`article-img-${index}`} />
            </div>

            <div className={styles.ArticleCardContentContainer}>
                <p className={styles.ArticleCardDate}>{date} | {views} | {comments}</p>

                <p className={styles.ArticleCardTitle}>{title}</p>

                <p className={styles.ArticleCardDesc}>{description}</p>

                <div className={styles.GridLink}>
                    <p>{linkText}</p>
                    <BsArrowUpRightCircleFill className={styles.GridLinkIcon} />
                </div>
            </div>
        </div>
    )
}

export default ArticleGrid
import React from 'react'
import styles from './VideoCard.module.css'

const VideoCard = ({ title, date, time, duration, description, postedBy, embedURL }) => {
    return (
        <div className={styles.SeminarVideoCard}>
            <div className={styles.SeminarVideo}>
                <iframe
                    style={{ borderRadius: "25px" }} src={embedURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>

            <div className={styles.SeminarVideoInfo}>
                <p>{title}</p>
                <p>{postedBy && `Posted By: ${postedBy} | `} {date && `Date: ${date} | `} {time && `Time: ${time}`} {duration && `Duration: ${duration}`}</p>
                <p>{description}</p>
            </div>
        </div>

    )
}

export default VideoCard
import React from 'react'
import styles from './Comment.module.css'
import { FaReply } from "react-icons/fa"

const Comment = ({ profileImg, profileName, postedDaysAgo }) => {
    return (
        <div id={styles.CommentBox}>
            <div className={styles.CommentTop}>
                <div className={styles.CommentLeftSection}>
                    <div className={styles.ProfileImg}>
                        <img src={profileImg} alt="profile-img" />
                    </div>
                    <div className={styles.ProfileInfo}>
                        <p className={styles.ProfileName}>{profileName}</p>
                        <p className={styles.postedTime}>{postedDaysAgo}</p>
                    </div>
                </div>
                <div className={styles.CommentRightSection}>
                    <div className={styles.ReplyIconContainer}>
                        <FaReply className={styles.ReplyIcon} />
                    </div>
                    <p>Reply</p>
                </div>
            </div>
            <p className={styles.CommentDesc}>
                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Nam eget dui. Etiam rhoncus.
            </p>
        </div>
    )
}

export default Comment
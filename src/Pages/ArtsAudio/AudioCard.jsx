import React from 'react';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';
import styles from './ArtsAudio.module.css';

const AudioCard = ({ audioTitle, tags, uploadedBy, duration, audioImage, onPlay, onDownload }) => {
    return (
        <div className={styles.AudioCard}>
            <div className={styles.AudioInfoLeftSection}>
                <div className={styles.PlayIcon} onClick={onPlay}>
                    <FaPlay className={styles.PlayIconBtn} />
                </div>
                <div className={styles.AudioImg}>
                    <img src={audioImage} alt="audio-sample-img" />
                </div>
                <div className={styles.AudioNameInfo}>
                    <p>{audioTitle}</p>
                    <p><span className={styles.BoldTags}>Tags: &nbsp;</span> {tags.join(' | ')}</p>
                </div>
            </div>

            <div className={styles.AudioInfoRightSection}>
                <p>Uploaded By: {uploadedBy} | {duration} seconds</p>
                <button onClick={onDownload}>Download</button>
            </div>
        </div>
    );
};

// AudioCard.propTypes = {
//     audioTitle: PropTypes.string.isRequired,
//     tags: PropTypes.arrayOf(PropTypes.string).isRequired,
//     uploadedBy: PropTypes.string.isRequired,
//     duration: PropTypes.number.isRequired,
//     audioImage: PropTypes.string.isRequired,
//     onPlay: PropTypes.func.isRequired,
//     onDownload: PropTypes.func.isRequired,
// };

export default AudioCard;

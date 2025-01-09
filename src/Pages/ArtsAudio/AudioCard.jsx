import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FaPause, FaPlay } from 'react-icons/fa';
import styles from './ArtsAudio.module.css';
import ReactAudioPlayer from 'react-audio-player';

// const AudioCard = ({ audioTitle, tags, uploadedBy, duration, audioImage, onPlay, onDownload }) => {
const AudioCard = ({ 
    audioId, 
    audioTitle, 
    tags, 
    uploadedBy, 
    duration, 
    audioImage, 
    isPlaying, 
    onPlay, 
    onPause, 
    audioFile 
}) => {
    const audioPlayerRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioPlayerRef.current.audioEl.current.pause();
            onPause();
        } else {
            audioPlayerRef.current.audioEl.current.play();
            onPlay();
        }
    };

    const handleAudioEnd = () => {
        onPause(); // Reset to show the play button when the audio ends
    };

    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = audioFile;
        link.download = audioTitle; // Use the audio title as the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up after triggering the download
    };

    return (
        <div className={styles.AudioCard}>
            <div className={styles.AudioInfoLeftSection}>
                {/* <div className={styles.PlayIcon} onClick={onPlay}> */}
                <div className={styles.PlayIcon} onClick={handlePlayPause}>
                    {/* <FaPlay className={styles.PlayIconBtn} /> */}
                    {isPlaying ? (
                        <FaPause className={styles.PlayIconBtn} />
                    ) : (
                        <FaPlay className={styles.PlayIconBtn} />
                    )}
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
                {/* <button onClick={onDownload}>Download</button> */}
                <button onClick={handleDownload}>Download</button>
            </div>

            {/* Hidden ReactAudioPlayer */}
            <ReactAudioPlayer
                ref={audioPlayerRef}
                src={audioFile}
                autoPlay={false}
                controls={false}
                onEnded={handleAudioEnd} // Triggered when audio playback completes
            />
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

import React from 'react';
import PropTypes from 'prop-types';
import { FaPlay } from 'react-icons/fa';

const AudioCard = ({ 
    audioTitle, 
    tags, 
    uploadedBy, 
    duration, 
    audioImage, 
    onPlay, 
    onDownload 
}) => {
    return (
        <div className='audio-card'>
            <div className='audio-info-left-section'>
                <div className='play-icon' onClick={onPlay}>
                    <FaPlay className='play-icon-button' />
                </div>
                <div className='audio-img'>
                    <img src={audioImage} alt="audio-sample-img" />
                </div>
                <div className='audio-name-info'>
                    <p>{audioTitle}</p>
                    <p><span>Tags:</span> {tags.join(' | ')}</p>
                </div>
            </div>

            <div className='audio-info-right-section'>
                <div className='audio-name-right-info'>
                    <p>{audioTitle}</p>
                    <p><span>Tags:</span> {tags.join(' | ')}</p>
                </div>
                <p>Uploaded By: {uploadedBy} | {duration} seconds</p>
                <button onClick={onDownload}>Download</button>
            </div>
        </div>
    );
};

AudioCard.propTypes = {
    audioTitle: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    uploadedBy: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    audioImage: PropTypes.string.isRequired,
    onPlay: PropTypes.func.isRequired,
    onDownload: PropTypes.func.isRequired,
};

export default AudioCard;

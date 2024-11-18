import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const TeamMemberCard = ({ 
    imageSrc, 
    speciality, 
    name, 
    socialLinks 
}) => {
    return (
        <div className="team-grid-card">
            <div className='team-img'>
                <img src={imageSrc} alt={`team-img-${name}`} />
            </div>

            <p className='doc-speciality'>{speciality}</p>
            <p className='doc-name'>{name}</p>

            <div className='team-social-container'>
                {socialLinks.facebook && (
                    <div className='team-icon-container'>
                        {/* <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"> */}
                            <FaFacebookF className='team-social-media-icon' />
                        {/* </a> */}
                    </div>
                )}
                {socialLinks.instagram && (
                    <div className='team-icon-container'>
                        {/* <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"> */}
                            <FaInstagram className='team-social-media-icon' />
                        {/* </a> */}
                    </div>
                )}
                {socialLinks.twitter && (
                    <div className='team-icon-container'>
                        {/* <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"> */}
                            <FaTwitter className='team-social-media-icon' />
                        {/* </a> */}
                    </div>
                )}
                {socialLinks.whatsapp && (
                    <div className='team-icon-container'>
                        {/* <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"> */}
                            <FaWhatsapp className='team-social-media-icon' />
                        {/* </a> */}
                    </div>
                )}
            </div>
        </div>
    );
};

TeamMemberCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    socialLinks: PropTypes.shape({
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        twitter: PropTypes.string,
        whatsapp: PropTypes.string,
    }).isRequired,
};

export default TeamMemberCard;

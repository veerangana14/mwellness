import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import styles from './Team.module.css'

const TeamMemberCard = ({ key, imageSrc, speciality, name, socialLinks, desc }) => {
    return (
        <div className={styles.TeamGridCard}>
            <div className={styles.TeamImg}>
                <img src={imageSrc} alt={`team-img-${name}`} />
            </div>

            <div id={styles.TeamTextContent}>     
                <p className={styles.DocSpeciality}>{speciality}</p>
                <p className={styles.DocName}>{name}</p>

                <p className={styles.DocDesc}>{desc}</p>

                <div className={styles.TeamSocialMediaContainer}>
                    {socialLinks?.facebook && (
                        <div className={styles.TeamSocialMIconContainer}>
                            <FaFacebookF className={styles.TeamSocialMediaIcon} />
                        </div>
                    )}
                    {socialLinks?.instagram && (
                        <div className={styles.TeamSocialMIconContainer}>
                            <FaInstagram className={styles.TeamSocialMediaIcon} />
                        </div>
                    )}
                    {socialLinks?.twitter && (
                        <div className={styles.TeamSocialMIconContainer}>
                            <FaTwitter className={styles.TeamSocialMediaIcon} />
                        </div>
                    )}
                    {socialLinks?.whatsapp && (
                        <div className={styles.TeamSocialMIconContainer}>
                            <FaWhatsapp className={styles.TeamSocialMediaIcon} />
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

// TeamMemberCard.propTypes = {
//     imageSrc: PropTypes.string.isRequired,
//     speciality: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     socialLinks: PropTypes.shape({
//         facebook: PropTypes.string,
//         instagram: PropTypes.string,
//         twitter: PropTypes.string,
//         whatsapp: PropTypes.string,
//     }).isRequired,
// };

export default TeamMemberCard;

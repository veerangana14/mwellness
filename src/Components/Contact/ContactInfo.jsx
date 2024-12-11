import React from 'react'
import styles from './ContactInfo.module.css'
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { FaClock } from "react-icons/fa6"

const ContactInfo = () => {
    return (
        <div id={styles.ContactInnerContainer}>
            <p>Contact Info</p>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>

            <div id={styles.ContactInfoGrid}>
                <div className={styles.ContactInfoCard}>
                    <div className={styles.ContactInfoIcon}>
                        <FaPhoneAlt className={styles.ContactIcons} />
                    </div>

                    <p className={styles.ContactCardCategory}>Phone</p>
                    <p className={styles.ContactCardInfoLines}>+880-1680-6361-89</p>
                    <p className={styles.ContactCardInfoLines}>+1-234-56-78-123</p>
                </div>

                <div className={styles.ContactInfoCard}>
                    <div className={styles.ContactInfoIcon}>
                        <MdEmail className={styles.ContactIcons} />
                    </div>

                    <p className={styles.ContactCardCategory}>Email</p>
                    <p className={styles.ContactCardInfoLines}>info@talkingminds.com</p>
                    <p className={styles.ContactCardInfoLines}>contact@talkingminds.com</p>
                </div>

                <div className={styles.ContactInfoCard}>
                    <div className={styles.ContactInfoIcon}>
                        <FaLocationDot className={styles.ContactIcons} />
                    </div>

                    <p className={styles.ContactCardCategory}>Address</p>
                    <p className={styles.ContactCardInfoLines}>49, Caradon Hill,</p>
                    <p className={styles.ContactCardInfoLines}>ULBSTER</p>
                </div>

                <div className={styles.ContactInfoCard}>
                    <div className={styles.ContactInfoIcon}>
                        <FaClock className={styles.ContactIcons} />
                    </div>

                    <p className={styles.ContactCardCategory}>Working Hours</p>
                    <p className={styles.ContactCardInfoLines}>Mon to Fri 8 am - 6 pm</p>
                    <p className={styles.ContactCardInfoLines}>Sat to Sun 9 am - 2 pm</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
import React from 'react'
import styles from './ConsultationForm2.module.css'
import AssessmentFormImg from '../../Assets/images/assessment-form-img.jpg'
import { MdArrowOutward } from 'react-icons/md'

const ConsultationForm2 = () => {
    return (
        <div id={styles.AssessmentsFormSection}>
            <div id={styles.FormImgContainer}>
                <img src={AssessmentFormImg} alt="form-side-img" />
            </div>

            <div id={styles.FormContainer}>
                <p>Take Care of your Mental Health</p>

                <div id={styles.AssessmentConsultationForm}>
                    <div className={styles.AssessmentFormInput}>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" name='fullName' id='fullName' placeholder='Your Name' />
                    </div>
                    <div className={styles.AssessmentFormInput}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name='phone' id='phone' placeholder='Mobile Phone Number' />
                    </div>
                    <div className={styles.AssessmentFormInput}>
                        <label htmlFor="therapy">Section</label>
                        <select name='therapy' id='therapy'>
                            <option value="">Select Therapy</option>
                            <option value="Therapy 1">Therapy 1</option>
                            <option value="Therapy 2">Therapy 2</option>
                            <option value="Therapy 3">Therapy 3</option>
                        </select>
                    </div>
                    <div className={styles.AssessmentFormInput}>
                        <label htmlFor="consultation-date">Consultation Date</label>
                        <input
                            name='consultation-date'
                            id='consultation-date'
                            placeholder='dd/mm/yyyy'
                            onFocus={(e) => e.target.type = 'date'}
                            onBlur={(e) => (e.target.type = e.target.value ? 'date' : 'text')}
                        />
                    </div>
                </div>

                <div id={styles.StartedBtn}>
                    <button id={styles.GreenBtn}>
                        Get A Consultation
                        <MdArrowOutward id={styles.OutwardArrowIcon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConsultationForm2
import React from 'react'
import styles from './ConsultationForm.module.css'

const ConsultationForm = () => {
    return (
        <div id={styles.ConsultationForm}>
            <div className={styles.FormInput}>
                <label htmlFor="fullName">Name</label>
                <input type="text" name='fullName' id='fullName' placeholder='Your Name' />
            </div>
            <div className={styles.FormInput}>
                <label htmlFor="phone">Phone</label>
                <input type="text" name='phone' id='phone' placeholder='Mobile Phone Number' />
            </div>
            <div className={styles.FormInput}>
                <label htmlFor="therapy">Section</label>
                <select name='therapy' id='therapy' placeholder="Select Therapy">
                    <option value="">Select Therapy</option>
                    <option value="Therapy 1">Therapy 1</option>
                    <option value="Therapy 2">Therapy 2</option>
                    <option value="Therapy 3">Therapy 3</option>
                </select>
            </div>
            <div className={styles.FormInput}>
                <label htmlFor="consultation-date">Consultation Date</label>
                <input type="date" name='consultation-date' id='consultation-date' placeholder='dd/mm/yyyy' />
            </div>
        </div>
    )
}

export default ConsultationForm
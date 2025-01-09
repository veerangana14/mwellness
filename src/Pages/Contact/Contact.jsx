import React, { useEffect } from 'react'
import '../../Assets/root.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet'
import ContactInfo from '../../Components/Contact/ContactInfo'
import styles from './Contact.module.css'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Helmet>
            <title>Contact - MWellness</title>
        </Helmet>

        <Navbar />
        <div id={styles.ContactOuterContainer}>

            <div id={styles.ContactHeader}>
                <div id={styles.ContactHeaderContent}>
                    <p className='header-title'>Contact Information</p>

                    <p className='header-sub-title'>
                        <span className='header-link' onClick={() => navigate("/")}>Home</span>  &nbsp; &gt; &nbsp; Contact
                    </p>
                </div>
            </div>

            <ContactInfo />
        </div>

        <div id={styles.ContactMap}>
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York,%20NY%2010025&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='contact-map'></iframe>
        </div>
        <Footer />
    </>
  )
}

export default Contact
import React, { useEffect } from 'react'
import '../../Assets/root.css';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const Contact = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Navbar />
        <div id='contact-outer-container'>

            <div id='contact-header'>
                <div id="contact-header-content">
                    <p className='header-title'>Contact Information</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; Contact</p>
                </div>
            </div>

            <div id="contact-inner-container">
                <p>Contact Info</p>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>

                <div id='contact-info-grid'>
                    <div className='contact-info-card'>
                        <div className='contact-info-icon'>
                            <FaPhoneAlt className='contact-icons'/>
                        </div>

                        <p className='contact-card-category'>Phone</p>
                        <p className='contact-card-info-lines'>+880-1680-6361-89</p>
                        <p className='contact-card-info-lines'>+1-234-56-78-123</p>
                    </div>

                    <div className='contact-info-card'>
                        <div className='contact-info-icon'>
                            <MdEmail className='contact-icons'/>
                        </div>

                        <p className='contact-card-category'>Email</p>
                        <p className='contact-card-info-lines'>info@talkingminds.com</p>
                        <p className='contact-card-info-lines'>contact@talkingminds.com</p>
                    </div>

                    <div className='contact-info-card'>
                        <div className='contact-info-icon'>
                            <FaLocationDot className='contact-icons'/>
                        </div>

                        <p className='contact-card-category'>Address</p>
                        <p className='contact-card-info-lines'>49, Caradon Hill,</p>
                        <p className='contact-card-info-lines'>ULBSTER</p>
                    </div>

                    <div className='contact-info-card'>
                        <div className='contact-info-icon'>
                            <FaClock className='contact-icons'/>
                        </div>

                        <p className='contact-card-category'>Working Hours</p>
                        <p className='contact-card-info-lines'>Mon to Fri 8 am - 6 pm</p>
                        <p className='contact-card-info-lines'>Sat to Sun 9 am - 2 pm</p>
                    </div>
                </div>
            </div>
        </div>

        <div id='contact-map'>
            <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York,%20NY%2010025&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='contact-map'></iframe>
        </div>
        <Footer />
    </>
  )
}

export default Contact
import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import PageHeaderImg from '../../Assets/images/seminar-header-img.png'
import './Seminar.css';
import '../../Assets/root.css';

const Seminar = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Navbar />

        <div id='outer-container'>
            <div id='page-header'>
                <div id="page-header-img">
                    <img src={PageHeaderImg} alt="page-header-img" />
                </div>
            </div>
            
            <div id='seminar-content-container'>
                <p>Educational Seminars On Mental Health</p>

                <div id='seminar-video-content'>
                    <div className='seminar-video-card'>
                        <div className='seminar-video'>
                            <iframe 
                            // width="100%" height="280px" 
                            style={{ borderRadius: "25px" }} src="https://www.youtube.com/embed/5MgBikgcWnY?si=wTsJBFg7-SoHFUGc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>

                        <div className='seminar-video-info'>
                            <p>Understand The Mental Health in Early Age</p>
                            <p>Date: 18th Oct 2024 | 10:30AM | UPCOMIMG</p>
                            <p>Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...</p>
                        </div>
                    </div>

                    <div className='seminar-video-card'>
                        <div className='seminar-video'>
                            <iframe 
                            // width="100%" height="280px" 
                            style={{ borderRadius: "25px" }} src="https://www.youtube.com/embed/w-HYZv6HzAs?si=G-0ZcODOPyNS_7Rn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>

                        <div className='seminar-video-info'>
                            <p>Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul</p>
                            <p>Date: 18th Oct 2024 | 10:30AM | COMPLETED</p>
                            <p>Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...</p>
                        </div>
                    </div>

                    <div className='seminar-video-card'>
                        <div className='seminar-video'>
                            <iframe 
                            // width="100%" height="280px" 
                            style={{ borderRadius: "25px" }} src="https://www.youtube.com/embed/lFcSrYw-ARY?si=yjATf1VJH3w5cZ6t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>

                        <div className='seminar-video-info'>
                            <p>Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul</p>
                            <p>Posted By: Dr. Chitanranjan | 3 minutes </p>
                            <p>Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <Footer />
    </>
  )
}

export default Seminar
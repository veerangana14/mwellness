import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './ArtsVideo.css';
import '../../Assets/root.css';

const ArtsVideo = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Navbar />

            <div id='outer-container'>
                <div id='page-header'>
                <div id="page-header-content">
                    <p className='header-title'>ARTS - Mental Health Videos</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; ARTS - Mental Health Videos</p>
                </div>
                </div>
                
                <div id='seminar-content-container'>
                    <p>Search Result</p>

                    <div id='seminar-video-content'>
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

export default ArtsVideo
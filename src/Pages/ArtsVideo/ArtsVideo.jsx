import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import '../../Assets/root.css'
import { Helmet } from 'react-helmet'
import styles from './ArtsVideo.module.css'
import VideoCard from '../../Components/VideoCard/VideoCard'

const VideoItems = [
    {
        title: "Understand The Mental Health in Early Age",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "10:30AM",
        duration: "",
        postedBy: "",
        embedURL: "https://www.youtube.com/embed/5MgBikgcWnY?si=wTsJBFg7-SoHFUGc"
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "10:30AM",
        duration: "",
        postedBy: "",
        embedURL: "https://www.youtube.com/embed/w-HYZv6HzAs?si=G-0ZcODOPyNS_7Rn"
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=yjATf1VJH3w5cZ6t"
    }
]

const ArtsVideo = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Helmet>
                <title>ARTS Video - MWellness</title>
            </Helmet>

            <Navbar />

            <div id='outer-container'>
                <div id='page-header'>
                    <div id={styles.PageHeaderContent}>
                        <p className='header-title'>ARTS - Mental Health Videos</p>
                        <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; ARTS - Mental Health Videos</p>
                    </div>
                </div>

                <div id={styles.SeminarContentContainer}>
                    <p>Educational Seminars On Mental Health</p>

                    <div id={styles.SeminarVideoContent}>
                        <div id={styles.VideoGridSection}>
                            {
                                VideoItems.map((item, index) => (
                                    <VideoCard
                                        title={item.title}
                                        date={item.date}
                                        time={item.time}
                                        duration={item.duration}
                                        description={item.description}
                                        postedBy={item.postedBy}
                                        embedURL={item.embedURL}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default ArtsVideo
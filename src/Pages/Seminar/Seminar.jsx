import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import PageHeaderImg from '../../Assets/images/seminar-header-img.png'
import '../../Assets/root.css'
import { Helmet } from 'react-helmet'
import styles from './Seminar.module.css'
import VideoCard from '../../Components/VideoCard/VideoCard'
import { GrSearch } from "react-icons/gr"
import { BsTrash3Fill } from "react-icons/bs"
import { GiPauseButton } from "react-icons/gi"
import { FaGear } from "react-icons/fa6"

const VideoItems = [
    {
        title: "Understand The Mental Health in Early Age",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "10:30AM",
        duration: "",
        postedBy: "",
        // embedURL: "https://www.youtube.com/embed/5MgBikgcWnY?si=wTsJBFg7-SoHFUGc"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "10:30AM",
        duration: "",
        postedBy: "",
        // embedURL: "https://www.youtube.com/embed/w-HYZv6HzAs?si=G-0ZcODOPyNS_7Rn"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        // embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=yjATf1VJH3w5cZ6t"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    }
]

const Seminar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Helmet>
                <title>Seminar - MWellness</title>
            </Helmet>

            <Navbar />

            <div id='outer-container'>
                <div id='page-header'>
                    <div id={styles.PageHeaderImg}>
                        <img src={PageHeaderImg} alt="page-header-img" />
                    </div>
                </div>


                <div id={styles.VideoPageContainer}>

                    <div id={styles.SidePanelContainer}>
                        <div id={styles.SearchContainer}>
                            <GrSearch className={styles.SearchIcon}/>
                            <input 
                                type="search" 
                                name="search" 
                                placeholder="Search a topic" 
                                value={searchTerm} 
                                onChange={(e) => setSearchTerm(e.target.value)} 
                            />
                        </div>

                        <div id={styles.ExtrasContainer}>
                            <div className={styles.Extras}>
                                <BsTrash3Fill className={styles.ExtrasIcon}/>
                                <p>Clear all watch history</p>
                            </div>
                            <div className={styles.Extras}>
                                <GiPauseButton className={styles.ExtrasIcon}/>
                                <p>Pause watch history</p>
                            </div>
                            <div className={styles.Extras}>
                                <FaGear className={styles.ExtrasIcon}/>
                                <p>Manage all history</p>
                            </div>
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
            </div>


            <Footer />
        </>
    )
}

export default Seminar
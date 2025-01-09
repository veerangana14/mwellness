import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import '../../Assets/root.css'
import { Helmet } from 'react-helmet'
import styles from './ArtsVideo.module.css'
import VideoCard from '../../Components/VideoCard/VideoCard'
import { useNavigate } from 'react-router-dom'
import { GrSearch } from "react-icons/gr"
import { BsTrash3Fill } from "react-icons/bs"
import { GiPauseButton } from "react-icons/gi"
import { FaGear } from "react-icons/fa6"

const VideoItems = [
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        // embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=lFCS2BUxBhNJoegr"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        // embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=lFCS2BUxBhNJoegr"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        // embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=lFCS2BUxBhNJoegr"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        // embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=lFCS2BUxBhNJoegr"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        // embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=lFCS2BUxBhNJoegr"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    },
    {
        title: "Relaxing music for Stress Relief, Anxity, Depressive States: Heal Body, Mind and Soul",
        description: "Relaxing music has the power to calm the mind, soothe anxiety, and uplift spirits, making it a powerful tool for healing ...",
        date: "18th Oct 2024",
        time: "",
        duration: "3 minutes",
        postedBy: "Dr. Chitanranjan",
        // embedURL: "https://www.youtube.com/embed/lFcSrYw-ARY?si=lFCS2BUxBhNJoegr"
        embedURL: require('../../Assets/video-files/sample-video.mp4')
    }
]

const ArtsVideo = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

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
                        <p className='header-sub-title'>
                            <span className='header-link' onClick={() => navigate("/")}>Home</span>  &nbsp; &gt; &nbsp; ARTS - Mental Health Videos
                        </p>
                    </div>
                </div>

                {/* <div id={styles.SeminarContentContainer}>
                    <p>Search Result</p>

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
                </div> */}


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
                        <p>Search Result</p>

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

export default ArtsVideo
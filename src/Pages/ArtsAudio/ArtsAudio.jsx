import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import '../../Assets/root.css'
import AudioSampleImg from '../../Assets/images/audio-sample-img.jpg'
import AudioCard from './AudioCard'
import { Helmet } from 'react-helmet'
import styles from './ArtsAudio.module.css'
import ReactAudioPlayer from 'react-audio-player';

const audioData = [
    {
        id: 1,
        audioTitle: "Calm Sea Waves Sounds - Make You Relax",
        tags: ["Love", "Feeling", "Relax", "Calm", "Stress"],
        uploadedBy: "Gajenn",
        duration: 0.08,
        audioImage: AudioSampleImg,
        audioFile: require("../../Assets/audio-files/sample-audio.mp3")
    },
    {
        id: 2,
        audioTitle: "Rain Sounds for Sleeping and Relaxation",
        tags: ["Rain", "Sleep", "Peaceful", "Relaxing"],
        uploadedBy: "Alex",
        duration: 1.2,
        audioImage: AudioSampleImg,
        audioFile: require("../../Assets/audio-files/sample-audio.mp3")
    },
    {
        id: 3,
        audioTitle: "Meditation Music for Deep Focus",
        tags: ["Meditation", "Focus", "Peace", "Relax"],
        uploadedBy: "Sophia",
        duration: 2.5,
        audioImage: AudioSampleImg,
        audioFile: require("../../Assets/audio-files/sample-audio.mp3")
    },
    {
        id: 4,
        audioTitle: "Bird Sounds in the Morning",
        tags: ["Nature", "Birds", "Morning", "Calm"],
        uploadedBy: "Liam",
        duration: 1.8,
        audioImage: AudioSampleImg,
        audioFile: require("../../Assets/audio-files/sample-audio.mp3")
    },
    {
        id: 5,
        audioTitle: "Forest Ambience with Wind Sounds",
        tags: ["Nature", "Forest", "Wind", "Relaxing"],
        uploadedBy: "Emma",
        duration: 3.4,
        audioImage: AudioSampleImg,
        audioFile: require("../../Assets/audio-files/sample-audio.mp3")
    },
];


const ArtsAudio = () => {
    const [currentAudioId, setCurrentAudioId] = useState(null);

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    // const handleDownload = (id) => {

    //     console.log(`Downloading audio with ID: ${id}`);
    // };

    const handlePlay = (id) => {
        setCurrentAudioId(id);
    };

    const handlePause = () => {
        setCurrentAudioId(null);
    };

    return (
        <>
            <Helmet>
                <title>ARTS Audio - MWellness</title>
            </Helmet>
            
            <Navbar />

            <div id='outer-container'>
                <div id={styles.AudioContentContainer}>
                    {audioData.map((audio) => (
                        // <AudioCard
                        //     key={audio.id}
                        //     audioTitle={audio.audioTitle}
                        //     tags={audio.tags}
                        //     uploadedBy={audio.uploadedBy}
                        //     duration={audio.duration}
                        //     audioImage={audio.audioImage}
                        //     onPlay={() => handlePlay(audio.id)}
                        //     onDownload={() => handleDownload(audio.id)}
                        // />

                        <AudioCard
                            key={audio.id}
                            audioId={audio.id}
                            audioTitle={audio.audioTitle}
                            tags={audio.tags}
                            uploadedBy={audio.uploadedBy}
                            duration={audio.duration}
                            audioImage={audio.audioImage}
                            isPlaying={currentAudioId === audio.id}
                            onPlay={() => handlePlay(audio.id)}
                            onPause={handlePause}
                            audioFile={audio.audioFile}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ArtsAudio
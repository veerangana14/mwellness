import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './ArtsAudio.css';
import '../../Assets/root.css';
import AudioSampleImg from '../../Assets/images/audio-sample-img.jpg'
import { FaPlay } from "react-icons/fa";
import AudioCard from './AudioCard';

const audioData = [
    {
        id: 1,
        audioTitle: "Calm Sea Waves Sounds - Make You Relax",
        tags: ["Love", "Feeling", "Relax", "Calm", "Stress"],
        uploadedBy: "Gajenn",
        duration: 0.08,
        audioImage: AudioSampleImg,
    },
    {
        id: 2,
        audioTitle: "Rain Sounds for Sleeping and Relaxation",
        tags: ["Rain", "Sleep", "Peaceful", "Relaxing"],
        uploadedBy: "Alex",
        duration: 1.2,
        audioImage: AudioSampleImg,
    },
    {
        id: 3,
        audioTitle: "Meditation Music for Deep Focus",
        tags: ["Meditation", "Focus", "Peace", "Relax"],
        uploadedBy: "Sophia",
        duration: 2.5,
        audioImage: AudioSampleImg,
    },
    {
        id: 4,
        audioTitle: "Bird Sounds in the Morning",
        tags: ["Nature", "Birds", "Morning", "Calm"],
        uploadedBy: "Liam",
        duration: 1.8,
        audioImage: AudioSampleImg,
    },
    {
        id: 5,
        audioTitle: "Forest Ambience with Wind Sounds",
        tags: ["Nature", "Forest", "Wind", "Relaxing"],
        uploadedBy: "Emma",
        duration: 3.4,
        audioImage: AudioSampleImg,
    },
];


const ArtsAudio = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    const handlePlay = (id) => {
        console.log(`Playing audio with ID: ${id}`);
    };

    const handleDownload = (id) => {
        console.log(`Downloading audio with ID: ${id}`);
    };

    return (
        <>
            <Navbar />
                <div id='outer-container'>
                    <div id='audio-content-container'>
                        {audioData.map((audio) => (
                            <AudioCard
                                key={audio.id}
                                audioTitle={audio.audioTitle}
                                tags={audio.tags}
                                uploadedBy={audio.uploadedBy}
                                duration={audio.duration}
                                audioImage={audio.audioImage}
                                onPlay={() => handlePlay(audio.id)}
                                onDownload={() => handleDownload(audio.id)}
                            />
                        ))}
                    </div>
                </div>
            <Footer />
        </>
        // <>
        //     <Navbar />

        //     <div id='outer-container'>     
        //         <div id='audio-content-container'>
        //             <div className='audio-card'>
        //                 <div className='audio-info-left-section'>
        //                     <div className='play-icon'>
        //                         <FaPlay className='play-icon-button' />
        //                     </div>
        //                     <div className='audio-img'>
        //                         <img src={AudioSampleImg} alt="audio-sample-img" />
        //                     </div>
        //                     <div className='audio-name-info'>
        //                         <p>Calm Sea Waves Sounds - Make You Relax</p>
        //                         <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
        //                     </div>
        //                 </div>

        //                 <div className='audio-info-right-section'>
        //                     <div className='audio-name-right-info'>
        //                         <p>Calm Sea Waves Sounds - Make You Relax</p>
        //                         <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
        //                     </div>
        //                     <p>Uploaded By: Gajenn | 0.08 seconds </p>
        //                     <button>
        //                         Download
        //                     </button>
        //                 </div>
        //             </div>

        //             <div className='audio-card'>
        //                 <div className='audio-info-left-section'>
        //                     <div className='play-icon'>
        //                         <FaPlay />
        //                     </div>
        //                     <div className='audio-img'>
        //                         <img src={AudioSampleImg} alt="audio-sample-img" />
        //                     </div>
        //                     <div className='audio-name-info'>
        //                         <p>Calm Sea Waves Sounds - Make You Relax</p>
        //                         <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
        //                     </div>
        //                 </div>

        //                 <div className='audio-info-right-section'>
        //                     <p>Uploaded By: Gajenn | 0.08 seconds </p>
        //                     <button>
        //                         Download
        //                     </button>
        //                 </div>
        //             </div>

        //             <div className='audio-card'>
        //                 <div className='audio-info-left-section'>
        //                     <div className='play-icon'>
        //                         <FaPlay />
        //                     </div>
        //                     <div className='audio-img'>
        //                         <img src={AudioSampleImg} alt="audio-sample-img" />
        //                     </div>
        //                     <div className='audio-name-info'>
        //                         <p>Calm Sea Waves Sounds - Make You Relax</p>
        //                         <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
        //                     </div>
        //                 </div>

        //                 <div className='audio-info-right-section'>
        //                     <p>Uploaded By: Gajenn | 0.08 seconds </p>
        //                     <button>
        //                         Download
        //                     </button>
        //                 </div>
        //             </div>

        //             <div className='audio-card'>
        //                 <div className='audio-info-left-section'>
        //                     <div className='play-icon'>
        //                         <FaPlay />
        //                     </div>
        //                     <div className='audio-img'>
        //                         <img src={AudioSampleImg} alt="audio-sample-img" />
        //                     </div>
        //                     <div className='audio-name-info'>
        //                         <p>Calm Sea Waves Sounds - Make You Relax</p>
        //                         <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
        //                     </div>
        //                 </div>

        //                 <div className='audio-info-right-section'>
        //                     <p>Uploaded By: Gajenn | 0.08 seconds </p>
        //                     <button>
        //                         Download
        //                     </button>
        //                 </div>
        //             </div>

        //             <div className='audio-card'>
        //                 <div className='audio-info-left-section'>
        //                     <div className='play-icon'>
        //                         <FaPlay />
        //                     </div>
        //                     <div className='audio-img'>
        //                         <img src={AudioSampleImg} alt="audio-sample-img" />
        //                     </div>
        //                     <div className='audio-name-info'>
        //                         <p>Calm Sea Waves Sounds - Make You Relax</p>
        //                         <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
        //                     </div>
        //                 </div>

        //                 <div className='audio-info-right-section'>
        //                     <p>Uploaded By: Gajenn | 0.08 seconds </p>
        //                     <button>
        //                         Download
        //                     </button>
        //                 </div>
        //             </div>
                    
        //             <div className='audio-card'>
        //                 <div className='audio-info-left-section'>
        //                     <div className='play-icon'>
        //                         <FaPlay />
        //                     </div>
        //                     <div className='audio-img'>
        //                         <img src={AudioSampleImg} alt="audio-sample-img" />
        //                     </div>
        //                     <div className='audio-name-info'>
        //                         <p>Calm Sea Waves Sounds - Make You Relax</p>
        //                         <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
        //                     </div>
        //                 </div>

        //                 <div className='audio-info-right-section'>
        //                     <p>Uploaded By: Gajenn | 0.08 seconds </p>
        //                     <button>
        //                         Download
        //                     </button>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>

        //     <Footer />
        // </>
    )
}

export default ArtsAudio
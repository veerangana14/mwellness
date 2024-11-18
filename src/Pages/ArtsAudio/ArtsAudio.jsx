import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './ArtsAudio.css';
import '../../Assets/root.css';
import AudioSampleImg from '../../Assets/images/audio-sample-img.jpg'
import { FaPlay } from "react-icons/fa";

const ArtsAudio = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    return (
        <>
            <Navbar />

            <div id='outer-container'>     
                <div id='audio-content-container'>
                    <div className='audio-card'>
                        <div className='audio-info-left-section'>
                            <div className='play-icon'>
                                <FaPlay />
                            </div>
                            <div className='audio-img'>
                                <img src={AudioSampleImg} alt="audio-sample-img" />
                            </div>
                            <div className='audio-name-info'>
                                <p>Calm Sea Waves Sounds - Make You Relax</p>
                                <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
                            </div>
                        </div>

                        <div className='audio-info-right-section'>
                            <p>Uploaded By: Gajenn | 0.08 seconds </p>
                            <button>
                                Download
                            </button>
                        </div>
                    </div>

                    <div className='audio-card'>
                        <div className='audio-info-left-section'>
                            <div className='play-icon'>
                                <FaPlay />
                            </div>
                            <div className='audio-img'>
                                <img src={AudioSampleImg} alt="audio-sample-img" />
                            </div>
                            <div className='audio-name-info'>
                                <p>Calm Sea Waves Sounds - Make You Relax</p>
                                <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
                            </div>
                        </div>

                        <div className='audio-info-right-section'>
                            <p>Uploaded By: Gajenn | 0.08 seconds </p>
                            <button>
                                Download
                            </button>
                        </div>
                    </div>

                    <div className='audio-card'>
                        <div className='audio-info-left-section'>
                            <div className='play-icon'>
                                <FaPlay />
                            </div>
                            <div className='audio-img'>
                                <img src={AudioSampleImg} alt="audio-sample-img" />
                            </div>
                            <div className='audio-name-info'>
                                <p>Calm Sea Waves Sounds - Make You Relax</p>
                                <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
                            </div>
                        </div>

                        <div className='audio-info-right-section'>
                            <p>Uploaded By: Gajenn | 0.08 seconds </p>
                            <button>
                                Download
                            </button>
                        </div>
                    </div>

                    <div className='audio-card'>
                        <div className='audio-info-left-section'>
                            <div className='play-icon'>
                                <FaPlay />
                            </div>
                            <div className='audio-img'>
                                <img src={AudioSampleImg} alt="audio-sample-img" />
                            </div>
                            <div className='audio-name-info'>
                                <p>Calm Sea Waves Sounds - Make You Relax</p>
                                <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
                            </div>
                        </div>

                        <div className='audio-info-right-section'>
                            <p>Uploaded By: Gajenn | 0.08 seconds </p>
                            <button>
                                Download
                            </button>
                        </div>
                    </div>

                    <div className='audio-card'>
                        <div className='audio-info-left-section'>
                            <div className='play-icon'>
                                <FaPlay />
                            </div>
                            <div className='audio-img'>
                                <img src={AudioSampleImg} alt="audio-sample-img" />
                            </div>
                            <div className='audio-name-info'>
                                <p>Calm Sea Waves Sounds - Make You Relax</p>
                                <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
                            </div>
                        </div>

                        <div className='audio-info-right-section'>
                            <p>Uploaded By: Gajenn | 0.08 seconds </p>
                            <button>
                                Download
                            </button>
                        </div>
                    </div>
                    
                    <div className='audio-card'>
                        <div className='audio-info-left-section'>
                            <div className='play-icon'>
                                <FaPlay />
                            </div>
                            <div className='audio-img'>
                                <img src={AudioSampleImg} alt="audio-sample-img" />
                            </div>
                            <div className='audio-name-info'>
                                <p>Calm Sea Waves Sounds - Make You Relax</p>
                                <p><span>Tags:</span> Love | Feeling | Relax | Calm | Stress</p>
                            </div>
                        </div>

                        <div className='audio-info-right-section'>
                            <p>Uploaded By: Gajenn | 0.08 seconds </p>
                            <button>
                                Download
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default ArtsAudio
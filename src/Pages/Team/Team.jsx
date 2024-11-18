import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import TeamDoc1 from '../../Assets/images/team-doc-1.jpg';
import TeamDoc2 from '../../Assets/images/team-doc-2.jpg';
import TeamDoc3 from '../../Assets/images/team-doc-3.jpg';
import TeamDoc4 from '../../Assets/images/team-doc-4.jpg';
import TeamDoc5 from '../../Assets/images/team-doc-5.jpg';
import TeamDoc6 from '../../Assets/images/team-doc-6.jpg';
import './Team.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Team = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Navbar />

        <div id='team-outer-container'>

            <div id='page-header'>
                <div id="page-header-content">
                    <p className='header-title '>Team of Professionals</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; Team</p>
                </div>
            </div>


            <div id='team-inner-container'>
                <div id='team-header-container'>
                    <div id='team-header'>
                        <p>Meet Our Doctors</p>
                        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                    </div>

                    <div id='team-stats'>
                        <div className="stats-col">
                            <p className='stat-num'>12+</p>
                            <p className='stat-head'>Qualified Specialist</p>
                        </div>
                        <div className="stats-col">
                            <p className='stat-num'>99%</p>
                            <p className='stat-head'>Effectiveness of therapy</p>
                        </div>
                    </div>
                </div>

                <div id='team-grid-container'>
                    <div className="team-grid-card">
                        <div className='team-img'>
                            <img src={TeamDoc1} alt="team-img-1" />
                        </div>

                        <p className='doc-speciality'>Family psychologist, Psy. D</p>
                        <p className='doc-name'>Julian Rogers</p>

                        <div className='team-social-container'>
                            <div className='icon-container'>
                                <FaFacebookF className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaInstagram className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaTwitter className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaWhatsapp className='social-media-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="team-grid-card">
                        <div className='team-img'>
                            <img src={TeamDoc2} alt="team-img-2" />
                        </div>

                        <p className='doc-speciality'>Clinical psychologist, Psy. D</p>
                        <p className='doc-name'>Ruth Clark</p>

                        <div className='team-social-container'>
                            <div className='icon-container'>
                                <FaFacebookF className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaInstagram className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaTwitter className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaWhatsapp className='social-media-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="team-grid-card">
                        <div className='team-img'>
                            <img src={TeamDoc3} alt="team-img-3" />
                        </div>

                        <p className='doc-speciality'>Practicing Psychologist</p>
                        <p className='doc-name'>Joseph Powers</p>

                        <div className='team-social-container'>
                            <div className='icon-container'>
                                <FaFacebookF className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaInstagram className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaTwitter className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaWhatsapp className='social-media-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="team-grid-card">
                        <div className='team-img'>
                            <img src={TeamDoc4} alt="team-img-4" />
                        </div>

                        <p className='doc-speciality'>Practicing psychologist, Psy. D</p>
                        <p className='doc-name'>Robert Johnston</p>

                        <div className='team-social-container'>
                            <div className='icon-container'>
                                <FaFacebookF className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaInstagram className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaTwitter className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaWhatsapp className='social-media-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="team-grid-card">
                        <div className='team-img'>
                            <img src={TeamDoc5} alt="team-img-5" />
                        </div>

                        <p className='doc-speciality'>Clinical psychologist, Psy. D</p>
                        <p className='doc-name'>Carmella Floyd</p>

                        <div className='team-social-container'>
                            <div className='icon-container'>
                                <FaFacebookF className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaInstagram className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaTwitter className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaWhatsapp className='social-media-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="team-grid-card">
                        <div className='team-img'>
                            <img src={TeamDoc6} alt="team-img-6" />
                        </div>

                        <p className='doc-speciality'>Child Psychologist</p>
                        <p className='doc-name'>Merryl Morton</p>

                        <div className='team-social-container'>
                            <div className='icon-container'>
                                <FaFacebookF className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaInstagram className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaTwitter className='social-media-icon' />
                            </div>
                            <div className='icon-container'>
                                <FaWhatsapp className='social-media-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
    </>
  )
}

export default Team
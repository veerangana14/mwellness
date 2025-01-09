import React from 'react'
import { Play, Link2, ChevronLeft, Music, Wind } from 'lucide-react'
import styles from './DownloadPage.module.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Helmet } from 'react-helmet'

const DownloadPage = () => {
    return (
        <>
            <Helmet>
                <title>Download App - MWellness</title>
            </Helmet>

            <Navbar />

            <div id={styles.DownloadOuterContainer}>
                <div className={styles.Container}>
                    <div className={styles.Wrapper}>
                        <div className={styles.DownloadScreenGrid}>
                            {/* Left Side - Content */}
                            <div className={styles.Content}>
                                <h1 className={styles.DownloadHeading}>Download our podcasts app</h1>
                                <p className={styles.DownloadDescription}>
                                    Get access to curated meditation, relaxation, and mindfulness content. Download now to start your wellness journey.
                                </p>
                                <div className={styles.ButtonContainer}>
                                    <button className={styles.StoreButton}>
                                        <div className={styles.StoreIcon}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 512 512"
                                                // style={{enableBackground: "new 0 0 512 512"}} 
                                                width="32"
                                                height="32"
                                            >
                                                <g>

                                                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="261.6133" y1="8802.7627" x2="-72.4566" y2="8468.6934" gradientTransform="matrix(1 0 0 -1 0 8834)">
                                                        <stop offset="0" style={{ stopColor: "#00A0FF" }} />
                                                        <stop offset="0.0066" style={{ stopColor: "#00A2FF" }} />
                                                        <stop offset="0.2601" style={{ stopColor: "#00BEFF" }} />
                                                        <stop offset="0.5122" style={{ stopColor: "#00D2FF" }} />
                                                        <stop offset="0.7604" style={{ stopColor: "#00DFFF" }} />
                                                        <stop offset="1" style={{ stopColor: "#00E3FF" }} />
                                                    </linearGradient>
                                                    <path style={{ fill: "url(#SVGID_1_)" }} d="M35.395,7.913c-5.789,6.127-9.212,15.64-9.212,27.966v440.242   c0,12.336,3.424,21.839,9.212,27.966l1.473,1.435l246.615-246.613v-2.908v-2.91L36.868,6.468L35.395,7.913z" />

                                                    <linearGradient id="SVGID_00000127741872524441010550000008292814545950070690_" gradientUnits="userSpaceOnUse" x1="501.1742" y1="8577.9902" x2="19.5119" y2="8577.9902" gradientTransform="matrix(1 0 0 -1 0 8834)">
                                                        <stop offset="0" style={{ stopColor: "#FFE000" }} />
                                                        <stop offset="0.4087" style={{ stopColor: "#FFBD00" }} />
                                                        <stop offset="0.7754" style={{ stopColor: "#FFA600" }} />
                                                        <stop offset="1" style={{ stopColor: "#FF9C00" }} />
                                                    </linearGradient>
                                                    <path style={{ fill: "url(#SVGID_00000127741872524441010550000008292814545950070690_)" }} d="M365.683,341.149l-82.2-82.24v-2.908   v-2.91l82.219-82.219l1.853,1.057l97.396,55.341c27.821,15.805,27.821,41.667,0,57.482l-97.396,55.341L365.683,341.149z" />

                                                    <linearGradient id="SVGID_00000032631701217109851430000017522047380022634658_" gradientUnits="userSpaceOnUse" x1="321.8728" y1="8532.3125" x2="-131.1525" y2="8079.2876" gradientTransform="matrix(1 0 0 -1 0 8834)">
                                                        <stop offset="0" style={{ stopColor: "#FF3743" }} />
                                                        <stop offset="1" style={{ stopColor: "#E30864" }} />
                                                    </linearGradient>
                                                    <path style={{ fill: "url(#SVGID_00000032631701217109851430000017522047380022634658_)" }} d="M367.556,340.082l-84.073-84.081   L35.395,504.087c9.173,9.708,24.309,10.91,41.367,1.222L367.556,340.082" />

                                                    <linearGradient id="SVGID_00000068646739207452442920000008036861086483792307_" gradientUnits="userSpaceOnUse" x1="-27.0711" y1="8972.6309" x2="175.2237" y2="8770.3359" gradientTransform="matrix(1 0 0 -1 0 8834)">
                                                        <stop offset="0" style={{ stopColor: "#00A06F" }} />
                                                        <stop offset="0.0685" style={{ stopColor: "#00A86E" }} />
                                                        <stop offset="0.4762" style={{ stopColor: "#00CF6E" }} />
                                                        <stop offset="0.8009" style={{ stopColor: "#00E76D" }} />
                                                        <stop offset="1" style={{ stopColor: "#00EF6D" }} />
                                                    </linearGradient>
                                                    <path style={{ fill: "url(#SVGID_00000068646739207452442920000008036861086483792307_)" }} d="M367.556,171.918L76.762,6.691   C59.704-2.997,44.568-1.795,35.395,7.913l248.088,248.088L367.556,171.918z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className={styles.StoreText}>
                                            <div className={styles.TextSmall}>GET IT ON</div>
                                            <div className={styles.TextLarge}>Google Play</div>
                                        </div>
                                    </button>
                                    <button className={styles.StoreButton}>
                                        {/* <img src="/api/placeholder/24/24" alt="App Store" className={styles.StoreIcon} /> */}
                                        <div className={styles.StoreIcon}>
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                x="0px" 
                                                y="0px" 
                                                viewBox="0 0 32 24" 
                                                // style={{ enableBackground: "new 0 0 24 24" }}
                                                width="50" 
                                                height="50"
                                                fill='#4299e1'
                                            >
                                                <g>
                                                    <path d="M19.149,0.001H4.847C2.169,0.001,0,2.17,0,4.849v14.305c0,2.676,2.169,4.845,4.847,4.845h14.305   c2.676,0,4.847-2.169,4.847-4.847V4.849C23.997,2.17,21.828,0.001,19.149,0.001z M6.635,19.001c-0.3,0.525-0.969,0.702-1.494,0.402   c-0.525-0.3-0.702-0.969-0.402-1.494l0.78-1.35c0.882-0.273,1.598-0.063,2.166,0.621L6.635,19.001z M14.218,16.056H4.29   c-0.606,0-1.092-0.486-1.092-1.092c0-0.606,0.486-1.092,1.092-1.092h2.783l3.564-6.176L9.524,5.764   c-0.3-0.525-0.123-1.188,0.402-1.494c0.525-0.3,1.188-0.123,1.494,0.402l0.477,0.843l0.486-0.84c0.3-0.525,0.969-0.702,1.494-0.402   c0.525,0.3,0.702,0.969,0.402,1.493l-4.682,8.105h3.387C14.08,13.872,14.695,15.162,14.218,16.056z M19.567,16.062h-1.578   l1.065,1.847c0.3,0.525,0.123,1.188-0.402,1.494c-0.525,0.3-1.188,0.123-1.494-0.402c-1.793-3.111-3.141-5.438-4.034-6.989   c-0.915-1.578-0.261-3.162,0.384-3.699c0.717,1.23,1.788,3.087,3.218,5.565h2.841c0.606,0,1.092,0.486,1.092,1.092   C20.658,15.576,20.173,16.062,19.567,16.062z" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className={styles.StoreText}>
                                            <div className={styles.TextSmall}>DOWNLOAD ON</div>
                                            <div className={styles.TextLarge}>App Store</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Right Side - App Preview */}
                            <div className={styles.AppPreview}>
                                <div className={styles.PhoneFrame}>
                                    <div className={styles.StatusBar}>
                                        <span>9:41</span>
                                        <div className={styles.StatusIconsContainer}>
                                            <div className={styles.StatusIcons}></div>
                                            <div className={styles.StatusIcons}></div>
                                        </div>
                                    </div>
                                    <div className={styles.AppContent}>
                                        <div className={styles.AppHeader}>
                                            <ChevronLeft className={styles.AppBackIcon} />
                                            <span>Relaxation</span>
                                        </div>
                                        <div className={styles.AppCardContainer}>
                                            <div className={`${styles.AppCard} ${styles.CardMeditation}`}>
                                                <div className={styles.AppScreenText}>
                                                    MEDITATION
                                                </div>
                                                <h2 className={styles.CardTitle}>Soothing Sounds for Relaxation</h2>
                                                <p className={styles.CardSubtitle}>
                                                    Explore curated audio sessions to help ease anxiety and find calm
                                                </p>
                                                <div className={styles.AppScreenIconContainer}>
                                                    <button className={styles.CardButton}>
                                                        <Play className={styles.AppIcon} />
                                                    </button>
                                                    <button className={styles.CardButton}>
                                                        <Link2 className={styles.AppIcon} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={`${styles.AppCard} ${styles.CardBreathing}`}>
                                                <div className={styles.AppScreenText}>
                                                    BREATHING
                                                </div>
                                                <h2 className={styles.CardTitle}>Mindful Breathing Exercise</h2>
                                                <p className={styles.CardSubtitle}>
                                                    Learn simple breathing techniques to calm your mind and body
                                                </p>
                                                <div className={styles.AppScreenIconContainer}>
                                                    <button className={styles.CardButton}>
                                                        <Wind className={styles.AppIcon} />
                                                    </button>
                                                    <button className={styles.CardButton}>
                                                        <Music className={styles.AppIcon} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DownloadPage;

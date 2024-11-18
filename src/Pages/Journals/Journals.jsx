import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { MdArrowOutward } from 'react-icons/md'
import ArticleImg1 from '../../Assets/images/articles-img-1.jpg'
import ArticleImg2 from '../../Assets/images/articles-img-2.jpg'
import ArticleImg3 from '../../Assets/images/articles-img-3.jpg'
import './Journals.css';
import '../../Assets/root.css';

const Journals = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Navbar />

        <div id='outer-container'>
            {/* ---------------- LATEST JOURNALS SECTION -------------------- */}
            <div id='journal-section'>
                <div id='journal-container'>
                    <div id='articles-header'>
                        <p>Latest Journals</p>
                        <div>
                            <button className='primary-btn'>
                                Read Blogs
                                <MdArrowOutward />
                            </button>
                        </div>
                    </div>


                    <div id='articles-grid'>
                        <div className='article-card'>
                            <div className='article-card-img-container'>
                                <img src={ArticleImg1} alt="article-img-1" />
                            </div>

                            <div className='article-card-content-container'>
                                <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                <p className='article-card-title'>The pros and cons of group psychotherapy</p>

                                <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                <div className='grid-link'>
                                    <p>Read More</p>
                                    <BsArrowUpRightCircleFill className='grid-link-icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='article-card'>
                            <div className='article-card-img-container'>
                                <img src={ArticleImg2} alt="article-img-2" />
                            </div>

                            <div className='article-card-content-container'>
                                <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                <p className='article-card-title'>Top seven challenges in counselling children</p>

                                <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                <div className='grid-link'>
                                    <p>Read More</p>
                                    <BsArrowUpRightCircleFill className='grid-link-icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='article-card'>
                            <div className='article-card-img-container'>
                                <img src={ArticleImg3} alt="article-img-3" />
                            </div>

                            <div className='article-card-content-container'>
                                <p className='article-card-date'>26th July 2024 | 120 Views | No Comments</p>

                                <p className='article-card-title'>Action, types and tips for finding group therapy</p>

                                <p className='article-card-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!</p>

                                <div className='grid-link'>
                                    <p>Read More</p>
                                    <BsArrowUpRightCircleFill className='grid-link-icon'/>
                                </div>
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

export default Journals
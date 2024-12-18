import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'
import { MdArrowOutward } from 'react-icons/md'
import ArticleImg1 from '../../Assets/images/articles-img-1.jpg'
import ArticleImg2 from '../../Assets/images/articles-img-2.jpg'
import ArticleImg3 from '../../Assets/images/articles-img-3.jpg'
import '../../Assets/root.css';
import { Helmet } from 'react-helmet'
import styles from './Journals.module.css'
import ArticleGrid from '../../Components/Grid/ArticleGrid'
import { useNavigate } from 'react-router-dom'


const Articles = [
    {
        articleImg: ArticleImg1,
        title: "The pros and cons of group psychotherapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg2,
        title: "The pros and cons of group psychotherapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg3,
        title: "Action, types and tips for finding group therapy",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita ipsa similique est inventore itaque ut quae aliquid veritatis quasi molestiae nemo, praesentium voluptatibus nesciunt modi!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    }
]

const Journals = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

    const navigate = useNavigate();

  return (
    <>
        <Helmet>
            <title>Journals - MWellness</title>
        </Helmet>

        <Navbar />

        <div id={styles.OuterContainer}>
            <div id={styles.InnerContainer7}>
                <div id={styles.ArticlesHeader}>
                    <p>Latest Articles</p>
                    <div>
                        <button className={styles.PrimaryBtn} id={styles.ArticleBtn} onClick={() => navigate('/blog-grid')}>
                            Read Blogs
                            <MdArrowOutward id={styles.ArticleBtnArrowIcon}/>
                        </button>
                    </div>
                </div>


                <div id={styles.ArticledGrid}>
                    {
                        Articles.map((article, index) => (
                            <ArticleGrid
                                index={index}
                                articleImg={article.articleImg}
                                title={article.title}
                                description={article.description}
                                date={article.date}
                                views={`${article.views} Views`}
                                comments={article.comments === 0 ? "No Comments" : `${article.comments} Comments`}
                                linkText={"Read More"}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Journals
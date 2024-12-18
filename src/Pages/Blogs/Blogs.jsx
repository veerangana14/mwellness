import React, { useEffect, useState } from 'react'
import styles from './Blogs.module.css'
import '../../Assets/root.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet'
import BlogSideContent from './BlogSideContent'
import ArticleImg1 from '../../Assets/images/articles-img-1.jpg'
import ArticleImg2 from '../../Assets/images/articles-img-2.jpg'
import ArticleImg3 from '../../Assets/images/articles-img-3.jpg'
import ArticleGrid from '../../Components/Grid/ArticleGrid'
import Pagination from '../../Components/Pagination/Pagination'

const AllBlogs = [
    {
        articleImg: ArticleImg1,
        title: "A guide to maintaining a child's positive mental health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg2,
        title: "Effectiveness of psychological treatments for depressive",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg3,
        title: "Self determination theory in the workplace",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg3,
        title: "A guide to maintaining a child's positive mental health",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg3,
        title: "What is depression and what can I do about it?",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    },
    {
        articleImg: ArticleImg3,
        title: "Benefits of learning and practicing meditation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nihil accusantium facere numquam expedita!",
        date: "26th July 2024",
        views: "120",
        comments: "0"
    }
]

const Blogs = () => {

    const totalItems = 50;
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        console.log(`Current Page: ${page}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>All Blogs - MWellness</title>
            </Helmet>

            <Navbar />

            <div id='outer-container'>
                <div id='page-header'>
                    <div id="page-header-content">
                        <p className='header-title'>Blog Grid</p>

                        <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; Blog Grid</p>
                    </div>
                </div>

                <div id={styles.BlogContentContainer}>
                    <div id={styles.BlogGridSection}>
                        <div id={styles.BlogGridContainer}>
                            {
                                AllBlogs.map((article, index) => (
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

                        {/* ------------------------ PAGINATION ------------------------------ */}
                        <Pagination
                            totalItems={totalItems}
                            itemsPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                        />

                    </div>



                    {/* ------------------------ BLOG PAGE SIDE CONTENTS ------------------------------ */}
                    <div id={styles.BlogSideContainer}>
                        <BlogSideContent />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Blogs
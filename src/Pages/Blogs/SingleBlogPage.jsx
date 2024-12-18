import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import '../../Assets/root.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from './SingleBlogPage.module.css'
import BlogSideContent from './BlogSideContent'
import BlogBannerImg from '../../Assets/images/blog_details_image.jpg'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import Comment from '../../Components/Comment/Comment'
import ProfileImg1 from '../../Assets/images/profile-img-1.png'
import ProfileImg2 from '../../Assets/images/profile-img-2.png'
import ProfileImg3 from '../../Assets/images/profile-img-3.png'
import ArticleImg1 from '../../Assets/images/articles-img-1.jpg'
import ArticleImg2 from '../../Assets/images/articles-img-2.jpg'
import ArticleImg3 from '../../Assets/images/articles-img-3.jpg'
import ArticleGrid from '../../Components/Grid/ArticleGrid'
import { MdArrowOutward } from 'react-icons/md'


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

const SingleBlogPage = () => {
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
                        <p className='header-title'>Overcome Conflicts in Relationships</p>

                        <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; Blog Details</p>
                    </div>
                </div>

                <div id={styles.BlogContentContainer}>
                    <div id={styles.BlogDetailsContainer}>
                        <div id={styles.BlogDetailsBannerImg}>
                            <img src={BlogBannerImg} alt="blog-details-img" />
                        </div>

                        <div id={styles.BlogDeets}>
                            <p>26 July 2023 | 120 Views | 1 Comments</p>
                        </div>

                        <div id={styles.BlogDetailsContent}>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                            <span className={styles.BlogListBoldText}>1. Remember not to sweat the small stuff</span>
                            <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing.</p>

                            <span className={styles.BlogListBoldText}>2. Practice Acceptance</span>
                            <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>

                            <span className={styles.BlogListBoldText}>3. Exercise patience</span>
                            <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>

                            <span className={styles.BlogListBoldText}>4. Lower your expectations</span>
                            <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</p>

                            <span className={styles.BlogListBoldText}>5. Remember you both desire harmony</span>
                            <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
                        </div>


                        <div id={styles.TagsAndShare}>
                            <div id={styles.RelatedTagsContainer}>
                                <p>Related Tags:</p>
                                <div id={styles.TagsListContainer}>
                                    <p>Family Problem</p>
                                    <p>Therapy</p>
                                    <p>Depression</p>
                                </div>
                            </div>


                            <div id={styles.ShareContainer}>
                                <p>Share:</p>
                                <div id={styles.ShareIcons}>
                                    <div className={styles.IconContainer}>
                                        <FaFacebookF className={styles.SocialMediaIcon} />
                                    </div>
                                    <div className={styles.IconContainer}>
                                        <FaInstagram className={styles.SocialMediaIcon} />
                                    </div>
                                    <div className={styles.IconContainer}>
                                        <FaTwitter className={styles.SocialMediaIcon} />
                                    </div>
                                    <div className={styles.IconContainer}>
                                        <FaWhatsapp className={styles.SocialMediaIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id={styles.CommentsContainer}>
                            <p id={styles.CommentHeading}>Comments (3)</p>

                            <div id={styles.OuterComment}>
                                <Comment
                                    profileImg={ProfileImg1}
                                    profileName={"Kerry Banks"}
                                    postedDaysAgo={"6 days ago"}
                                />
                                <Comment
                                    profileImg={ProfileImg2}
                                    profileName={"Dr. Merry Rose"}
                                    postedDaysAgo={"6 days ago"}
                                />
                                <Comment
                                    profileImg={ProfileImg3}
                                    profileName={"John Underwood"}
                                    postedDaysAgo={"6 days ago"}
                                />
                            </div>
                        </div>



                        <div id={styles.CommentFormContainer}>
                            <p id={styles.CommentHeading}>Leave a Comment</p>

                            <div id={styles.CommentForm}>
                                <div className={styles.CommentInput}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your name" value={""} />
                                </div>
                                <div className={styles.CommentInput}>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" placeholder="Your email" value={""} />
                                </div>
                                <div className={styles.CommentInput}>
                                    <label htmlFor="comment">Comment</label>
                                    <textarea name="comment" id="comment" placeholder="Your message" rows={10} cols={80} value={""}/>
                                </div>
                            </div>

                            <button id={styles.CommentBtn}>
                                Post Comment
                                <MdArrowOutward id={styles.CommentArrowIcon}/>
                            </button>
                        </div>
                    </div>


                    {/* ------------------------ BLOG PAGE SIDE CONTENTS ------------------------------ */}
                    <div id={styles.BlogSideContainer}>
                        <BlogSideContent />
                    </div>

                </div>


                <div id={styles.InnerContainer7}>
                    <div id={styles.ArticlesHeader}>
                        <p>Recommended Articles</p>
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
        </div>
    )
}

export default SingleBlogPage
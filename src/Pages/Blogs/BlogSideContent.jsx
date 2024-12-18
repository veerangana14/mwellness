import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6"
import styles from './BlogSideContent.module.css'
import HeaderLeafImg from '../../Assets/images/subheader_leaf_img.svg'


let categories = [
    {
        type: "Relationship",
        qty: 12
    },
    {
        type: "Family Problem",
        qty: 23
    },
    {
        type: "Couple Problem",
        qty: 36
    },
    {
        type: "Parenting",
        qty: 16
    },
    {
        type: "Depression",
        qty: 17
    },
    {
        type: "Business Problems",
        qty: 21
    }
]

const BlogSideContent = () => {
  return (
    <div id={styles.BlogSideContentContainer}>
        {/* ---------------------------- SEARCH BAR -------------------------------- */}
        <div id={styles.SearchBar}>
            <input type="text" value="" placeholder="Search" />
            <div id={styles.SearchIconContainer}>
                <FaMagnifyingGlass id={styles.SearchIcon}/>
            </div>
        </div>


        {/* ---------------------------- CATEGORIES -------------------------------- */}
        <div id={styles.CategoriesContainer}>
            <div id={styles.BlogSideHeading}>
                <div id={styles.BlogSideIcon}>
                    <img src={HeaderLeafImg} alt="header-leaf-img" />
                </div>
                <p>Categories</p>
            </div>

            <div id={styles.CategoriesList}>
                {
                    categories.map((category, index) =>  (
                        <div id={styles.CategoryItem}>
                            <p>{category.type}</p>
                            <p>{category.qty}</p>
                        </div>
                    ))
                }
            </div>
        </div>



        {/* ---------------------------- POPULAR TAGS -------------------------------- */}
        <div id={styles.TagsContainer}>
            <div id={styles.BlogSideHeading}>
                <div id={styles.BlogSideIcon}>
                    <img src={HeaderLeafImg} alt="header-leaf-img" />
                </div>
                <p>Popular Tags</p>
            </div>

            <div id={styles.TagsListContainer}>
                <p>Family Problem</p>
                <p>Therapy</p>
                <p>Teenagers</p>
                <p>Depression</p>
                <p>Life Balance</p>
                <p>Work</p>
                <p>Couple Problem</p>
            </div>
        </div>

    </div>
  )
}

export default BlogSideContent
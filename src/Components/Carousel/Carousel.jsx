import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.css'

const patientReviews = [
    {
        name: "Kerry Banks",
        job: "Housewife",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "John Doe",
        job: "Entrepreneur",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Tim Burton",
        job: "Engineer",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Meghan Fox",
        job: "Student",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Justin",
        job: "Manager",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    },
    {
        name: "Kelly Johnson",
        job: "Teacher",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima praesentium nostrum! Consectetur explicabo aliquid ratione dignissimos, cupiditate voluptatum fuga nemo dolor tempore dolore pariatur. Minus quas illo impedit possimus. Consequuntur impedit assumenda tenetur nulla dolore aspernatur!"
    }
]

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);

    // Split reviews into groups of 2 for each slide
    const reviewsPerSlide = 2;
    const slides = [];
    for (let i = 0; i < patientReviews.length; i += reviewsPerSlide) {
        slides.push(patientReviews.slice(i, i + reviewsPerSlide));
    }

    const reviewsPerSlide2 = 1;
    const slides2 = [];
    for (let i = 0; i < patientReviews.length; i += reviewsPerSlide2) {
        slides2.push(patientReviews.slice(i, i + reviewsPerSlide2));
    }

    // Automatically cycle through slides every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide2((prevSlide) => (prevSlide + 1) % slides2.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides2.length]);

    return (
        <div id={styles.CarouselContainer}> 
            <div
                className={styles.Slide}
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className={styles.SlideContent}>
                        {slide.map((review, idx) => (
                            <div key={idx} className={styles.ReviewCard}>
                                <h4 className={styles.ReviewName}>{review.name}</h4>
                                <p className={styles.ReviewJob}>{review.job}</p>
                                <p className={styles.ReviewText}>{review.review}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>


            <div
                className={styles.Slide2}
                style={{
                    transform: `translateX(-${currentSlide2 * 100}%)`,
                }}
            >
                {slides2.map((slide, index) => (
                    <div key={index} className={styles.SlideContent2}>
                        {slide.map((review, idx) => (
                            <div key={idx} className={styles.ReviewCard}>
                                <h4 className={styles.ReviewName}>{review.name}</h4>
                                <p className={styles.ReviewJob}>{review.job}</p>
                                <p className={styles.ReviewText}>{review.review}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>




            <div className={styles.SlideIndicators}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.Indicator} ${index === currentSlide ? `${styles.IActive}` : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}

export default Carousel
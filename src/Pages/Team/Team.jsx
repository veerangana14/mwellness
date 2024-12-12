import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import TeamDoc1 from '../../Assets/images/team-doc-1.jpg'
import TeamDoc2 from '../../Assets/images/team-doc-2.jpg'
import TeamDoc3 from '../../Assets/images/team-doc-3.jpg'
import TeamDoc4 from '../../Assets/images/team-doc-4.jpg'
import TeamDoc5 from '../../Assets/images/team-doc-5.jpg'
import TeamDoc6 from '../../Assets/images/team-doc-6.jpg'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import TeamMemberCard from './TeamMemberCard'
import { Helmet } from 'react-helmet'
import styles from './Team.module.css'
import '../../Assets/root.css'

const psychiatryExpertsTeam = [
    {
        id: 1,
        imageSrc: TeamDoc1,
        speciality: "Psychiatry, Mental Health Policy Development",
        name: "Dr. Nimesh G. Desai ",
        socialLinks: {
            facebook: "https://facebook.com/julianrogers",
            instagram: "https://instagram.com/julianrogers",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/1234567890",
        },
        description: "Dr. Desai, a psychiatrist with 40+ years of experience, holds an MD in Psychiatry and a US Master’s in Public Health. An RCP member, he excels in psychiatric care and mental health policy, earning accolades like the Humphrey Fulbright Fellowship."
    },
    {
        id: 2,
        imageSrc: TeamDoc2,
        speciality: "ADHD, Child Psychiatry",
        name: "Dr. Ashutosh Kumar Chaubey",
        socialLinks: {
            facebook: "https://facebook.com/sophiablake",
            instagram: "https://instagram.com/sophiablake",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/9876543210",
        },
        description: "With an MBBS and MD from Vardhaman Mahavir Medical College and Safdarjung Hospital, Dr. Chaubey brings unparalleled expertise in addressing complex mental health challenges in children. His empathetic approach ensures young minds receive the care they deserve."
    },
];

const clinicalPsychologyTeam = [
    {
        id: 3,
        imageSrc: TeamDoc3,
        speciality: "Trauma-Informed Care, Psychodynamic Therapy, QueerAffirmative Therapy",
        name: "Ms. Harneer Kaur ",
        socialLinks: {
            facebook: "https://facebook.com/julianrogers",
            instagram: "https://instagram.com/julianrogers",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/1234567890",
        },
        description: "An RCI Licensed Clinical Psychologist and MBPsS member, Ms. Harneer Kaur offers 4+ years of psychodynamic, trauma-informed therapy. Fluent in English and Hindi, she specializes in discreet care for public figures and treats mood, anxiety, and gender-related disorders. Formerly with Apollo Hospital and Max Healthcare, she now consults and practices privately."
    },
    {
        id: 4,
        imageSrc: TeamDoc4,
        speciality: "Counselling Psychology, Psychometric Assessment, Addiction Therapy",
        name: "Ms. Prachi Sehrawat ",
        socialLinks: {
            facebook: "https://facebook.com/sophiablake",
            instagram: "https://instagram.com/sophiablake",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/9876543210",
        },
        description: "A dedicated counselling psychologist with a Master’s in Counseling Psychology from Amity University, Ms. Sehrawat excels in providing individual and group therapy, addressing mental health and substance abuse issues. As a Senior Psychologist at Athena, she develops personalised treatment plans and oversees operations. Founder of the Nirvata Social Welfare Foundation, Ms. Sehrawat champions mental health awareness and women’s empowerment through webinars, campaigns, and counselling initiatives."
    }
];

const expressiveArtsTherapyTeam = [
    {
        id: 5,
        imageSrc: TeamDoc5,
        speciality: "Art Therapy for Trauma and Special Education",
        name: "Mrs. Disha Dutt",
        socialLinks: {
            facebook: "https://facebook.com/julianrogers",
            instagram: "https://instagram.com/julianrogers",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/1234567890",
        },
        description: "With a Master’s from LASALLE College of the Arts, Mrs. Dutt has a proven track record of helping children and adults overcome trauma and disabilities. She uses art as a powerful medium for healing and expression."
    },
    {
        id: 6,
        imageSrc: TeamDoc6,
        speciality: "Neurologic Music Therapy for Autism, Mental Health Disorders, and Geriatrics",
        name: "Mrs. Purvaa Sampath",
        socialLinks: {
            facebook: "https://facebook.com/sophiablake",
            instagram: "https://instagram.com/sophiablake",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/9876543210",
        },
        description: "An award-winning therapist and Berklee College of Music graduate, Mrs. Sampath combines clinical rigor with creative innovation, making music therapy an integral part of holistic care."
    },
    {
        id: 7,
        imageSrc: TeamDoc6,
        speciality: "Indigenous Movement Practices and Embodied Mental Health",
        name: "Mrs. Devika Mehta Kadam",
        socialLinks: {
            facebook: "https://facebook.com/sophiablake",
            instagram: "https://instagram.com/sophiablake",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/9876543210",
        },
        description: "With multiple advanced degrees in clinical psychology, folk dance, and movement therapy, Mrs. Kadam champions the role of body and creativity in mental health. She is a leading voice in decolonizing mental health practices."
    }
]


const Team = () => {

    useEffect(()=> {
        window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Helmet>
            <title>Team - MWellness</title>
        </Helmet>

        <Navbar />

        <div id={styles.TeamOuterContainer}>

            <div id='page-header'>
                <div id="page-header-content">
                    <p className='header-title '>Team of Professionals</p>

                    <p className='header-sub-title'>Home &nbsp; &gt; &nbsp; Team</p>
                </div>
            </div>


            <div id={styles.TeamInnerContainer}>
                <div id={styles.TeamHeaderContainer}>
                    <div id={styles.TeamHeader}>
                        <p>Meet Our Team of Experts</p>
                        <p>At XXX, we believe that exceptional care stems from a diverse and dedicated team. Our multidisciplinary specialists bring together expertise from psychiatry, clinical psychology, and expressive arts therapy to provide holistic, compassionate, and personalised mental  health support. Each member is committed to breaking barriers in mental health accessibility, offering innovative treatments, and empowering individuals to thrive. With extensive training from prestigious institutions and years of professional experience, our team is equipped to guide you through every step of your mental wellness journey</p>
                    </div>

                    {/* <div id={styles.TeamStats}>
                        <div className={styles.StatsCol}>
                            <p className={styles.StatsNum}>12+</p>
                            <p className={styles.StatsHead}>Qualified Specialist</p>
                        </div>
                        <div className={styles.StatsCol}>
                            <p className={styles.StatsNum}>99%</p>
                            <p className={styles.StatsHead}>Effectiveness of therapy</p>
                        </div>
                    </div> */}
                </div>


                <div id={styles.ExpertGridContainer}>
                    <div className="ExpertGridContents">
                        <p className={styles.ExpertsHeading}>Psychiatry Experts</p>
                        <div id={styles.TeamGridContainer}>
                            {psychiatryExpertsTeam.map((member) => (
                                <TeamMemberCard
                                    key={member.id}
                                    imageSrc={member.imageSrc}
                                    speciality={member.speciality}
                                    name={member.name}
                                    // socialLinks={member.socialLinks}
                                    desc={member.description}
                                />
                            ))}
                        </div>
                    </div>


                    <div className="ExpertGridContents">
                        <p className={styles.ExpertsHeading}>Clinical Psychology Professionals</p>
                        <div id={styles.TeamGridContainer}>
                            {clinicalPsychologyTeam.map((member) => (
                                <TeamMemberCard
                                    key={member.id}
                                    imageSrc={member.imageSrc}
                                    speciality={member.speciality}
                                    name={member.name}
                                    // socialLinks={member.socialLinks}
                                    desc={member.description}
                                />
                            ))}
                        </div>
                    </div>


                    <div className="ExpertGridContents">
                        <p className={styles.ExpertsHeading}>Expressive Arts Therapy Pioneers</p>
                        <div id={styles.TeamGridContainer}>
                            {expressiveArtsTherapyTeam.map((member) => (
                                <TeamMemberCard
                                    key={member.id}
                                    imageSrc={member.imageSrc}
                                    speciality={member.speciality}
                                    name={member.name}
                                    // socialLinks={member.socialLinks}
                                    desc={member.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>


                <div id={styles.TeamFooter}>
                    <p>Our Commitment to Excellence</p>
                    <p>Each professional on our team is carefully selected for their exceptional qualifications, empathy, and dedication to innovation in mental health care. With a shared goal to make mental health accessible, they work together to create tailored solutions for every individual, ensuring support that is as unique as your journey.</p>

                    <p>Let us help you discover your path to healing and self-discovery with the guidance of our
                    extraordinary team.</p>
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Team
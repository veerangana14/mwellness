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

const teamData = [
    {
        id: 1,
        imageSrc: TeamDoc1,
        speciality: "Family psychologist, Psy. D",
        name: "Julian Rogers",
        socialLinks: {
            facebook: "https://facebook.com/julianrogers",
            instagram: "https://instagram.com/julianrogers",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/1234567890",
        },
    },
    {
        id: 2,
        imageSrc: TeamDoc2,
        speciality: "Clinical psychologist, Psy. D",
        name: "Ruth Clark",
        socialLinks: {
            facebook: "https://facebook.com/sophiablake",
            instagram: "https://instagram.com/sophiablake",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/9876543210",
        },
    },
    {
        id: 3,
        imageSrc: TeamDoc3,
        speciality: "Practicing Psychologist",
        name: "Joseph Powers",
        socialLinks: {
            facebook: "https://facebook.com/julianrogers",
            instagram: "https://instagram.com/julianrogers",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/1234567890",
        },
    },
    {
        id: 4,
        imageSrc: TeamDoc4,
        speciality: "Practicing psychologist, Psy. D",
        name: "Robert Johnston",
        socialLinks: {
            facebook: "https://facebook.com/sophiablake",
            instagram: "https://instagram.com/sophiablake",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/9876543210",
        },
    },
    {
        id: 5,
        imageSrc: TeamDoc5,
        speciality: "Clinical psychologist, Psy. D",
        name: "Carmella Floyd",
        socialLinks: {
            facebook: "https://facebook.com/julianrogers",
            instagram: "https://instagram.com/julianrogers",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/1234567890",
        },
    },
    {
        id: 6,
        imageSrc: TeamDoc6,
        speciality: "Child Psychologist",
        name: "Merryl Morton",
        socialLinks: {
            facebook: "https://facebook.com/sophiablake",
            instagram: "https://instagram.com/sophiablake",
            twitter: "https://twitter.com/julianrogers",
            whatsapp: "https://wa.me/9876543210",
        },
    },
];


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
                        <p>Meet Our Doctors</p>
                        <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                    </div>

                    <div id={styles.TeamStats}>
                        <div className={styles.StatsCol}>
                            <p className={styles.StatsNum}>12+</p>
                            <p className={styles.StatsHead}>Qualified Specialist</p>
                        </div>
                        <div className={styles.StatsCol}>
                            <p className={styles.StatsNum}>99%</p>
                            <p className={styles.StatsHead}>Effectiveness of therapy</p>
                        </div>
                    </div>
                </div>

                <div id={styles.TeamGridContainer}>
                    {teamData.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            imageSrc={member.imageSrc}
                            speciality={member.speciality}
                            name={member.name}
                            socialLinks={member.socialLinks}
                        />
                    ))}
                </div>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default Team
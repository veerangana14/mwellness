import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/Contact/Contact';
import FAQ from '../Pages/FAQ/FAQ';
import Team from '../Pages/Team/Team';
import About from '../Pages/About/About';
import Assessments from '../Pages/Assessments/Assessments';
import Journals from '../Pages/Journals/Journals';
import Community from '../Pages/Community/Community';
import Campaign from '../Pages/Campaign/Campaign';
import Seminar from '../Pages/Seminar/Seminar';
import ArtsVideo from '../Pages/ArtsVideo/ArtsVideo';
import ArtsAudio from '../Pages/ArtsAudio/ArtsAudio';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/seminars" element={<Seminar />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/community" element={<Community />} />
            <Route path="/awareness-campaigns" element={<Campaign />} />
            <Route path="/arts-audio" element={<ArtsAudio />} />
            <Route path="/arts-video" element={<ArtsVideo />} />
        </Routes>
    </div>
  )
}

export default MainRoutes
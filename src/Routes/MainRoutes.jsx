import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
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
import GetStarted from '../Pages/GetStarted/GetStarted';
import GetStarted2 from '../Pages/GetStarted/GetStarted2';
import BlogGrid from '../Pages/Blogs/Blogs'
import SingleBlogPage from '../Pages/Blogs/SingleBlogPage';
import DepressionAssessment from '../Pages/Assessments/DepressionAssessment';
import PerceivedStressAssessment from '../Pages/Assessments/PerceivedStressAssessment';
import AnxietyAssessment from '../Pages/Assessments/AnxietyAssessment';
import Services from '../Pages/Services/Services';
import ServiceDetails from '../Pages/Services/ServiceDetails';
import Programs from '../Pages/Programs/Programs';
import DownloadPage from '../Pages/DownloadScreen/DownloadPage';
import Register from '../Dashboard/pages/Register';
import Login from '../Dashboard/pages/Login';

const MainRoutes = () => {
  const location = useLocation();
  
    // Load Tailwind styles dynamically for Dashboard
    if (location.pathname.startsWith('/dashboard')) {
      import('../tailwind.css');
    }

  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/depression-assessment" element={<DepressionAssessment />} />
            <Route path="/perceived-stress-assessment" element={<PerceivedStressAssessment />} />
            <Route path="/anxiety-assessment" element={<AnxietyAssessment />} />
            <Route path="/seminars" element={<Seminar />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/community" element={<Community />} />
            <Route path="/awareness-campaigns" element={<Campaign />} />
            <Route path="/arts-audio" element={<ArtsAudio />} />
            <Route path="/arts-video" element={<ArtsVideo />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/get-started2" element={<GetStarted2 />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/single-blog" element={<SingleBlogPage />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/download-app" element={<DownloadPage />} />
            <Route path="/dashboard/register" element={<Register />} />
            <Route path="/dashboard/login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default MainRoutes
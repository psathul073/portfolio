import { useCallback, useRef, useState, lazy } from 'react';
import { useNavigate } from 'react-router';
import Header from './Header';
import Settings from './Settings';
import Hero from './Hero';
import Technologies from './Technologies';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const RecentProject = lazy(() => import('./Recent-project'));
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const aboutRef = useRef(null);
  const settingsBtnRef = useRef(null);
  const navigate = useNavigate();
  const [isModelOpen, setIsModalOpen] = useState(false);

  const handleAboutClick = useCallback(() => {
    navigate('#about', { replace: false });
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [navigate]);

  

  return (
    <>

      <Header setIsModalOpen={setIsModalOpen} aboutRef={aboutRef} settingsBtnRef={settingsBtnRef} aboutClick={handleAboutClick} />

      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About aboutRef={aboutRef} />

      {/* Recent Project section */}
      <RecentProject />

      {/* Used TEC Section */}
      <Technologies />

      {/* Contact section */}
      <Contact />

      {/* Settings model */}
      {isModelOpen && <Settings settingsBtnRef={settingsBtnRef} setIsModalOpen={setIsModalOpen} />}

      <Footer />
    </>
  )
};


export default Home

import { useRef, useState } from 'react';
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Settings from '../components/Settings';
import Header from '../components/Header';

const Contacts = () => {
  const [isModelOpen, setIsModalOpen] = useState(false);
  const settingsBtnRef = useRef(null);

  return (
    <>
      <Header settingsBtnRef={settingsBtnRef} setIsModalOpen={setIsModalOpen} />
      <section style={{marginTop: '68px'}}>
        <Contact />
      </section>
      <Footer />
      {isModelOpen && <Settings settingsBtnRef={settingsBtnRef} setIsModalOpen={setIsModalOpen} />}
    </>
  )
}

export default Contacts
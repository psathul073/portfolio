import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Settings from '../components/Settings'
import '../styles/_three_d.scss'

const ThreeDProject = () => {
  const [isModelOpen, setIsModalOpen] = useState(false);
  const settingsBtnRef = useRef(null);

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} settingsBtnRef={settingsBtnRef} />
   
      <section id='three-d-project'>
      
        <div className='three-dP-container'>
          <h1>3D Projects<span>.</span></h1>
          <p>Added soon...</p>
        </div>

      </section>

      { isModelOpen && <Settings setIsModalOpen={setIsModalOpen} settingsBtnRef={settingsBtnRef}  />}
    </>

  )
}

export default ThreeDProject
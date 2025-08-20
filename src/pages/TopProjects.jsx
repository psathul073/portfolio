import { memo, useRef, useState } from 'react'
import Header from '../components/Header';
import Settings from '../components/Settings';
import { Link } from 'react-router';
import Icons from '../components/Icons';
import AllProjects from '../components/AllProjects';
import "../styles/_recentProjects.scss";

const TopProjects = memo(function Projects() {
  const [isModelOpen, setIsModalOpen] = useState(false);
  const settingsBtnRef = useRef(null);

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} settingsBtnRef={settingsBtnRef} />

      {isModelOpen && <Settings settingsBtnRef={settingsBtnRef} setIsModalOpen={setIsModalOpen} />}

      <section id='recent-project'>

        <div className='project-container'>

          <h2 className='latest-p'>Latest Projects<span>.</span></h2>
          <p>Explore some of my latest projects below, and for more, visit my GitHub profile.</p>

          <AllProjects limit={6} />

          <div className='more-project'>

            <p>Would you like to see more of my work? Check out my GitHub profile and give me some contributions; let's build together.</p>
            <div className='links'>
              <Link to={"https://github.com/psathul073/"}><Icons name={'gh'} className={'icon'} /> View my Github <Icons name={'arrowRight'} className={'icon'} /> </Link>
              <Link to={'/three-d'}> 3D Projects <Icons name={'three_d'} className={'icon'} /></Link>
            </div>
          </div>

        </div>

      </section>

    </>
  )
})

export default TopProjects
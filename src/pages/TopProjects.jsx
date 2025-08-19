import { memo, Suspense, useEffect, useRef, useState } from 'react'
import Header from '../components/Header';
import Settings from '../components/Settings';
import { Link } from 'react-router';
import Icons from '../components/Icons';
import AllProjects from '../components/AllProjects';
import "../styles/_recentProjects.scss";

const TopProjects = memo(function Projects() {
  const [isModelOpen, setIsModalOpen] = useState(false);
  const settingsBtnRef = useRef(null);

  // Github user data Fetch
  useEffect(() => {

    const gRepo = async () => {
      try {
        const localRepo = localStorage.getItem('ghRepo');
        if (localRepo) {
          const { repos, fetchedAt } = JSON.parse(localRepo);

          // Only refetch if older than 24 hours
          const isExpired = Date.now() - fetchedAt > 24 * 60 * 60 * 1000;
          if (!isExpired) {
            setGhRepo(repos);
            return;
          }
        };

        setSkelton(true);
        const [repoResult] = await Promise.all([FetchRepoData()]);
        console.log(repoResult, '--repos');


        // Select specific indices from repoResult
        const relevantProjects = [14, 3, 13, 10, 11, 19].map(index => repoResult[index]).filter(Boolean);
        setGhRepo(relevantProjects);


        // Set data in local storage;
        localStorage.setItem('ghRepo', JSON.stringify({
          repos: relevantProjects,
          fetchedAt: Date.now()
        }));

      } catch (error) {
        console.error('Error fetching GitHub data:', error);

      } finally {
        setSkelton(false);
      }
    };
    gRepo();

  }, []);

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
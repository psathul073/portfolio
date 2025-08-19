import { useEffect, useState } from 'react';
import Icons from './Icons';
import { FetchGithubStatus } from '../API/githubData';

const GithubStatus = () => {

  const [githubStatus, setGithubStatus] = useState({});

  // Fetch github status.
  useEffect(() => {

    const gStatus = async () => {

      try {

        // Add cache.
        const localData = localStorage.getItem('ghData');

        if (localData) {
          const { status, fetchedAt } = JSON.parse(localData);
          const isExpired = Date.now() - fetchedAt > 24 * 60 * 60 * 1000;

          if (!isExpired) {
            setGithubStatus(status);
            return;
          }

        }

        const result = await FetchGithubStatus();

        setGithubStatus(result);


        localStorage.setItem('ghData', JSON.stringify({
          status: result,
          fetchedAt: Date.now()
        }));

      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      }
    };

    gStatus();

  }, []);

  return (
    <div className='github-data'>
      <p className='text'><Icons name={"github"} className={'icon'} /> Followers: {githubStatus?.followers ?? 369}</p>
      <p className='text'><Icons name={"star"} className={'icon'} /> Stars: {githubStatus?.stars ?? 369}</p>
      <p className='text'><Icons name={"fork"} className={'icon'} /> Forks: {githubStatus?.forks ?? 369}</p>
      <p className='text'><Icons name={"commit"} className={'icon'} /> Commits: {githubStatus?.commits ?? 369}</p>
    </div>

  )
}

export default GithubStatus
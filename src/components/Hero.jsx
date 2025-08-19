import { lazy, Suspense } from 'react';
import Loader from './Loader';
const RoboDrone = lazy(() => import('./Drone-viewer'));
const Terminal = lazy(() => import('./Terminal'));
import "../styles/_hero.scss";
import GithubStatus from './Github-status';


const Hero = ({ githubStatus }) => {

    return (
        <section id='hero'>

            <div className='hero_content'>

                <Terminal />
                <Suspense fallback={<div className='drone-loader'> <Loader /> </div>}>
                    <RoboDrone />
                </Suspense>

            </div>

            <GithubStatus githubStatus={githubStatus} />

        </section>
    )
}

export default Hero

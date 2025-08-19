import { Link } from 'react-router';
import Icons from './Icons';
import "../styles/_recentProjects.scss";
import AllProjects from '../components/AllProjects'
import ProjectSkelton from './Project-skelton';


const RecentProject = () => {


    return (

        <section id='recent-project'>

            <div className='project-container'>

                <h1>Recent Projects<span>.</span></h1>

                <p>Explore some of my latest projects below, and for more, visit my GitHub profile.</p>

                <AllProjects />

                <div className='more-project'>
                    <p>Would you like to view more of my work?</p>
                    <div className='links'>
                        <Link to={"/projects"}>View more projects <Icons name={'arrowRight'} className={'icon'} /> </Link>
                    </div>
                </div>

            </div>

        </section>

    )
};


export default RecentProject;
import { Link } from 'react-router';
import Icons from './Icons';
import '../styles/_allProjects.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState } from 'react';
import ProjectSkelton from './Project-skelton';
import FetchProjects from '../API/projectsData';
import formatTime from '../utils/formatTime';

gsap.registerPlugin(ScrollTrigger);

const AllProjects = ({ limit = 2 }) => {

    const [projects, setProjects] = useState([]);

    const demo = [
        {
            tl: 'Glassmorphism-CSS-Generator',
            dc: 'A simple and intuitive tool for generating beautiful glassmorphism styles in CSS.',
            dt: '2024-10-15',
            img: '/image/test2.webp',
            tg: 'html',

        },
        {
            tl: 'Glassmorphism-CSS-Generator',
            dc: 'A simple and intuitive tool for generating beautiful glassmorphism styles in CSS.',
            dt: '2024-10-15',
            img: '/image/test2.webp',
            tg: 'html',

        },
        {
            tl: 'Glassmorphism-CSS-Generator',
            dc: 'A simple and intuitive tool for generating beautiful glassmorphism styles in CSS.',
            dt: '2024-10-15',
            img: '/image/test2.webp',
            tg: 'html',

        },
        {
            tl: 'Glassmorphism-CSS-Generator',
            dc: 'A simple and intuitive tool for generating beautiful glassmorphism styles in CSS.',
            dt: '2024-10-15',
            img: '/image/test2.webp',
            tg: 'html',

        },
    ]
    // Fetch projects from dev profile.

    useEffect(() => {

        const fetchProjects = async () => {

            try {
                const localData = localStorage.getItem('projects');

                if (localData) {
                    const { cachedProjects, fetchedAt } = JSON.parse(localData);
                    const isExpired = Date.now() - fetchedAt > 24 * 60 * 60 * 1000;

                    if (!isExpired) {
                        setProjects(cachedProjects);
                        return;
                    }

                }

                const result = await FetchProjects();

                setProjects(result.projects);

                localStorage.setItem('projects', JSON.stringify({
                    cachedProjects: result.projects,
                    fetchedAt: Date.now()
                }));

            } catch (error) {
                console.error('Failed to projects data:', error);
            }
        };

        fetchProjects();

    }, []);


    // For gsap animation.


    useEffect(() => {

        if (!demo || demo.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.project').forEach((el) => {
            gsap.from(el, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });

    }, []);

    return (
        <>
            {projects.length > 0 ? projects.map((project, idx) => {

                if (idx < limit) {
                    return (

                        <div className='project' key={project.id || idx} >

                            <h3>{project.title}</h3>
                            <p className='date'>{formatTime(project.createdAt)}</p>
                            <p className='description'>{project.description}</p>

                            <div className='image'>
                                <img src={project.picture} alt={'project image'} loading='lazy' />

                                <div className='img-btns'>
                                    <button><Link to={project.liveURL}>Demo <Icons name={'source'} className={'icon'} /></Link> </button>
                                    <button><Link to={project.demoURL}>Code<Icons name={'code'} className={'icon'} /></Link></button>
                                </div>

                            </div>

                            <ul className='tags'>
                                {
                                    project.usedTec.length > 0 && project.usedTec.map((tec, idx) => (
                                        <li key={idx}><Icons name={tec.value} />{tec.label}</li>
                                    ))
                                }

                            </ul>

                        </div>

                    )
                }

            }) :

                <ProjectSkelton n={limit} />

            }
        </>

    )
}

export default AllProjects
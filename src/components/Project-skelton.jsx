import '../styles/_project-skelton.scss';
import Icons from './Icons';


const ProjectSkelton = ({ n = 2 }) => {

  const skelton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {skelton.slice(0, n).map((sk) => (

        <div key={sk} className='project-sk'>

          <div className='title'></div>
          <div className='date-sk'></div>
          <div className='description-sk'></div>

          <div className='image-sk'>
            <div><Icons name={"loading"} /></div>
          </div>

          <div className='tags-sk'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </>

  )
}

export default ProjectSkelton
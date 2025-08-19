import Icons from './Icons';
import ScrambledTypingArray from './Scramble-text';
import { Link } from 'react-router';
import "../styles/_terminal.scss";


const Terminal = () =>  {
  return (

    <div className="terminal-container">

      <div  id="terminal" >

        <div className="main-head">
          <div className="h-1">
            <div className="red"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <p> ~psathul</p>
            <Icons name={"plus"} />
          </div>
          <div className="h-2">
            <Icons name={"question"} /> <Icons name={"dots"} />
          </div>
        </div>

        <div className="terminal-main">

          <div className="ascii-img">
            <img src="/image/ascii-art.webp" alt="computer" loading='lazy' />
        
          </div>

          <div className="terminal-texts">
            <h3>$Hey, I'm Athul</h3>

            <p>$:~ I am a passionate developer with a love for creating innovative solutions.</p>

              <ScrambledTypingArray
                texts={[
                  "$Iam a Frontend Developer",
                  "$Iam a Backend Developer",
                  "$Iam a Web3 Developer",
                  "$Iam a Full Stack Developer ",
                ]}
              />

          </div>
        </div>
      </div>

      <div className='terminal-btns'>
        <Link to={'https://drive.google.com/file/d/1Ovw45E0vEuoPBfBNYwzbKgi--aYwshEw/view?usp=sharing'}>Resume <Icons name={'download'} className={'icon'} /> </Link>
        <Link to={'/contact'}>Contact me <Icons name={"arrow"} className={'icon'} /></Link>
      </div>

    </div>

  );
};

export default Terminal
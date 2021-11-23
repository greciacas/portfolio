import './P3.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiExpress, SiMongodb, SiJsonwebtokens } from 'react-icons/si';
import Project3Photo from '../../images/project3.png';

export default function P3() {
  const p3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 2000, duration: 2000 },
  });

  return (
    <animated.div style={p3} className='p3'>
      <div className='middle'>
        <div className='w-icons'>
          <h1 className='EVZ'>EVNTZ</h1>
          <p className='info'>Full CRUD full stack web application with user authentication and authorization. Designed to be an event management posting board for residents of a local community. Built with HTML, CSS, JavaScript, React, Express, Node.js, MongoDB, bcrypt and JWT.</p>
          <FaHtml5 size={35} />
          <FaCss3Alt size={35} />
          <SiJavascript size={35} />
          <SiReact size={35} />
          <SiExpress size={35} />
          <FaNodeJs size={35} />
          <SiMongodb size={35} />
          <SiJsonwebtokens size={35} />
          <div>
            <a href="https://suspicious-shirley-aff7c1.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={Project3Photo} alt='p3' className='project-3'/>
            </a>
          </div>
          <div className='buttons'>
            <button className='code'><a href="https://github.com/erik-eyler/EVNTZ" target="_blank" rel="noopener noreferrer">View Code</a></button>
            <button className='site'><a href="https://suspicious-shirley-aff7c1.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a></button>
          </div>
        </div>
      </div>
      </animated.div>
  )
}

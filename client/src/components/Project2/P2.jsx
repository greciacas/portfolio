import './P2.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiExpress, SiMongodb, SiJsonwebtokens } from 'react-icons/si';
import P3 from '../../images/project3.png';

export default function P2() {
  const p2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 4000, duration: 4000 },
  });

  return (
    <animated.div style={p2} className='p2'>
      <div className='middle'>
        <h1 className='EVZ'>EVNTZ</h1>
        <div className='w-icons'>
        <p className='info'>Full CRUD full stack web application with user authentication and authorization. Designed to be an event management posting board for residents of a local community. Built with HTML, CSS, JavaScript, React, Express, Node.js, MongoDB, bcrypt and JWT.</p>
          <FaHtml5 size={35} />
          <FaCss3Alt size={35} />
          <SiJavascript size={35} />
          <SiReact size={35} />
          <SiExpress size={35} />
          <FaNodeJs size={35} />
          <SiMongodb size={35} />
          <SiJsonwebtokens size={35} />
          <div className='buttons'>
          <button className='code'><a href="https://github.com/erik-eyler/EVNTZ" target="_blank" rel="noopener noreferrer">Viev Code</a></button>
          <button className='site'><a href="https://suspicious-shirley-aff7c1.netlify.app/" target="_blank" rel="noopener noreferrer">View Site</a></button>
          </div>
        </div>
        <a href="https://suspicious-shirley-aff7c1.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={P3} alt='p3' className='project-3'/>
        </a>
        </div>
      </animated.div>
  )
}

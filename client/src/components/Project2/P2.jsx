import './P2.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiExpress, SiMongodb, SiJsonwebtokens } from 'react-icons/si';

export default function P2() {
  const p2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 4000, duration: 4000 },
  });

  return (
    <animated.div style={p2} className='p2'>
        <h1>EVNTZ</h1>
        <p>Full CRUD full stack web application with user authentication and authorization. Designed to be an event management posting board for residents of a local community. Built with HTML, CSS, JavaScript, React, Express, Node.js, MongoDB, bcrypt and JWT.</p>
        <div className='icons'>
          <FaHtml5 size={25} />
          <FaCss3Alt size={25} />
          <SiJavascript size={25} />
          <SiReact size={25} />
          <SiExpress size={25} />
          <FaNodeJs size={25} />
          <SiMongodb size={25} />
          <SiJsonwebtokens size={25} />
        </div>
      </animated.div>
  )
}

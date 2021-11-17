import './P4.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiAirtable } from 'react-icons/si';
import P2 from '../../images/project2.png'

export default function P4() {
  const p4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 5000, duration: 5000 },
  })

  return (
    <animated.div style={p4} className='p4'>
      <div className='bottom'>
        <h1 className='WYSP'>What's Your Spirit Animal?</h1>
        <div className='w-icons'>
        <p className='info'>Responsive front-end quiz-like application with full CRUD built using HTML, CSS, JvaScript, React, and Airtable.</p>
          <FaHtml5 size={35} />
          <FaCss3Alt size={35} />
          <SiJavascript size={35} />
          <SiReact size={35} />
          <SiAirtable size={35} />
          <div className='buttons'>
          <button className='code'><a href="https://github.com/greciacas/what-is-your-spirit-animal" target="_blank" rel="noopener noreferrer">Viev Code</a></button>
          <button className='site'><a href="https://serene-jepsen-5e5131.netlify.app/" target="_blank" rel="noopener noreferrer">View Site</a></button>
          </div>
        </div>
        <a href="https://serene-jepsen-5e5131.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img src={P2} alt='p2' className='project-2'/>
        </a>
        </div>
      </animated.div>
  )
}

import './P2.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiAirtable } from 'react-icons/si';
import Project2Photo from '../../images/project2.png'

export default function P2() {
  const p2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 3000, duration: 3000 },
  })

  return (
    <animated.div style={p2} className='p2'>
      <div className='bottom'>
        <div className='w-icons'>
          <h1 className='WYSP'>What's Your Spirit Animal?</h1>
          <p className='info'>Responsive front-end quiz-like application with full CRUD built using HTML, CSS, JvaScript, React, and Airtable.</p>
          <FaHtml5 size={35} />
          <FaCss3Alt size={35} />
          <SiJavascript size={35} />
          <SiReact size={35} />
          <SiAirtable size={35} />
          <div>
            <a href="https://serene-jepsen-5e5131.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src={Project2Photo} alt='p2' className='project-2'/>
            </a>
          </div>
          <div className='buttons'>
            <button className='code'><a href="https://github.com/greciacas/what-is-your-spirit-animal" target="_blank" rel="noopener noreferrer">View Code</a></button>
            <button className='site'><a href="https://serene-jepsen-5e5131.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Site</a></button>
          </div>
        </div>
      </div>
      </animated.div>
  )
}

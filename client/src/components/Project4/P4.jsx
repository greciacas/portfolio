import './P4.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiAirtable } from 'react-icons/si';

export default function P4() {
  const p4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 5000, duration: 5000 },
  })

  return (
    <animated.div style={p4} className='p4'>
        <h1>What's Your Spirit Animal?</h1>
        <p>Responsive front-end quiz-like application with full CRUD built using HTML, CSS, JvaScript, React, and Airtable.</p>
        <div className='icons'>
          <FaHtml5 size={25} />
          <FaCss3Alt size={25} />
          <SiJavascript size={25} />
          <SiReact size={25} />
          <SiAirtable size={25}/>
        </div>
      </animated.div>
  )
}

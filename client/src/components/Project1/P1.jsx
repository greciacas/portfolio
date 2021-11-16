import './P1.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

export default function P1() {
  const p1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 2000, duration: 2000 },
  });

  return (
    <animated.div style={p1} className='p1'>
        <h1>Finding Books</h1>
        <p>Front end application using a third party API to allow users to search and find books. Built using HTML, CSS, and JavaScript.</p>
        <div className='icons'>
          <FaHtml5 size={25} />
          <FaCss3Alt size={25} />
          <SiJavascript size={25} />
        </div>
      </animated.div>
  )
}

import './P1.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import Project1Photo from '../../images/project1.png';

export default function P1() {
  const p1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 2000, duration: 2000 },
  });

  return (
    <animated.div style={p1} className='p1'>
      <div className='last'>
        <div className='w-icons'>
          <h1 className='Books'>Finding Books</h1>
          <p className='info'>Front end application using a third party API to allow users to search and find books. Built using HTML, CSS, and JavaScript.</p>
          <FaHtml5 size={35} />
          <FaCss3Alt size={35} />
          <SiJavascript size={35} />
          <div>
            <a href="https://greciacas.github.io/finding-books/" target="_blank" rel="noopener noreferrer">
              <img src={Project1Photo} alt='p1' className='project-1'/>
            </a>
          </div>
          <div className='buttons'>
            <button className='code'><a href="https://github.com/greciacas/finding-books" target="_blank" rel="noopener noreferrer">View Code</a></button>
            <button className='site'><a href="https://greciacas.github.io/finding-books/" target="_blank" rel="noopener noreferrer">Visit Site</a></button>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

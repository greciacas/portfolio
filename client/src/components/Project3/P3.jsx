import './P3.css';
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiRubyonrails, SiJsonwebtokens } from 'react-icons/si';

export default function P3() {
  const p3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 3000, duration: 3000 },
  })

  return (
    <animated.div style={p3} className='p3'>
        <h1>Around the Globe</h1>
        <p>Full CRUD full stack web application with a ruby on rails backend with user authentication. A blogg app that allows users to make posts and leave comments under other users posts. Built with HTML, CSS, JavaScript, React, Ruby on Rails, Node.js, bcrypt and JWT.</p>
        <div className='icons'>
          <FaHtml5 size={25} />
          <FaCss3Alt size={25} />
          <SiJavascript size={25} />
          <SiReact size={25} />
          <SiRubyonrails size={25} />
          <FaNodeJs size={25} />
          <SiJsonwebtokens size={25}/>
        </div>
      </animated.div>
  )
}

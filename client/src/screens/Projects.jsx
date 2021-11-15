import './Projects.css'
import { animated, useSpring } from 'react-spring';
import { FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiReact, SiAirtable, SiExpress, SiRubyonrails, SiMongodb, SiJsonwebtokens } from 'react-icons/si';

export default function Projects() {
  const p1 = useSpring({
    from: { opacity: 0, marginTop: -100 },
    to: { opacity: 1, marginTop: 0 },
    config: { delay: 1000, duration: 1000 },
  });

  const p2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 2000, duration: 2000 },
  });

  const p3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 3000, duration: 3000 },
  })

  const p4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 4000, duration: 4000 },
  })

  return (
    <>
      <animated.div style={p1} className='p1'>
        <h1>Finding Books</h1>
        <p>Front end application using a third party API to allow users to search and find books. Built using HTML, CSS, and JavaScript.</p>
        <div className='icons'>
          <FaHtml5 size={25} />
          <FaCss3Alt size={25} />
          <SiJavascript size={25} />
        </div>
      </animated.div>

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
    </>
  );
}

import './About.css';
import Me from '../../../src/images/me.jpg';

export default function About() {
  return (
    <div>
    <div className='about-me'>
      <div>
        <img src={Me} alt='me' className='me'/>
      </div>
      <div className='summary'>
        <p>
        Forward-thinking software engineer who enjoys thinking outside the box and brainstorming ideas. A visual and fast-learner with a passion for creating and presenting successful projects that blend good design, strategy and excellence in programming.
        </p>
        <p>
          Graduate of Genneral Assembly's 12 week Software Engineering Immersive program which consited of learning and implementing a variety of front-end frameworks such as React, and back-end frameworks such as Mongoose, Express, and Ruby on Rails on full stack web applications with full CRUD using JavaScript, HTML and CSS. 
          </p>
          <p>Checkout my Résumé below.</p>
        <button className='resume'><a href="https://resume.io/r/DRS54vkLM" target="_blank" rel="noopener noreferrer">Resume</a></button>
      </div>
      </div>
    </div>
  )
}

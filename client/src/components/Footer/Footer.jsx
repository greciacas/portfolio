import './Footer.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { GoMail } from 'react-icons/go';

export default function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h3>View My Work</h3>
            <a href="https://github.com/greciacas" target="_blank" rel="noreferrer noopener" className='github'>
              <SiGithub size={30} style={{ color: 'bisque' }} />
            </a>
          </div>
          <div className='col'>
            <h3>Connect With Me</h3>
            <a href="https://www.linkedin.com/in/grecia-castillo-502123223/" target="_blank" rel="noreferrer noopener" className='linkedin'>
              <SiLinkedin size={30} style={{ color: 'bisque' }} />
            </a>
          </div>
          <div className='col'>
            <h3>Send Me a Message</h3>
            <a href="mailto: xgreciacastillox@gmail.com" target="_blank" rel="noreferrer noopener" className='email'>
            <GoMail size={35} style={{ color: 'bisque' }} />
            </a>
          </div>
        </div>
        
        <div className='row'>
          <p className='copyright'>
            &copy;{new Date().getFullYear()} by GRECIA CASTILLO | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

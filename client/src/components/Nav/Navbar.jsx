import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../images/logo.png';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/' className='link'><img src={Logo} alt='logo' /></Link>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'> <Link to='/' className='link'>Home</Link> </li>
        <li className='nav-item'> <Link to='about' className='link'>About Me</Link> </li>
        <li className='nav-item'> <Link to='projects' className='link'>View Projects</Link> </li>
        <li className='nav-item'> <Link to='contact' className='link'>Contact</Link> </li>
      </ul>
      <div className='menu' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ color: 'bisque' }} />)
          : (<FaBars size={30} style={{ color: 'bisque' }} />)}
      </div>
    </div>
  );
}

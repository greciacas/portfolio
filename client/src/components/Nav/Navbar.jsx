import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { BsPersonBoundingBox, BsFillGrid1X2Fill } from 'react-icons/bs';
// import Logo from '../../images/logo.png';

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
      {/* <div className='logo'>
        <Link to='/' className='link'><img src={Logo} alt='logo' /></Link>
      </div> */}
      <ul onClick={handleClick} className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'> <Link to='/' className='link'> <ImHome3 style={{verticalAlign: 'top'}} />Home </Link> </li>
        <li className='nav-item'> <Link to='about' className='link'> <BsPersonBoundingBox style={{verticalAlign: 'top'}}/>About Me</Link> </li>
        <li className='nav-item'> <Link to='projects' className='link'> <BsFillGrid1X2Fill style={{verticalAlign: 'top'}}/>View Projects</Link> </li>
      </ul>
      <div className='menu' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ color: 'saddlebrown' }} />)
          : (<FaBars size={30} style={{ color: 'bisque' }} />)}
      </div>
    </div>
  );
}

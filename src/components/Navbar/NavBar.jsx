import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function NavBar() {
  return (
      <div className='navbar_container'>
        <ul className='navbar_lists'>
            <li className='nav-list'><Link to='/'>Home</Link></li>
            <li className='nav-list'><Link to='/store'>Store</Link></li>
            <li className='nav-list'><Link to='/accessories'>Accessory</Link></li>
            <li className='nav-list'><Link to='/brand'>Brand</Link></li>
            <li className='nav-list'><Link to='/pages'>Pages</Link></li>
            <li className='nav-list'><Link to='/about'>About</Link></li>
            <li className='nav-list'><Link to='/news'>News</Link></li>
            <li className='nav-list'><Link to='/contactus'>Contact Us</Link></li>
          </ul>
        </div>
          
  )
}

export default NavBar
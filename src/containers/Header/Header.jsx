import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import TopBar from '../../components/TopBar/TopBar';
import './Header.css';
import TopAd from '../../components/TopAd/TopAd';

function Header() {
  return (
      <div className='app_header'>
          <TopBar />
          <NavBar />
          <TopAd />
      </div>
  )
}

export default Header
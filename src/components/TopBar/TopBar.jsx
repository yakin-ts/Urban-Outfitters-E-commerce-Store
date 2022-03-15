import React from 'react'
import { BiSearch} from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { BsBucket } from 'react-icons/bs';
import './TopBar.css';

function TopBar() {
  return (
      <div className='topbar_container'>
          <div className='topbar_logo'>
           <div className='logo_text'> MOODY STUDIO</div>
          </div>
          <div className='topbar_icons'>
              <BiSearch className='icon' />
              <IoPersonOutline className='icon' />
              <BsBucket className='icon'/>
              <AiOutlineHeart className='icon'/>
          </div>
      </div>
  )
}

export default TopBar
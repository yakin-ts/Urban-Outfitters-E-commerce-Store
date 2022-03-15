import React from 'react'
import './Subscribe.css'
import {IoMail} from 'react-icons/io5'
function Subscribe() {
  return (
    <div className='subscribe_container'>
      <div className='subscribe_info'>
      <p className='p-up-big'> SIGN UP FOR THE NEWSLETTER</p>
        <p>Subscribe for the latest stories and promotions</p>
      </div>
      <form className='subscribe_form'>
          <input type='text' placeholder='Enter Your e-mail addresss' name='email' />
          <button className='btn-sub'><IoMail  color='white'/></button>
      </form>
    </div>
  )
}

export default Subscribe
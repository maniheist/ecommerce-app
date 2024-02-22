import React from 'react'
import {NavLink,Link} from "react-router-dom"
const Header = () => {
  return <>
  <header className='Header-top-strip py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <p className='text-white mb-0'>Free Shipping Over $100 & Free Return</p>
        </div>
        <div className='col-6'>
          <p className='text-end text-white mb-0'>
            Hotline:
            <a className='text-white' href='tel:+9014624248'>+91 9014624248</a>
          </p>
        </div>
      </div>
    </div>
  </header>
  <header className='header-upper py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-2'>
          <h1><Link>
            Developers.
          </Link></h1>
        </div>
        <div className='col-5'></div>
        <div className='col-5'></div>
      </div>
    </div>
  </header>

    
    
  </> 
}

export default Header

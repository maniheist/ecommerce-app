import React from 'react'
import {NavLink,Link} from "react-router-dom"
import {BsSearch} from "react-icons/bs"
const Header = () => {
  return <>
  <header className='header-top-strip py-3'>
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
          <h2><Link className='text-white'>
            Dev Corner
          </Link></h2>
        </div>
        <div className='col-5'>
          <div className="input-group mb-3">
  <input type="text" class="form-control py-2" placeholder="Search Products Here..." aria-label="Search Products Here..." aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-5' /></span>
</div>
        </div>
        <div className='col-5'></div>
      </div>
    </div>
  </header>

    
    
  </> 
}

export default Header

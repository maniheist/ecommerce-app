/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
  return <>
    <footer className='py-3'>
        <div className='container-xxl'>
            <div className='row align-items-center'>
                <div className='col-5'>
                    <div className='footer-top-data d-flex gap-30 align-items-center'>
                        <img src="images/newsletter.png" alt="newsletter" />
                        <h2 className='text-white'>Sign Up For News Letter</h2>
                    </div>
                </div>
                <div className='col-7'>
                    <div className="input-group">
  <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address..." aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2">Subscribe</span>
</div>
                </div>
            </div>
        </div>
    </footer>
    <footer className='py-4'>
        <div className='container-xxl'>
            <div className="row">
                <div className='col-4'>
                <h4 className="text-white">Contact US</h4>
                <div></div>
                </div>
                <div className='col-3'>
                <h4 className="text-white">Info</h4>
                <div></div>
                </div>
                <div className='col-3'>
                <h4 className="text-white">Account</h4>
                <div></div>
                </div>
                <div className='col-2'>
                <h4 className="text-white">Quick Links</h4>
                <div className='footer-links'>
                    <Link className="text-white py-2 mb-1">Laptop</Link>
                    <Link className="text-white py-2 mb-1">HeadPhones</Link>
                    <Link className="text-white py-2 mb-1">Tablet</Link>
                    <Link className="text-white py-2 mb-1">Watch</Link>
                </div>
                </div> className="text-white py-2 mb-1"
            </div>
        </div>
    </footer>
    <footer className='py-4'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()}; Powered By Developer's Corner</p>

                </div>
            </div>
        </div>
    </footer>
  </>
    
  
}

export default Footer

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
const Contact = () => {
  return <>
    <Meta title={"Contact Us"}></Meta>
    <BreadCrumb title='Contact Us'/>
    <div className='contact-wrapper py-5 home-wrapper-2'>
      <div container-xxl>
        <div className='row'>
          <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15456.432357555697!2d78.21833090604169!3d14.420932058421547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3ebb7c5835cd9%3A0x3a4854affffebccd!2sPulivendula%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1708358338706!5m2!1sen!2sin" width="600" height="450" className='border:0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Contact

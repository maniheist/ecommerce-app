import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { IoHomeSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiMiniInformationCircle } from "react-icons/hi2";
const Contact = () => {
  return <>
    <Meta title={"Contact Us"}></Meta>
    <BreadCrumb title='Contact Us'/>
    <div className='contact-wrapper py-5 home-wrapper-2'>
      <div container-xxl>
        <div className='row'>
          <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15456.432357555697!2d78.21833090604169!3d14.420932058421547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3ebb7c5835cd9%3A0x3a4854affffebccd!2sPulivendula%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1708358338706!5m2!1sen!2sin" width="600" height="450" className='border:0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between align-items-center'>
            <div><h3 className='contact-title mb-4'>Contact </h3>
            <form className='d-flex flex-column gap-15'>
              <div>
                <input type='text' className='form-control' placeholder='Name'></input>
              </div>
              <div>
                <input type='email' className='form-control' placeholder='Email'></input>
              </div>
              <div>
                <input type='tel' className='form-control' placeholder='Phone Number'></input>
              </div>
              <div>
                <textarea name='' className='form-control w-100' id='' cols="30" rows="3" placeholder='Comment'></textarea>
              </div>
              <div>
                <button className='button border-0'>Send</button>
              </div>
            </form>
            
            <div>
            <h3 className='contact-title mb-4'>Get In Touch With US </h3>
            <div>
              <ul className='ps-0'>
                <li className='mb-3 d-flex gap-15 align-items-center'><IoHomeSharp className='fs-5'/>
                <address className='mb-0 '>Hno-2323, Near village Gotur,Kadapa,Pulivendula..! </address></li>
                <li className='mb-3 d-flex gap-15 align-items-center'><FaPhoneAlt className='fs-5'/>
                <a href='tel:+91 9014624248'>+91 9014624248</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'><MdEmail className='fs-5'/>
                <a href='mailto:kmsreddy2611@gmail.com'>kmsreddy2611@gmail.com</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'><HiMiniInformationCircle className='fs-5'/>
                <p className='mb-0'>Monday-Friday 10AM-8PM</p>
                </li>
              </ul>
            </div>
            </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
}

export default Contact

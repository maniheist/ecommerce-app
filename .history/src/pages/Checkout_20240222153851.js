import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import { IoArrowBackCircle } from "react-icons/io5";
import tab1 from '../images/tab1.jpg'
const Checkout = () => {
  return (
  <>

     <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>

    <div className='checkout-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-7'>
                <div className='checkout-left-data'>
                    <h3 className='website-name'>Dev Corner</h3>
                    <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link className='text-dark' to="/cart">Cart</Link></li> &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Information</li> &nbsp; /
    <li className="breadcrumb-item active">Shipping</li> &nbsp; /
    <li className="breadcrumb-item active" aria-current="page">Payment</li>
  </ol>
</nav>
<h4 className='title'>
    Contact Information
</h4>
<p className='user-details'>
    Mani Sankar Reddy (kmsreddy2611@gmail.com)
</p>
<h4 className='mb-3'>Shipping Address</h4>
<form className='d-flex gap-15 flex-wrap justify-content-between'>

<div className='w-100'>
    <select name="" className='form-control form-select'>
    <option value='' selected disabled>Select Country</option>

    </select>
</div>
<div className='flex-grow-1'>
    <input type='text' placeholder='First Name' className='form-control'></input>
</div>
<div className='flex-grow-1'>
    <input type='text' placeholder='Last Name' className='form-control'></input>
</div>
<div className='w-100'>
    <input type='text' placeholder='Address' className='form-control'></input>
</div>
<div className='w-100'>
    <input type='text' placeholder='Apartment,suite,House etc...' className='form-control'></input>
</div>
<div className='flex-grow-1'>
    <input type='text' placeholder='City' className='form-control'></input>
</div>

<div className='flex-grow-1'><select className='form-control form-select' id=''>
    <option value='' selected disabled>Select State</option>
</select></div>
<div className='flex-grow-1'>
    <input type='text' placeholder='ZipCode' className='form-control'></input>
</div>
<div className='w-100'>
    <div className='d-flex justify-content-between align-items-center'>
        <Link to='/cart' className='text-dark'><IoArrowBackCircle className='fs-5 me-2'/> Return To Cart</Link>
        <Link to='/cart' className='button'>Continue To Shipping</Link>
    </div>
</div>

</form>
                </div>
            </div>
            <div className='col-5'>
            <div className='border-bottom py-4'>
                <div className='d-flex gap-10 mb-2 align-items-center'>
                    <div className='w-75 d-flex gap-10'>
                    <div className='w-25 position-relative'>
                    <span className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                    <img style={{'top':'-10px','right':'2px'}} className='img-fluid' src={tab1} alt='product'/></div>
                </div>
                <div>
                    <h5 className='total-price'>Honor T1 7.0 1Gb RAM 8 GB ROM 7 inch  with Wi-Fi+3G Tablet</h5>
                    <p className='total-price'>S/#B5CEDE</p>
                </div>
                <div className='flex-grow-1'>
                    <h5 className='total'>$&nbsp;100</h5>
                    
                </div>
                </div>
            </div>
            <div className='border-bottom py-4'>
            <div className='d-flex justify-content-between align-items-center'>
            <h4 className='total'>Subtotal</h4>
            <h5 className='total-price'>$ 10000</h5>

            </div>
                <div className='d-flex justify-content-between align-items-center'>
            <p className='mb-0 total' >Shipping</p>
            <p className='mb-0 total-price'>$ 10000</p>

            </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
            <h4 className='total'>Total</h4>
            <h5 className='total-price'>$ 10000</h5>

            </div>
        </div>
    </div>
    </div>
  </>
  );
}

export default Checkout

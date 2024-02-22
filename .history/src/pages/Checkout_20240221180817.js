import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const Checkout = () => {
  return <>

     <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>

    <div className='checkout-wrapper'>
        <div className='row'>
            <div className='col-7'></div>
            <div className='col-5'></div>
            <div></div>
        </div>
    </div>
  </>
}

export default Checkout

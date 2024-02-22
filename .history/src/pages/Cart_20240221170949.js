import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const Cart = () => {
  return <>

      <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>
    <section className='cart-wrapper home-wrapper-2 py-5'></section>
  </>
}

export default Cart

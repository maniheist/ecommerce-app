import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const Checkout = () => {
  return <>

     <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>
  </>
}

export default Checkout

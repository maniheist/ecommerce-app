import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const Checkout = () => {
  return (
  <>

     <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>

    <div className='checkout-wrapper'>
        <div className='row'>
            <div className='col-7'>
                <div className='checkout-left-data'>
                    <h3 className='website-name'>Dev Corner</h3>
                    <nav style={{"--bs-breadcrumb-divider: '>'"}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>
                </div>
            </div>
            <div className='col-5'></div>
            <div></div>
        </div>
    </div>
  </>
  );
}

export default Checkout

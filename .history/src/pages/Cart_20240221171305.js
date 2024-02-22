import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const Cart = () => {
  return <>

      <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>
    <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header d-flex justify-content-between align-items center'>
                    <h4>Product</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Total</h4>

                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default Cart

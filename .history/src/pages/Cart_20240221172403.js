import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import watch from '../images/watch.jpg';
const Cart = () => {
  return <>

      <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>
    <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-items center'>
                    <h4 className='cart-col-1'>Product</h4>
                    <h4 className='cart-col-2'>Price</h4>
                    <h4 className='cart-col-3'>Quantity</h4>
                    <h4 className='cart-col-4'>Total</h4>

                    </div>
                    <div className='cart-data py-3 d-flex justify-content-between align-items center'>
                    <div className='cart-col-1 d-flex align-items-center'>
                        <div><img src={watch} className='img-fluid' alt='watch'/></div>
                        <div><h5 className='title'>Casio</h5>
                        <p className='color'>sad</p>
                        <p className='size'>gdf</p>
                        </div>
                    </div>
                    <div className='cart-col-2'></div>
                    <div className='cart-col-3'></div>
                    <div className='cart-col-4'></div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default Cart

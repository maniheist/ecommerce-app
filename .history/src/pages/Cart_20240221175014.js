import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import watch from '../images/watch.jpg';
import { MdDelete } from "react-icons/md";
const Cart = () => {
  return <>

      <Meta title={"Cart"}></Meta>
    <BreadCrumb title='Cart'/>
    <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                    <h4 className='cart-col-1'>Product</h4>
                    <h4 className='cart-col-2'>Price</h4>
                    <h4 className='cart-col-3'>Quantity</h4>
                    <h4 className='cart-col-4'>Total</h4>

                    </div>
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                    <div className='cart-col-1 gap-15 d-flex align-items-center'>
                        <div className='w-25'><img src={watch} className='img-fluid' alt='watch'/></div>
                        <div className='w-75'><p>Casio</p>
                        <p >Size: S</p>
                        <p >Color: #A85A5A</p>
                        </div>
                    </div>
                    <div className='cart-col-2'>
                        <h5 className='price'><span>$ 99</span> &nbsp; <strike style={{'color':'red'}}>$ 199</strike></h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                        <div><input type='number' min={1} max={10} className='form-control'></input></div>

                        <div className='fs-5'>
                            <MdDelete className="text-danger " style={{"cursor":"pointer"}} />
                        </div>
                    </div>
                    <div className='cart-col-4'>
                    <h5 className='price'><span>$ 99</span> </h5>

                    </div>

                    </div>
                      
                </div>
                <div className='col-12 py-2 mt-4'>
                <div className='d-flex justify-content-between'>
                <Link to='/product' className='button'>Continue To Shopping</Link>
                <div>
                    <h4>SubTotal:$ 99</h4>
                    <p>Taxes And Shipping Calculated At Checkout</p>
                    <Link to='/checkout' className='button'>Checkout</Link>
                </div>

                </div>
                </div>
            </div>
        </div>
    </section>
  </>
}

export default Cart

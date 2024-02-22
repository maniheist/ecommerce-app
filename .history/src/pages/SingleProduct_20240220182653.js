import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';

import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
const SingleProduct = () => {
    const [orderedProduct , setorderedProduct] = useState(true);
  return (
    <>
        <Meta title={"Product Name"}></Meta>
    <BreadCrumb title='Product Name'/>
    <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'></div>
            </div>
        </div>
    </div>
    <div className='description-wrapper py-5 home-wrapper-2'>
         <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <div className='bg-white p-3'>
                    <h4 className=''>Description</h4>
                    <p>
                        Em suma, a beleza no Brasil não se resume apenas à aparência física, mas também à riqueza de sua cultura, à diversidade de seu povo e às paisagens naturais de tirar o fôlego que tornam o país verdadeiramente belo.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
    <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='review-inner-wrapper'>
                        <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex align-items-center gap-10'>
                                <ReactStars 
                                count={5}
            size={24}
            value="3.5"
            isHalf={true}
            edit={true}
            emptyIcon={<i className="far fa-star" ></i>}
            halfIcon={<i className="far fa-star-half" ></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
                            />
                            <p className='mb-0'>Based on 2 Reviews</p>
                            </div>
                        </div>
                        {
                            orderedProduct&&(
                                <div>
                            <a className='text-dark text-decoration-underline' href=''>Write A Review</a>
                        </div>
                            )
                        }
                    </div>
                    <div className='review-form'>
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
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Popular Products</h3>
        </div>
          
          
        </div>

        <div className='row'>
       
       
          <ProductCard />
          
        </div>
      </div>
    </section>

    </>
  )
}

export default SingleProduct

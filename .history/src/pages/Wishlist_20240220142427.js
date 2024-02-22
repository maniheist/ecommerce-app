import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
const Wishlist = () => {
  return <>
  <Meta title={"Wishlist"}></Meta>
    <BreadCrumb title='Wishlist'/>
    <div className='wishlist-wrapper home-wrapper-2 py-5 '>\
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                    <div className='wishlist-card-image '>
                    <img src='images/watch.jpg' className='img-fluid w-100' alt=''/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


  </>
}

export default Wishlist

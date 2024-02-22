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
            <div className='col3'></div>
        </div>
    </div>
    </div>


  </>
}

export default Wishlist

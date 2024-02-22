import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
const CompareProduct = () => {
  return <>
    <Meta title={"Compare Products"}></Meta>
    <BreadCrumb title='Compare Products'/>
    <div className='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card'>
                        <div className='product-card-image'>
                            <img src='images/watch.jpg' alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </>
}

export default CompareProduct

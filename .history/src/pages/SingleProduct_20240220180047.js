import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
const SingleProduct = () => {
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
                    <p className='bg-white p-3'>
                        Em suma, a beleza no Brasil não se resume apenas à aparência física, mas também à riqueza de sua cultura, à diversidade de seu povo e às paisagens naturais de tirar o fôlego que tornam o país verdadeiramente belo.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'></div>
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

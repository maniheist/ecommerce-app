import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
import Meta from '../components/Meta';

const OurStore = () => {
  return <>


  
    <Meta title={"Our Store"}></Meta>
    <BreadCrumb title='Our Store'/>
    <div className='store-wrapper home-wrapper-2 py-5'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-3'>
      <div className="filter-card mb-3"><h3 className='filter-title'>Shop By Categories</h3>
      <div>
        <ul className='ps-0'>
        <li>Watch</li>
        <li>TV</li>
        <li>Camera</li>
        <li>Laptop</li>
        </ul>
        
        
        
      </div>
      </div>
      <div className="filter-card mb-3">
      <h3 className='filter-title'>Filter By</h3>
      <div>
        <h5 className='sub-title'>Availability</h5>
        <div className='form-check'>
        <input className='form-check-input' type="check-box" value="" id=""></input>
          <label className='form-check-label'></label>
        </div>
      </div>


      </div>
      <div className="filter-card mb-3"><h3 className='filter-title'>Product Tags</h3></div>
      <div className="filter-card mb-3"><h3 className='filter-title'>Random Product</h3></div>
    </div>
    <div className='col-9'></div>
  </div>
</div>
    </div>

  </>
}

export default OurStore;

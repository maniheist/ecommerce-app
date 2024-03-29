import React from 'react'
import {Link} from 'react-router-dom';
const BreadCrumb = (props) => {
    const {title}=props;
  return (
    <div className='breadcrumb py-4'>
      <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <p><Link to='/'>Home / {title}</Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
const Blog = () => {
  return <>
    <Meta title={"Blogs"}></Meta>
    <BreadCrumb title='Blogs'/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-9'></div>
            </div>
        </div>
    </div>
  </>
}

export default Blog;

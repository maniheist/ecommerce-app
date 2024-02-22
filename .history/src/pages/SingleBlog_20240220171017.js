import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
const SingleBlog = () => {
  return <>

    <Meta title={"Dynamic Blog Name"}></Meta>
    <BreadCrumb title='Dynamic Blog Name'/>
    <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
               
                <div className='col-12'>
                    <div className='single-blog-card'>
                        <h3 className='title'>
                            A Beautiful Sunday Morning Renaissance
                        </h3>
                        <img src='images/blog-1.jpg' className='img-fluid w-100 my-4' alt=''/>
                        <p>
                            You're only as good as your last collection, which is an enormous pressure.I think there is something about luxury-
                            it's not something people need, but it's what they want.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default SingleBlog

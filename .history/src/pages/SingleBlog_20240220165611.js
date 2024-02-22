import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
const SingleBlog = () => {
  return <>

    <Meta title={"Dynamic Blog Name"}></Meta>
    <BreadCrumb title='Dynamic Blog Name'/>
  </>
}

export default SingleBlog

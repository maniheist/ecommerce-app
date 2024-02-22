import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const SingleProduct = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"}></Meta>
    <BreadCrumb title='Dynamic Blog Name'/>
    </>
  )
}

export default SingleProduct

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
const OurStore = () => {
  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Our Store</title>
            </Helmet>

    <BreadCrumb title='Our Store'/>
  </>
}

export default OurStore;

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Helmet} from "react-helmet";
const OurStore = () => {
  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

    <BreadCrumb title='Our Store'/>
  </>
}

export default OurStore

import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const PrivacyPolicy = () => {
  return <>
    <Meta title={"Privacy Policy"}></Meta>
    <BreadCrumb title='Privacy Policy'/>
  </>
}

export default PrivacyPolicy

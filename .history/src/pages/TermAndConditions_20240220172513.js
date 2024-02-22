import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const TermAndConditions = () => {
  return(  <>
    <Meta title={"Term And Conditions"}></Meta>
    <BreadCrumb title='Term And Conditions'/>
  </>
  );
}

export default TermAndConditions

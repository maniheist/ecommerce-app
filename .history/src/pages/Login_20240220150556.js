import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
const Login = () => {
  return <>
  <Meta title={"Login"}></Meta>
    <BreadCrumb title='Login'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'></div>
    </div>


  </>
}

export default Login

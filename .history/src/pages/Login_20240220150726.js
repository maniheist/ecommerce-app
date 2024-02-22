import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
const Login = () => {
  return <>
  <Meta title={"Login"}></Meta>
    <BreadCrumb title='Login'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='login-card'>
                    <h3>Login</h3>
                    <form type="">
                        <div><input type='form'></input></div>
                    </form>
                </div>
            </div>
        </div>
    </div>


  </>
}

export default Login

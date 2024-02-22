import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
const Login = () => {
  return <>
  <Meta title={"Login"}></Meta>
    <BreadCrumb title='Login'/>
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Login</h3>
                    <form className='d-flex flex-column gap-15'>
                        <div><input type='email' name='email' placeholder='Email'  className='form-control'></input></div>
                        <div className='mt-1'><input type='password' name='password' placeholder='Password' className='form-control'></input></div>
                        <div>
                            <Link to='/forgot-password'>Forgot Password?</Link>
                            <div className='mt-3 d-flex justify-content-between align-items-center gap-15'>
                                <button className='button border-0' type='submit'>Login</button>
                                <Link to='/signup' className='button border-0 signup'>Signup</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>


  </>
}

export default Login

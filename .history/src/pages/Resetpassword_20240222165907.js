import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import Container from '../components/Container';
const Resetpassword = () => {
  return <>
    <Meta title={"Reset Password"}></Meta>
    <BreadCrumb title='Reset Password'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Reset Password</h3>
                    <form className='d-flex flex-column gap-15'>
                    

                        <div className='mt-1'><input type='password' name='password' placeholder='Password'  className='form-control'></input></div>
                        <div className='mt-1 mb-2'><input type='password' name='confpassword' placeholder='Confirm Password' className='form-control'></input></div>
                        <div>
                            <div className='mt-3 d-flex justify-content-between flex-column align-items-center gap-15'>
                                <button className='button border-0'>Ok</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        </Container>
  </>
}

export default Resetpassword

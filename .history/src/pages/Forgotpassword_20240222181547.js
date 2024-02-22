import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/Custominput';


const Forgotpassword = () => {
  return <>

    <Meta title={"Forgot Password"}></Meta>
    <BreadCrumb title='Forgot Password'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <p className='text-center mt-2 mb-3'>We Will Send You An Email To Reset Your Password</p>
                    <form className='d-flex flex-column gap-15'>
                    <CustomInput type='email' name='email' placeholder='Email'  />
                        <div>
                            <div className='mt-3 d-flex justify-content-between flex-column align-items-center gap-15'>
                                <button className='button border-0'>Submit</button>
                                <Link to="/login">Cancel</Link>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        </Container>
  </>
}

export default Forgotpassword

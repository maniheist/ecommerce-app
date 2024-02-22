import React from 'react'

const Footer = () => {
  return <>
    <footer className='py-3'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-5'>
                    <div className='footer-top-data d-flex gap-30 align-items-center'>
                        <img src="images/newsletter.png" alt="newsletter" />
                        <h2 className='text-white'>Sign Up For News Letter</h2>
                    </div>
                </div>
                <div className='col-7'>
                    <div className="input-group">
  <input type="text" className="form-control py-2" placeholder="Search Products Here..." aria-label="Search Products Here..." aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
</div>
                </div>
            </div>
        </div>
    </footer>
    <footer className='py-3'></footer>
    <footer className='py-4'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()}; Powered By Developer's Corner</p>

                </div>
            </div>
        </div>
    </footer>
  </>
    
  
}

export default Footer

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
const Wishlist = () => {
  return <>
  <Meta title={"Wishlist"}></Meta>
    <BreadCrumb title='Wishlist'/>
    <div className='wishlist-wrapper home-wrapper-2 py-5 '>\
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                    <div className='wishlist-card-image '>
                    <img src='images/watch.jpg' className='img-fluid w-100' alt=''/>
                        
                    </div>
                    <div className='py-3 px-3'><h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet.
</h5>
                    <h6 className='price'><span style={{"color":"red"}}>$ 99.00</span>&nbsp; <strike>$ 199.00</strike></h6></div>
                    
                </div>
            </div>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                    <div className='wishlist-card-image '>
                    <img src='images/tab.jpg' className='img-fluid w-100' alt=''/>
                        
                    </div>
                    <div className='py-3 px-3'><h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet.
</h5>
                    <h6 className='price'><span style={{"color":"red"}}>$ 99.00</span>&nbsp; <strike>$ 199.00</strike></h6></div>
                    
                </div>
            </div>
            <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                    <div className='wishlist-card-image '>
                    <img src='images/speaker2.jpg' style={{"height":"307px"}} className='img-fluid w-200' alt=''/>
                        
                    </div>
                    <div className='py-3 px-3'><h5 className='title' >Sony EXTRA BASS Portable Splash-Proof Wireless
</h5>
                    <h6 className='price'><span style={{"color":"red"}}>$ 99.00</span>&nbsp; <strike>$ 199.00</strike></h6></div>
                    
                </div>
            </div>
             <div className='col-3'>
                <div className='wishlist-card position-relative'>
                    <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />

                    <div className='wishlist-card-image '>
                    <img src='images/speaker2.jpg' style={{"height":"307px"}} className='img-fluid w-200' alt=''/>
                        
                    </div>
                    <div className='py-3 px-3'><h5 className='title' >Casotime Watches for Men Analog Quartz Mens Watches Chronograph 30M Waterproof 
</h5>
                    <h6 className='price'><span style={{"color":"red"}}>$ 99.00</span>&nbsp; <strike>$ 199.00</strike></h6></div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>


  </>
}

export default Wishlist

import React from 'react'
import {Link} from 'react-router-dom';
const Home = () => {
  return <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative p-3'>
            <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
            <div className='main-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS...</h4>
              <h5>IPAD S13+PRO</h5>
              <p>FROM $999.99!! <br /> OR $41.67/MO..</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          
          
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
             <div className='small-banner position-relative p-3'>
            <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>BEST SALE</h4>
              <h5>LAPTOPS MAX</h5>
              <p>FROM $1699.99!!<br />OR $64.67/MO..</p>
            </div>
          
          </div>
          
          
          
          <div className='small-banner position-relative p-3'>
            <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>NEW ARRIVAL</h4>
              <h5>BUY IPAD AIR</h5>
              <p>FROM $599.99!!<br />OR $49.91/MO.FOR 12 MO.*</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          
          </div>
          <div className='small-banner position-relative p-3'>
            <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>NEW ARRIVAL</h4>
              <h5>BUY IPAD AIR</h5>
              <p>FROM $599.99!!<br />OR $49.91/MO.FOR 12 MO.*</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          
          </div>
          <div className='small-banner position-relative p-3'>
            <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>NEW ARRIVAL</h4>
              <h5>BUY IPAD AIR</h5>
              <p>FROM $599.99!!<br />OR $49.91/MO.FOR 12 MO.*</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Home

import React from 'react'
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  return <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative'>
            <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
            <div className='main-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS...</h4>
              <h5>IPAD S13+PRO</h5>
              <p>FROM $999.99!! <br /> OR $41.67/MO..</p>
            </div>
          
          
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
             <div className='small-banner position-relative'>
            <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>BEST SALE</h4>
              <h5>LAPTOPS MAX</h5>
              <p>FROM $1699.99!!<br />OR $64.67/MO..</p>
            </div>
          
          </div>
          
          
          
          <div className='small-banner position-relative'>
            <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>NEW ARRIVAL</h4>
              <h5>BUY IPAD AIR</h5>
              <p>FROM $599.99!!<br />OR $49.91/MO.FOR 12 MO.*</p>
            </div>
          
          </div>
          <div className='small-banner position-relative'>
            <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>NEW ARRIVAL</h4>
              <h5>BUY IPAD AIR</h5>
              <p>FROM $599.99!!<br />OR $49.91/MO.FOR 12 MO.*</p>
            </div>
          
          </div>
          <div className='small-banner position-relative'>
            <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='small banner' />
            <div className='small-banner-content position-absolute'>
              <h4>NEW ARRIVAL</h4>
              <h5>BUY IPAD AIR</h5>
              <p>FROM $599.99!!<br />OR $49.91/MO.FOR 12 MO.*</p>
            </div>
          
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center gap-15'><img src="images/service.png" alt="services" />
            <div>
            <h6>Free Shipping</h6>
            <p className='mb-0'>From all orders over $99</p>
            </div>
            </div>
            <div className='d-flex align-items-center gap-15'><img src="images/service-02.png" alt="services" />
            <div>
            <h6>Daily Surprise Offers</h6>
            <p className='mb-0'>Save up to 25% off</p>
            </div>
            </div>
            <div className='d-flex align-items-center gap-15'><img src="images/service-03.png" alt="services" />
            <div>
            <h6>Support 24/7</h6>
            <p className='mb-0'>Shop with an expert</p>
            </div>
            </div>
            <div className='d-flex align-items-center gap-15'><img src="images/service-04.png" alt="services" />
            <div>
            <h6>Affordable Prices</h6>
            <p className='mb-0'>Get Factory direct price</p>
            </div>
            </div>
            <div className='d-flex align-items-center gap-15'><img src="images/service-05.png" alt="services" />
            <div>
            <h6>Secure Payments</h6>
            <p className='mb-0'>100% Protected Payments</p>
            </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='hame-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
          <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
          <div className='d-flex gap align-items-center'>
            <div >
              <h6>Music & Gaming</h6>
              <p>10 Items</p>
            </div>
            <img src='images/headphone.jpg' alt='camera'/>

          </div>
          <div className='d-flex gap align-items-center'>
            <div >
              <h6>Cameras</h6>
              <p>10 Items</p>
            </div>
            <img src='images/camera.jpg' alt='camera'/>

          </div>
          <div className='d-flex gap align-items-center'>
            <div >
              <h6>Smart TV</h6>
              <p>10 Items</p>
            </div>
            <img src='images/tv.jpg' alt='camera'/>

          </div>
          <div className='d-flex gap align-items-center'>
            <div >
              <h6>Smart Watches</h6>
              <p>10 Items</p>
            </div>
            <img src='images/watch.jpg' alt='camera'/>

          </div>

            <div className='d-flex gap align-items-center'>
            <div >
              <h6>Music & Gaming</h6>
              <p>10 Items</p>
            </div>
            <img src='images/headphone.jpg' alt='camera'/>

          </div>
          <div className='d-flex gap align-items-center'>
            <div >
              <h6>Cameras</h6>
              <p>10 Items</p>
            </div>
            <img src='images/camera.jpg' alt='camera'/>

          </div>
          <div className='d-flex gap align-items-center'>
            <div >
              <h6>Smart TV</h6>
              <p>10 Items</p>
            </div>
            <img src='images/tv.jpg' alt='camera'/>

          </div>
          <div className='d-flex gap align-items-center'>
            <div >
              <h6>Smart Watches</h6>
              <p>10 Items</p>
            </div>
            <img src='images/watch.jpg' alt='camera'/>

          </div>

          </div>

          </div>
        </div>
      </div>
    </section>

<section className='featured-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Featured Collection</h3>
        </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
      </div>
    </section>

<section className='famous-wrapper py-5 home-wrapper-2'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/famous-01.webp' className='img-fluid' alt='famous'/>
          <div className='famous-content position-absolute'>
            <h5>Big Screen</h5>
          <h6>Smart Watch Series 7</h6>
          <p>From $399 or $16.62/mo.for 24 mo.*</p>
          </div>
        </div>
        
      </div>
      <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/famous-02.webp' className='img-fluid' alt='famous'/>
          <div className='famous-content position-absolute'>
            <h5 className='text-dark'>Studio Display</h5>
          <h6 className='text-dark'>600 nits of brightness</h6>
          <p className='text-dark'>27-inch 5K Retina display</p>
          </div>
        </div>
        
      </div>
       <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/famous-03.webp' className='img-fluid' alt='famous'/>
          <div className='famous-content position-absolute'>
            <h5 className='text-dark'>SmartPhones</h5>
          <h6 className='text-dark'>Smartphone 13 Pro</h6>
          <p className='text-dark'>Now in Green From $999.00 or %41.67/mo for 24mo.Footnote*</p>
          </div>
        </div>
        
      </div>

       <div className='col-3'>
        <div className='famous-card position-relative'>
        <img src='images/famous-04.webp' className='img-fluid' alt='famous'/>
          <div className='famous-content position-absolute'>
            <h5 className='text-dark'>home speakers</h5>
          <h6 className='text-dark'>Room-filling sound.</h6>
          <p className='text-dark'>From $699.00/mo.for 12mo.</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

<section className='special-wrapper py-5 home-wrapper-2'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Special Products</h3>
      </div>

    </div>

    <div className='row'>
      <SpecialProduct />
      <SpecialProduct />
      <SpecialProduct />
      <SpecialProduct />
    </div>
  </div>
</section>

<section className='popular-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Popular Products</h3>
        </div>
          
          
        </div>

        <div className='row'>
       
       
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

    <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
              <div className="mx-4 w-25">
                <img src='images/brand-01.png' alt='brand' />
              </div>

              <div className="mx-4 w-25">
                <img src='images/brand-02.png' alt='brand' />
              </div>
              <div>
                <img src='images/brand-03.png' alt='brand' />
              </div>
              <div className="mx-4 w-25">
                <img src='images/brand-04.png' alt='brand' />
              </div>
              <div className="mx-4 w-25">
                <img src='images/brand-05.png' alt='brand' />
              </div>
              <div className="mx-4 w-25">
                <img src='images/brand-06.png' alt='brand' />
              </div>
              <div className="mx-4 w-25">
                <img src='images/brand-07.png' alt='brand' />
              </div>
              <div className="mx-4 w-25">
                <img src='images/brand-08.png' alt='brand' />
              </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>


    


    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-12'>
          <h3 className='section-heading'>Our Latest Blogs</h3>
        </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>

     
  </>
}

export default Home

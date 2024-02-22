import React from 'react'
import ReactStars from 'react-rating-stars-component';
import {Link,useLocation} from 'react-router-dom';
import prodcompare from '../images/prodcompare.svg'
import wish from '../images/wishlist.svg';
import wishlist from '../images/wishlist.svg'
import watch from '../images/watch.jpg'
import watch2 from '../images/catbanner-02.jpg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'
const ProductCard = (props) => {
  const {grid } = props
  let location=useLocation();

  return <>

    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
    <Link to=':id' className='product-card position-relative'>

    <div className='wishlist-icon position-absolute'>
        <button><img src={wish} alt='wishlist' /></button>
    </div>
      <div className='product-image'>
      <img src={watch} className='img-fluid' alt='product image' />
      <img src={watch2} className='img-fluid' alt='product image' />

       </div>
        <div className='product-details'>
            <h6 className='brand'>Casio</h6>
            <h5 className='product-title'>
                Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
            count={5}
            size={24}
            value="3.5"
            isHalf={true}
            edit={true}
            emptyIcon={<i className="far fa-star" ></i>}
            halfIcon={<i className="far fa-star-half" ></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>Um símbolo icônico da beleza brasileira é o Carnaval brasileiro, especialmente o Carnaval do Rio de Janeiro...</p>

            <p className='price text-dark'>$199.00</p>
       </div>

       <div className='action-bar position-absolute'>
        <div className='d-flex flex-column gap-15'>
        <Link><img src={prodcompare} alt='compare' /></Link>

        <Link><img src={view} alt='view' /></Link>
        <Link><img src={addcart} alt='addcart' /></Link>




        </div>
       </div>


      </Link>
    </div>

    <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
    <Link className='product-card position-relative'>

    <div className='wishlist-icon position-absolute'>
        <Link><img src={wishlist} alt='wishlist' /></Link>
    </div>
      <div className='product-image'>
      <img src={watch} className='img-fluid' alt='product image' />
      <img src={watch2} className='img-fluid' alt='product image' />

       </div>
        <div className='product-details'>
            <h6 className='brand'>Casio</h6>
            <h5 className='product-title'>
                Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
            count={5}
            size={24}
            value="3.5"
            isHalf={true}
            edit={true}
            emptyIcon={<i className="far fa-star" ></i>}
            halfIcon={<i className="far fa-star-half" ></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>Um símbolo icônico da beleza brasileira é o Carnaval brasileiro, especialmente o Carnaval do Rio de Janeiro...</p>
            <p className='price text-dark'>$199.00</p>
       </div>

       <div className='action-bar position-absolute'>
        <div className='d-flex flex-column gap-15'>
        <Link><img src={prodcompare} alt='compare' /></Link>

        <Link><img src={view} alt='view' /></Link>
        <Link><img src={addcart} alt='addcart' /></Link>




        </div>
       </div>


      </Link>
    </div>

  
  </>
    
    
  
}

export default ProductCard

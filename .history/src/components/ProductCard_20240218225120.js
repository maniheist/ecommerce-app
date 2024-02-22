import React from 'react'
import ReactStars from 'react-rating-stars-component';
const ProductCard = () => {
  return (
    <div className='col-3'>
    <div className='product-card position-relative'>
      <div className='product-image'>
      <img src='images/watch.jpg' alt='product image' />
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
            <p className='price'>$199.00</p>
       </div>
      </div>
    </div>
  );
}

export default ProductCard

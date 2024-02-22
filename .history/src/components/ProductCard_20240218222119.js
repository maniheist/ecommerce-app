import React from 'react'

const ProductCard = () => {
  return (
    <div className='col-3'>
    <div className='product-card'></div>
      <div className='product-image'>
      <img src='images/watch.jpg' alt='product image' />
        <div className='product-details'>
            <h6 className='brand'>Casio</h6>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

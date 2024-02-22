import React from 'react'

const ProductCard = () => {
  return (
    <div className='col-3'>
    <div className='product-card'></div>
      <div className='product-image'>
      <img src='images/watch.jpg' alt='product image' />
        <div className='product-details'>
            <h6 className='brand'>Casio</h6>
            <h5 className='product-title'>
                Kids headphones bulk 10 pack multi colored for students
            </h5>
            <p className='price'>$199.00</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

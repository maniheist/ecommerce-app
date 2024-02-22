import React from 'react'
import {Link} from "react-router-dom"
const BlogCard = () => {
  return (
      <div className='blog-card'>
        <div className='card-image'>
            <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog'/>
        </div>
        <div className='blog-content'>
            <p className='date'>1 Dec, 2024</p>
            <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
            <p className='desc'>a beleza está presente de muitas formas. O país é conhecido por suas praias deslumbrantes, pelos vibrantes carnavais e pela diversa flora e fauna, todos contribuindo para sua reputação como um destino belo.</p>
            <Link to="" className='button'>Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard

import React from 'react'

const Custominput = (props) => {
    const{type,name,placeholder,classname}=props
  return (
    <div>
    <input type='text' 
    name='name' 
    placeholder='Name'  
    className='form-control'>

    </input>
    </div>

  )
}

export default Custominput

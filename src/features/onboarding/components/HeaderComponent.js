import React from 'react'
import logo from '../../../assets/logo.svg';

function HeaderComponent() {
  return (
    <div className='flex justify-center items-center '>
        <img className='h-12 md:h-14 lg:h-20' src={logo} alt="logo" />
        <h1 className='text-xl md:text-2xl lg:text-3xl font-medium'>Eden</h1>
  </div>
  )
}

export default HeaderComponent

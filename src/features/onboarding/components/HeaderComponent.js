import React from 'react'
import logo from '../../../assets/logo.svg';

function HeaderComponent() {
  return (
    <div className='flex justify-center items-center '>
        <img className='h-16' src={logo} alt="logo" />
        <h1 className='text-3xl'>Eden</h1>
  </div>
  )
}

export default HeaderComponent

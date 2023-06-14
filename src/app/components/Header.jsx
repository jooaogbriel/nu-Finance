'use client'
import React from 'react'
import Image from 'next/image'
import logo from '../image/white-logo.png'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center max-w-full mx-auto bg-black '>
        <Image src={logo} alt="" className='w-40 h-20 object-contain ml-20' />
    </div>
  )
}

export default Header

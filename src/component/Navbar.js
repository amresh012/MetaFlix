/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isLoggedIn , setIsLggedIn] = useState(false)
  return (
    <div className='flex items-center justify-between w-full absolute lg:px-12 lg:py-4 '>
        <h1 className='text-red-600 lg:text-4xl text-2xl font-bold cursor-pointer pl-2'>FILMFLIX</h1>
        {isLoggedIn !== true ? <div className='flex items-center justify-center w-auto'>
           <button className='bg-red-700  p-2 rounded-md cursor-pointer text-white'>Sign In</button>
            <button className='text-red-500 lg:border-none border border-red-500 font-bold m-5 cursor-pointer bottom-1 bg-white/20 backdrop-blur-md p-2 rounded-md'>Sign In</button> 
 
        </div>:<Link to='../pages/Dashboard.js'>Account</Link>}
    </div>

  )
}

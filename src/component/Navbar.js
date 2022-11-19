import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>FILMFLIX</h1>
        <div>
           <button className='bg-red-700 px-6 py-2 rounded-md cursor-pointer'>Sign In</button>
            <button className='text-white font-bold m-5 cursor-pointer bottom-1'>Sign In</button> 
 
        </div>
    </div>

  )
}

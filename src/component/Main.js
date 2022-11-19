import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import request from './Request';

export const Main = () => {
    const[movies , setMovie] = useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() =>{

        axios.get(request.requestPopular).then((response)=> (
            setMovie(response.data.results)
        ))
    },[]);
    const tuncatestring = (str,num) => {
        if(str?.length>num)
        {
            return str.slice(0, num)
        }else{
            return str;
        }
    };
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550] bg-gradient-to-r from-white'></div>
              <img className='w-full h-full object-cover mt-1' 
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
              alt={movie?.title}/>
            </div>
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl ml-5'>{movie?.title}</h1>
            <div className='m-4'>
              <button className='border bg-red-600 text-white border-gray-400 py-3 px-5 m-1 rounded-md shadow-2xl'>Play</button>
              <button className='border text-white border-gray-400 py-3 px-5 m-1 rounded-md shadow-2xl'>Watch Later</button>
            </div>
            <p className='text-red-100 text-sm ml-5'>Released :{movie?.release_date}</p>
            <p className='w-full md:max--w[60%] lg:max-w-[50%] xl:max-w-[35%] text-gray-100 ml-5'>{tuncatestring(movie?.overview,150)}</p>

        </div>
    </div>
  )
}

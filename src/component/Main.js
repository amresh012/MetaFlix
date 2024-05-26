import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import request from './Request';
import { CiShare1 } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";


export const Main = () => {
    const[movies , setMovie] = useState([])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    useEffect(() =>{

        axios.get(request.requestTrending).then((response)=> (
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
      <div className="h-auto ">
          <div className="h-screen w-screen">
        <img
          className="w-full h-full object-cover bg-center "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="movie-info px-2 absolute top-[30%] flex flex-col items-start justify-around gap-2 lg:ml-5">
        <span className='text-rose-100'>Trending Today</span>
        <h1 className="text-4xl lg:text-6xl text-red-500 font-extrabold">{movie?.title}</h1>
        <div className="space-x-2 flex text-white w-full">
          <button className="bg-red-500 px-6 py-2 rounded-md flex items-center gap-1">
            Play
            <CiShare1/>
          </button>
          <button className="border px-6 py-2 flex items-center gap-1 rounded-md bg-white/20 backdrop-blur-md">
            <FaPlusCircle/>
            Add to favourites
          </button>
        </div>
        <p className="text-rose-50">Released :{movie?.release_date}</p>
        <p className="lg:w-1/2 text-zinc-300 font-thin">{tuncatestring(movie?.overview, 150)}</p>
      </div>
      <div className=''>
        
      </div>
    </div>
  );
}

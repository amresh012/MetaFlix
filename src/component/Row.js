/* eslint-disable no-undef */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovie] = useState([]);
  const tuncatestring = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchURL]);
  console.log(movies)
  return (
    <>
      <h2 className="text-white font-bold md:text-4xl px-12 py-4 w-screen">{title}</h2>
      <div className="relative flex items-center justify-self-end ">
        <div
          id={`slider`}
          className="flex flex-wrap  items-center justify-start p-4"
        >
          {movies.map((item, id) => {
            return (
              <div
                className="lg:max-w-[30vw] m-2 relative "
                key={id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item.title}
                  className=""
                />
                <div className=" items-start flex flex-col gap-2 p-4">
                  <h1 className="text-white text-2xl font-bold">
                    {item.title}
                  </h1>
                  <span className="text-zinc-100 font-light text-sm">
                    Release Date: {item.release_date}
                  </span>
                  <p className="text-zinc-100 font-light text-sm">
                    {tuncatestring(item?.overview, 550)}...
                  </p>
                </div>
                <div className=" flex items-center justify-center gap-2 px-4 w-full">
                  <button className=" flex w-full  items-center justify-center gap-2 active:scale-95 bg-white p-2 rounded-md hover:bg-black border hover:border-white hover:text-white duration-300 mt-2">
                    Add To Watchlist
                    <FaHeart className="animate-pulse" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

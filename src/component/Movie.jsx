import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item, id }) => {
  const [like, setLike] = useState(false);
  return (
    <div
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-
[280px] inline-block cursor relative p-2"
    >
      <img
        className="w-full h-auto block"
        src={`${
          !item?.backdrop_path
            ? "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            : "https://image.tmdb.org/t/p/w500" + item?.backdrop_path
        }`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;

"use client"
import React from 'react'
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import Image from 'next/image';

function Card({result,key}) {
  return (
    <div key={key} className="cursor-pointer p-3 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200 group">
    <Link href={`/movie/${result.id}`}>
      <Image
        src={
          `https://image.tmdb.org/t/p/original/${
          result?.backdrop_path || result?.poster_path
        }`}
        
        width={500}
        height={300}
        
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        style={{
          maxWidth:"100%",
          height:"auto",

        }}
        // placeholder="blur"
        // blurDataURL="/spinner.svg"
        alt="image is not available"
      ></Image>

      <div className="p-2">
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <h2 className="truncate text-lg font-bold">
          {result.title || result.name}
        </h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
        </p>
      </div>
    </Link>
  </div>

  )
}

export default Card
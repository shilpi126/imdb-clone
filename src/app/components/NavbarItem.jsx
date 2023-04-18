"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"

function NavbarItem({title, param}) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link 
    className={`m-2 hover:text-amber-600 font-semibold pl-5 ${
      genre && genre === param && 
      "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
    } `}
    href={`/?genre=${param}`}>{title}</Link >
  )
}

export default NavbarItem
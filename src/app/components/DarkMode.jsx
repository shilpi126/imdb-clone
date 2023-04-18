"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";

function DarkMode() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;

      return (


    <>
        {mounted && 
        (currentTheme === "dark" ? (
            <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
            />
        ):(
            <BsMoonStarsFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
            />
        )
        )
        }
        </>


  )
}

export default DarkMode
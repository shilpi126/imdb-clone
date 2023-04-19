import React from 'react'
import{BiLoaderAlt} from "react-icons/bi"

function loading() {
  return (
  
    <div className="flex justify-center items-center mt-60">
      <BiLoaderAlt className=' h-10 w-10  text-amber-600 ' />
    </div>
     
  )
}

export default loading
import React from 'react'
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  
  return (

    <div className="flex flex-col justify-center items-center">
      <div className="grid rounded bg-primary text-primary-content place-content-center">
        <img src={location.state.src} alt="Camp Ground" className='rounded-xl object-cover h-4/5 w-full m-0 p-0'/>
      </div> 
      <div className="grid place-content-center m-0 p-0 my-10">
        <h1 className='font-bold uppercase text-2xl -mt-20'>{location.state.title}</h1> 
        <p className='lg:px-96 md:px-40 sm:px-20 text-center mb-20 leading-9 mx-10'>{location.state.text}</p>
        <h2 className='text-center mb-72 font-bold text-green-600'>{location.state.GPS}</h2>
      </div>
      
    </div>

  )
}

export default Details

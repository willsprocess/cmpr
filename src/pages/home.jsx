import React from 'react';
import { Link } from 'react-router-dom';
import Locations from './locations';
import campIcon from '../assets/camp.svg';

function Home() {
  
  return (
    <div className="w-screen h-50 text-white pt-20" style={{
      background: "linear-gradient(90deg, #093028, #237A57)"
    }}>
  
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/12 w-full">
        <img className='mx-auto' src={campIcon} alt="camp" />
          <h1 className="my-4 text-5xl font-bold leading-tight">
            California Camping
          </h1>
          <p className="text-1xl mb-8">
            Find your next camping destination
          </p>
          <div className="flex justify-center mx-auto">
            <button className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
              <Link to='/locations'> Camp Grounds </Link>
            </button>
          </div>
        </div>
      </div>
    
    <Locations />

    <div className="w-full md:w-1/3 md:max-w-full mx-auto">
      <div className="p-10 ">
        <form>
          <h1 className='text-3xl mt-8 font-bold'>NEWSLETTER</h1>
          <p className='text-xl text-center mt-3'>Stay in the loop of the best disburst camp grounds california has to offer.</p>
          
          <label className="block mb-6 mt-8">
            <input
              name="email"
              type="email"
              className="
                text-black
                block
                w-full
                mt-1
                border-white
                shadow-sm
                focus:border-white
              "
              placeholder="your email"
            />
          </label>
          <div className="mb-6">
            <button
              type="submit"
              className="
                h-10
                px-5
                text-indigo-100
                bg-black
                transition-colors
                duration-150
                focus:shadow-outline
                hover:bg-neutral-900
              "
            >
              Subscribe
            </button>
          </div>

        </form>
      </div>
    </div>

    </div>

  )
}

export default Home
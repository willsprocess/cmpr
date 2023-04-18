import React from 'react';
import campIcon from '../assets/campFooter.svg';

function Footer() {
  return (
    <footer className=" dark:bg-black">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0">
                <img className='items-center campicon' src={campIcon} alt="camp" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CA CPMR.</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">

                    <li>
                        <a className="mr-4 hover:underline md:mr-6 ">HOME</a>
                    </li>
                    <li>
                        <a className="mr-4 hover:underline md:mr-6">LOCATIONS</a>
                    </li>
                    <li>
                        <a  className="mr-4 hover:underline md:mr-6 ">ABOUT</a>
                    </li>
                    <li>
                        <a className="mr-4 hover:underline md:mr-6">CONTACT</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">CA CMPR.</a> All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer
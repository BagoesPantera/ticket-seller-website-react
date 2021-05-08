import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)

    return (
        <div className="flex justify-center items-center bg-red-600">
            <div className="w-full lg:w-5/6 bg-red-600 text-white">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center justify-between px-4 py-4 lg:py-0 border-b border-red-700 lg:border-b-0">
                        <div className="text-white uppercase font-semibold">
                            <NavLink to="/">LOGO</NavLink>
                        </div>
                        <div className="">
                            <button onClick={() => setIsMobile(!isMobile)} className="focus:outline-none text-white block lg:hidden">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path className={!isMobile ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                    <path className={isMobile ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${isMobile ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0 `}>
                       
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <NavLink to="/login" className="inline-flex items-center lg:flex-row-reverse px-4 py-3 lg:py-2 lg:px-4 text-red-200 hover:text-white lg:text-white lg:focus:ring-2 lg:ring-red-100 lg:bg-red-500 rounded-md ">
                                <svg className="w-6 h-6 mr-1 lg:w-5 lg:h-5 lg:mr-0 lg:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                Login
                            </NavLink>
                            <NavLink to="/daftar" className="inline-flex items-center lg:block px-4 py-3 lg:py-5 text-red-200 hover:text-white">
                                <svg className="w-6 h-6 mr-1 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                </svg>
                                Daftar
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

'use client'

import React, { useState } from 'react';

export default function HeaderBar() {

    const [navClosed, setNavClosed] = useState(false);

    const closeMobileNav = () => {
        if (!navClosed) {
            document.getElementById('navbar').style.display = 'none';
            document.getElementById('mobileNavCloser').style.rotate = '180deg';
            setNavClosed(true);
        } else {
            document.getElementById('navbar').style.display = 'flex';
            document.getElementById('mobileNavCloser').style.rotate = '0deg';
            setNavClosed(false);
        }
    }

    // Copied from another Project (BikeShip)
    return (
        <nav className="bg-white text-black">
            <div id="navbar" className="flex w-full flex-row  lg:mt-0 justify-between items-center">
                <div className="lg:w-1/3 hidden md:block">
                    <a href="/" className="hidden lg:flex justify-start align-middle">
                        <img src="logo.webp" alt="svg of motorcycle" className="h-16 w-auto ml-4" />
                        <span className="hidden lg:flex text-5xl ml-1 font-thin">|</span>
                        <div className="hidden lg:flex ml-2  flex-col">
                            <span className="text-s leading-none mt-2">Finde</span>
                            <span className="text-xs leading-none">Nahe</span>
                            <span className="text-s leading-none">Biker</span>
                        </div>
                    </a>
                </div>
                <div className="flex flex-row lg:justify-center lg:w-1/3 mt-3 md:mt-0">
                    <a href="" className="self-start lg:self-center text-3xl font-semibold  ml-5 mr-5 DDD hover:scale-105 transition-all">Home</a>
                    <a href="/biker" className="self-start lg:self-center text-3xl font-semibold  ml-5 mr-5 DDD hover:scale-105 transition-all">Biker</a>
                </div>
                <div className="flex lg:w-1/3 mt-2 mr-2 ml-4 justify-end items-center">
                    <div className="bg-gray-100 p-2 rounded-xl flex jusitfy-center items-center hover:bg-gray-200 transition-all">
                        <h2 className="mr-2">Profile</h2>
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>

                </div>

            </div>
            <div className="bg-gray-300 w-full h-1 mt-2 md:hidden"></div>
            <div id="mobile-navcloser" className="flex justify-center lg:hidden">
                <button id="mobileNavCloser" className="p-2" onClick={closeMobileNav}>
                    <img className="w-8 h-8 " src="mobile-nav-closer.png" alt="arrow up" />
                </button>
            </div>
        </nav>
    );
}
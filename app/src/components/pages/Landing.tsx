import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../layout/Navbar";

function Landing () {
    return (
        <main className="min-h-screen min-w-screen flex flex-col text-gray-800 font-medium bg-gray-200 items-center z-10">
            <Navbar/>
            <div className="md:min-w-md min-w-screen bg-white h-screen rounded-xl flex">
                <div className="m-auto w-full mx-4">
                    <div className="flex items-center">
                        <button className = "m-auto my-8 text-gray-600 font-semibold text-lg">
                            Try searching to get started
                        </button>
                    </div>
                    <div className="mt-2 ">
                        <div className="flex items-center rounded-2xl drop-shadow-xs bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-200">
                        <div className="shrink-0 text-base text-gray-600 select-none "></div>
                        <input placeholder="Describe what you want!" className="block min-w-0 grow py-6 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-450 focus:outline-none " />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a className = "m-auto my-8  active:bg-black bg-gray-700 text-white drop-shadow-xs px-6 py-3 rounded-xl" href="/search">
                            <span className="font-semibold">Search</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Landing;
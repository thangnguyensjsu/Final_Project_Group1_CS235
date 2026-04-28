import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function SearchResult({picture, name, rating, price, distance}: any){
    return (
        <div>
            <div className="pl-6 pb-8 pt-8 border-solid border-2 border-gray-200 m-4 rounded-3xl relative ">
                <img src={`/photos/${picture}`} alt="noImg" className="h-24 w-24 object-cover rounded-lg object-top-left"/>
                <div className="grid grid-cols-2 absolute md:right-4 right-2 top-6">
                    <div className = "mt-4 pt-4 font-semibold text-lg h-16 ml-1">
                        {name}
                    </div>
                    <button className="bg-gray-700 active:bg-black text-white font-semibold py-2 mb-2 mt-6 md:mx-3 mx-5 drop-shadow-md rounded-3xl">
                        <a href="/menu">
                            Order
                        </a>
                    </button>
                    <div className="float-right">
                        <Box className="pl-0 mb-12 top-8 md:ml-0 ">
                            <Rating name="read-only" value={rating} readOnly />
                        </Box>
                    </div>
                    <div className="">
                        <div className="ml-3 grid grid-cols-2 md:gap-0">
                            <span className="text-center items-center text-green-800">
                                {price}
                            </span>
                            <span className="text-center items-center justify-center">
                                {distance}
                            </span>
                        </div>
                    </div>    
                </div>
                    
            </div>
        </div>
    );
}
export default SearchResult;


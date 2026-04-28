import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {XMarkIcon, HomeIcon, ClipboardDocumentListIcon, UserCircleIcon} from '@heroicons/react/24/outline'



function Sidebar({show, setShow}: any){
    const handleSidebar = () => {
        setShow(!setShow);
    }
    return(
        <div className="rounded-xl h-screen fixed top-0 w-xs overflow-hidden bg-gray-100 z-30 border-gray-500 font-semibold md:ml-8 ml-12">
            <button onClick={handleSidebar} className="bg-transparent float-right m-8 ml-12">
                    <XMarkIcon className="fill-current text-gray-700 size-12"/>
            </button>
            <div className="md:ml-1 ml-1">
                <div className="text-2xl text-gray-700 m-8 my-24">
                    <div className="pb-4 border-b border-gray-500">
                        <a href="/register" className="flex">
                            <span> <UserCircleIcon className="size-8 mr-4" /></span>
                            <span> Register </span>
                        </a>
                    </div>
                    <div className="py-4 border-b border-gray-500">
                        <a href="/" className="flex">
                            <span> <HomeIcon className="size-8 mr-4" /></span>
                            Home
                        </a>
                        
                    </div>
                    <div className="py-4">
                        <a href="/orders" className="flex">
                            <span> <ClipboardDocumentListIcon className="size-8 mr-4" /></span>
                            Current Orders
                        </a>
                    </div>
                    {/*
                    <div className="py-4 ">
                        <a href="/" className="flex">
                            <span> <Cog6ToothIcon className="size-8 mr-4" /></span>
                            Settings
                        </a>
                    </div>
                    
                    */}
                    
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
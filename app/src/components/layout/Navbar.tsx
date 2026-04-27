import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import {Bars4Icon} from '@heroicons/react/24/outline'

const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    let navigate = useNavigate();
    let location = useLocation();
    return (            
            <div className = "bg-transparent md:min-w-md min-w-screen h-16 fixed top-0 left-0 right-0 z-20 flex flex-col items-center ">
                <div className="md:min-w-md min-w-screen md:relative justify-between flex">
                    
                    <button onClick={handleSidebar} className="bg-transparent">
                        <Bars4Icon className="size-12 m-4 text-gray-700 fill-current"/>
                        
                    </button>
                    <div className="mt-2">
                    {location.pathname !== "/" && <button onClick={()=>navigate(-1)} className="bg-red-500 active:bg-red-700 text-white font-semibold drop-shadow-xs px-5 h-8 justify-center mx-6 mt-4 rounded-2xl"> Back </button>}
                    </div>
                </div>
                <div className="relative flex min-w-lg flex-col md:flex-row z-30 top-0">
                    {sidebarOpen? <Sidebar show={sidebarOpen} setShow={setSidebarOpen}/>: null}
                </div>         
            </div>
    );
}
export default Navbar;
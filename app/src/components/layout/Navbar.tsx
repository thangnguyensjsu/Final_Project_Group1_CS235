import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Bars4Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-30 flex justify-center bg-transparent">
                <div className="flex w-full max-w-md items-center justify-between px-4 pt-4 pb-2">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="rounded-full bg-white/90 p-2 text-gray-700 shadow-sm backdrop-blur"
                        aria-label="Open menu"
                    >
                        <Bars4Icon className="h-7 w-7" />
                    </button>

                    {location.pathname !== "/" ? (
                        <button
                            onClick={() => navigate(-1)}
                            className="rounded-full bg-[#e23744] px-4 py-2 text-sm font-semibold text-white shadow-sm"
                        >
                            Back
                        </button>
                    ) : (
                        <div className="w-11" />
                    )}
                </div>
            </div>

            {sidebarOpen && (
                <Sidebar show={sidebarOpen} setShow={setSidebarOpen} />
            )}
        </>
    );
};

export default Navbar;
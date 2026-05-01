import { XMarkIcon, HomeIcon, ClipboardDocumentListIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

type SidebarProps = {
    show: boolean;
    setShow: (value: boolean) => void;
};

function Sidebar({ setShow }: SidebarProps) {
    const closeSidebar = () => setShow(false);

    return (
        <>
            <div
                className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px]"
                onClick={closeSidebar}
            />

            <aside className="fixed top-0 left-0 z-50 h-screen w-[290px] border-r border-gray-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
                <div className="flex items-center justify-between px-5 pt-5 pb-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-500">
                            BiteDecide
                        </p>
                        <p className="mt-1 text-sm text-gray-500">Navigation</p>
                    </div>

                    <button
                        onClick={closeSidebar}
                        className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100"
                        aria-label="Close menu"
                    >
                        <XMarkIcon className="h-7 w-7" />
                    </button>
                </div>

                <nav className="px-3 pt-2">
                    <Link
                        to="/"
                        onClick={closeSidebar}
                        className="mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-800 transition hover:bg-red-50"
                    >
                        <HomeIcon className="h-6 w-6 text-red-500" />
                        <span className="font-semibold">Home</span>
                    </Link>

                    <Link
                        to="/orders"
                        onClick={closeSidebar}
                        className="mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-800 transition hover:bg-red-50"
                    >
                        <ClipboardDocumentListIcon className="h-6 w-6 text-red-500" />
                        <span className="font-semibold">Current Orders</span>
                    </Link>

                    <Link
                        to="/register"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-800 transition hover:bg-red-50"
                    >
                        <UserCircleIcon className="h-6 w-6 text-red-500" />
                        <span className="font-semibold">Register</span>
                    </Link>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;
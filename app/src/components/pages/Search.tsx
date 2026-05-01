import Navbar from "../layout/Navbar";
import SearchResult from "./SearchResult";
import { FunnelIcon } from "@heroicons/react/24/outline";
import TopResult from "./TopResult";

function Search(){

    const placeholders = [
        {pic: "Restaurant1.jpg", name: "Restaurant 1", rating: "5", price: "$$$", distance: "67 mi"},         
        {pic: "Restaurant3.jpg", name: "Restaurant 3", rating: "5", price: "$", distance: "250 mi"},
        {pic: "Restaurant4.jpg", name: "Restaurant 4", rating: "1", price: "$", distance: "1.1 m"},
    ];

    const topPick = {pic: "Restaurant2.jpg", name: "Restaurant 2", rating: "4", price: "$$", distance: "12 mi"}
    
    
    const listPlaceHolders = placeholders.map(place => <li> <SearchResult picture={place.pic} name={place.name} rating={place.rating} price={place.price} distance={place.distance}/> </li>)
    return(
        <main className="min-h-screen max-h-screen min-w-screen max-w- flex flex-col text-gray-800 font-medium bg-gray-200 items-center">
            <Navbar/>
            <div className="md:min-w-md min-w-screen bg-white min-h-screen rounded-xl overflow-y-auto">
                <div className="fixed md:min-w-md min-w-screen pb-2 border-b border-gray-200 bg-white z-10 rounded-t-xl">
                    {/** No functionality yet */}
                    <div className="mx-4 mt-18 mb-2">
                        <div className="mt-2">
                            <div className="flex items-center rounded-4xl drop-shadow-xs bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-200">
                            <div className="shrink-0 text-base text-gray-600 select-none "></div>
                            <input placeholder="Search for restaurants" className="block min-w-0 grow py-4 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-450 focus:outline-none " />
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 content-center">
                        <button className="flex items-center justify-center outline-gray-300 bg-white active:bg-gray-200 active:text-black text-gray-900 outline-1 drop-shadow-xs px-2 mx-8 my-2 rounded-2xl ">
                            <FunnelIcon className="size-5"/>
                            <span className="font-semibold mr-2"> Filter </span> 
                        </button>
                        <button className="outline-gray-300 bg-white active:bg-gray-200 active:text-black text-gray-900 outline-1  drop-shadow-xs px-2 py-3 mx-8 my-2 rounded-2xl">
                            <a className="font-semibold" href="/search">Search</a>
                        </button>
                    </div>
                    {/** */}
                </div> 
                <div className="pt-54 pb-16 overflow-y-auto">
                    <ul>
                        <li><TopResult picture={topPick.pic} name={topPick.name} rating={topPick.rating} price={topPick.price} distance={topPick.distance}/></li>
                        {listPlaceHolders}
                    </ul>
                </div>
            </div>
            {/**
             * <div className="space-y-1 w-lg fixed bottom-10 ml-186  rounded-b-xl">
                <a href="/" className="my-8  active:bg-black bg-gray-700 text-white drop-shadow-xs px-6 py-3 rounded-xl">
                    <span className="font-semibold">Back</span>
                </a>
            </div>
             * 
             */}
            
        </main>
    );
}
export default Search;
import Navbar from "../layout/Navbar";
import MenuItems from "./MenuItems";
import { FunnelIcon } from "@heroicons/react/24/outline";

function Menu(){
    const placeholderMenu = [
        {pic: "Food1.jpg", name: "Menu Item 1", price: "70$"}, 
        {pic: "Food2.jpg", name: "Menu Item 2", price: "20$"},
        {pic: "Food3.jpg", name: "Menu Item 3", price: "35$"},
        {pic: "Food4.jpg", name: "Menu Item 4", price: "240$"},
    ];
    //const listPlaceHolders = placeholders.map(place => <li> <SearchResult picture={place.pic} name={place.name} rating={place.rating} price={place.price} distance={place.distance}/> </li>)
    const listPLMenu = placeholderMenu.map(food=><li><MenuItems picture={food.pic} name={food.name} price={food.price}/></li>)
    return(
        <main className="min-h-screen max-h-screen min-w-screen max-w- flex flex-col text-gray-800 font-medium bg-gray-200 items-center">
            <Navbar/>
            <div className="md:min-w-md min-w-screen bg-white min-h-screen rounded-xl overflow-y-auto">
                <div className="fixed md:min-w-md min-w-screen pb-2 border-b border-gray-200 bg-white z-10 rounded-t-xl">
                    <div className="mx-4 mt-18 mb-2">
                        <div className="mt-2">
                            <div className="flex items-center rounded-4xl drop-shadow-xs bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-200">
                            <div className="shrink-0 text-base text-gray-600 select-none "></div>
                            <input placeholder="Search for what you want" className="block min-w-0 grow py-4 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-450 focus:outline-none " />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 content-center">
                        <button className="flex items-center justify-center outline-gray-300 bg-white active:bg-gray-200 active:text-black text-gray-900 outline-1 drop-shadow-xs px-2 mx-8 my-2 rounded-2xl ">
                            <FunnelIcon className="size-5"/>
                            <span className="font-semibold mr-2"> Filter </span> 
                        </button>
                        <button className="outline-gray-300 bg-white active:bg-gray-200 active:text-black text-gray-900 outline-1  drop-shadow-xs px-2 py-3 mx-8 my-2 rounded-2xl">
                            <span className="font-semibold">Search</span>
                        </button>
                
                    </div>
                </div> 
                <div className="pt-54 pb-16 overflow-y-auto">
                    <ul>
                        {/*listPlaceHolders*/}
                        {listPLMenu}
                    </ul>
                </div>
            </div>
            
             <div className="space-y-1 md:min-w-md min-w-screen fixed bottom-0 bg-white border-t border-gray-200 rounded-b-xl flex justify-center items-center">
                <a href="/checkout" className="my-6 active:bg-black bg-gray-700 text-white drop-shadow-xs px-36 py-3 rounded-xl ">
                    <span className="font-semibold">Place Order</span>
                </a>
            </div>             
        </main>
    );
}
export default Menu;
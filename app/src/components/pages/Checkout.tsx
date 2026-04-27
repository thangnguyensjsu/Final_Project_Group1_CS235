
import Navbar from "../layout/Navbar";
import MenuItems from "./MenuItems";
function Checkout(){
    const placeholderMenu = [
        {pic: "Food1.jpg", name: "Menu Item 1", price:70}, 
        {pic: "Food2.jpg", name: "Menu Item 2", price:20},
        {pic: "Food3.jpg", name: "Menu Item 3", price:30},
        {pic: "Food4.jpg", name: "Menu Item 4", price:240},
    ];
    const listPLMenu = placeholderMenu.map(food=><li><MenuItems picture={food.pic} name={food.name} price={food.price+"$"}/></li>)
    let sum = placeholderMenu.reduce(function(prev, curr){
        return prev + curr.price;
    }, 0)
    return(
    <main className="min-h-screen max-h-screen min-w-screen max-w- flex flex-col text-gray-800 font-medium bg-gray-200 items-center">
        <Navbar/>
        <div className="py-10 z-10 fixed top-0 space-y-1 bg-white md:min-w-md min-w-screen rounded-t-xl"/>
            
        <div className="md:min-w-md min-w-screen bg-white min-h-screen rounded-xl overflow-y-auto">
            
            <div className="pt-20 pb-50 overflow-y-auto">
                <ul>
                    {listPLMenu}
                </ul>
            </div>
        </div>
    

        <div className="space-y-1  md:min-w-md min-w-screen fixed bottom-0 bg-white border-t border-gray-200 rounded-b-xl flex justify-center items-center">
                <div className="grid grid-cols-1 my-6 mt-4 text-center"> 
                    <span className="font-semibold"> Restaurant 1 </span>
                    <div className="grid grid-cols-2 mb-2 text-left font-semibold ml-20 my-2">
                            <span>Tax:</span>
                            <div >
                                {(Math.round((sum*0.06) * 100) / 100).toFixed(2)}$
                            </div>
                            <span>Delivery Fee:</span>
                            <div >
                                5$    
                            </div>
                            <span>Total:</span>   
                            <div >
                                {(Math.round((sum+5+sum*0.06) * 100) / 100).toFixed(2)}$    
                            </div>             
                            
                    </div>
                    <a href="/confirm" className=" active:bg-black bg-gray-700 text-white drop-shadow-xs px-36 py-3 rounded-xl mt-3 ">
                        <span className="font-semibold">Place Order</span>
                    </a>
                </div>

        </div>   
    </main>

    );
}

export default Checkout;
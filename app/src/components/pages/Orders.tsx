import Navbar from "../layout/Navbar"


//Placeholder
function Orders(){
     return(
        <main className="min-h-screen min-w-screen flex flex-col text-gray-800 font-medium bg-gray-200 items-center z-10">
            <Navbar/>
            <div className="md:min-w-md min-w-screen bg-white h-screen rounded-xl flex">
                <div className="m-auto w-full mx-4">
                    <div className="flex items-center">
                        <button className = "m-auto my-8 text-gray-600 font-semibold text-lg">
                            You don't have any on-going orders right now.
                        </button>
                    </div>
                </div>
            </div>
        </main>
     );
}
export default Orders;
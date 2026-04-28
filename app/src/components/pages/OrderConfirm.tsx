
function OrderConfirm(){
     return(
        <main className="min-h-screen min-w-screen flex flex-col text-gray-800 font-medium bg-gray-200 items-center z-10">
            <div className="md:min-w-md min-w-screen bg-white h-screen rounded-xl flex">
                <div className="m-auto w-full mx-4">
                    <div className="flex items-center">
                        <div className = "m-auto my-8 text-gray-600 font-semibold text-lg">
                            Your order was successfully sent out!
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-1 md:min-w-md min-w-screen fixed bottom-0 bg-white rounded-b-xl flex justify-center items-center">
                <a href="/" className="my-6 active:bg-black bg-gray-700 text-white drop-shadow-xs px-36 py-3 rounded-xl ">
                    <span className="font-semibold">Return</span>
                </a>
            </div> 
        </main>
        
     );
}
export default OrderConfirm;
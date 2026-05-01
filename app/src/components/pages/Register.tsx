import Navbar from "../layout/Navbar";

function Register(){
    return(
        <main className="min-h-screen min-w-screen flex flex-col text-gray-800 font-medium bg-gray-200 items-center z-10">
            <Navbar/>
            <div className="md:min-w-md min-w-screen bg-white h-screen rounded-xl flex">
                <div className="m-auto max-w-md">
                    <div className="flex items-center justify-center">
                        <section className="min-h-screen flex flex-col justify-center items-center ">
                            <div className="h-xl p-4 bg-white shadow-lg rounded-3xl text-center">
                                <p className="md:w-sm w-sm text-xl font-bold pb-2">Create your Free Account!</p>
                                
                                <form>
                                    <p className="text-left pt-2 text-md text-gray-700 font-semibold">First Name:</p>
                                    <input 
                                        name="" 
                                        type="text" 
                                        placeholder="First Name"  
                                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
                                    <p className="text-left pt-4 text-md text-gray-700 font-semibold">Email Address:</p>
                                    <input 
                                        name="" 
                                        type="text" 
                                        placeholder="Email"  
                                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
                                    <p className="text-left pt-4 text-md text-gray-700 font-semibold">Password:</p>
                                    <input 
                                        name="" 
                                        type="text" 
                                        placeholder="Password"  
                                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
                                    <p className="text-left pt-4 text-md text-gray-700 font-semibold">Confirm Password:</p>
                                    <input 
                                        name="" 
                                        type="text" 
                                        placeholder="Password"  
                                        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
                                
                                    <div className="py-4 ml-6 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                            name="termsAgreed"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label className="ml-2 block text-sm text-gray-900">
                                            I have read and agreed to the{" "}
                                            <a className="font-bold underline hover:no-underline" href="">
                                                Terms of Service
                                            </a>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="py-4 text-lg font-bold text-gray-800">
                                        <button type="submit" className="bg-gray-700 active:bg-black text-white font-bold py-2 px-12 rounded-2xl">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
   
}
export default Register;
import { Checkbox, Box } from "@mui/material";
import { useLocation } from 'react-router-dom';


function MenuItems({picture, name, price}:any){
    let location = useLocation();
    
    return(
        <div className="md:w-md w-screen">
            <div className="size-auto m-4 pl-6 pb-6 pt-6  border-solid border-2 border-gray-200 rounded-3xl  ">
                <div className="gap-0 flex justify-between items-center">
                    <img src={`/photos/${picture}`} alt="noImg" className="h-24 w-24 object-cover rounded-lg object-top-left"/>

                    <div className = "mt-4 pt-4 font-semibold text-lg h-16 flex">
                        <span className="flex">{name}</span>
                    </div>
                    <div className = "mt-4 pt-4 font-semibold text-lg h-16 ml-10">
                        <span>{price}</span>
                    </div>
                    {location.pathname == "/menu" && <Box className= "mt-4 ml-4 mr-4 z-0">
                        <Checkbox/>
                    </Box>}
                    {location.pathname !== "/menu" && <Box className= "mt-4 ml-4 mr-4 z-0"/>}
                </div>
            </div>
        </div>
    );
}
export default MenuItems;
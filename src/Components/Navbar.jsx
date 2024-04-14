import { useEffect, useState } from "react";
import Address from "./Address";


import { IoIosAirplane ,IoIosCalculator } from "react-icons/io";
const Navbar = () => {
const [route , setRoute]=useState([])

const [open , setOpen ]= useState(false)

useEffect(()=>{


    const routeFunction= async()=>{


        try{



            const res = await fetch('route.json')

            const data = await res.json()


            console.log(data)
            setRoute(data)
        }catch(error){

            console.log(error)
        }
    }

    routeFunction()

},[])
  
  return (
    <div>
        <div className="md:hidden  text-4xl" onClick={()=>setOpen(!open)}>

            {

                open === true ? <IoIosCalculator/> : <IoIosAirplane ></IoIosAirplane>
            }
        


        </div>
       
    {/* <h3 className=" md:hidden">
        Letes Go <FaBeer/>?
        </h3> */}
       
    <ul className={`md:flex md:static  duration-1000 bg-amber-300 py-6 absolute ${open ? 'top-12':'-top-60'} `}>

        {

            route.map(data =><Address data={data}></Address> )
        }
      
    </ul>
    </div>
  );
};

export { Navbar };

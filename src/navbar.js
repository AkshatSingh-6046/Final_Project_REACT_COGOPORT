import React from "react";
import ReactDOM  from "react-dom";
import './index.css'
import { Link } from "react-router-dom";
import BrandsIcon from "./svgs/BrandsIcon";
const Navbar=()=>{

return (

    <div className="navbar flex flex-row items-center px-12">
            <div className="flex flex-row gap-10 flex-1 items-center">
                <div className="flex items-center gap-6">
                    <span className="flex font-bold flex-row items-center gap-1"> <BrandsIcon/>Untitled UI</span>
                    <span><Link to='/'>Home</Link></span>
                </div>
                <div>Articles</div>
            </div>
           <div className="flex flex-row items-center justify-around gap-10">
            <div className="justify-end"><Link to='/login'>Login</Link></div>
            <button className="sign-up justify-end text-sm text-white" ><Link to='/signup'>Sign up</Link></button>
            </div> 
    </div>



);

}
export default Navbar; 
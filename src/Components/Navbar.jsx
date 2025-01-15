import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Navbar = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const handleToggleSidebar = () => {
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };

    const handleToggleTheme = () => {
        dispatch({ type: "TOGGLE_THEME" });
    }

    return (
        <div className={`w-full flex justify-between fixed items-center h-16 px-10 ${state.theme === "dark" ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"}`}>
            <div className=" flex gap-2 text-2xl">
                <MdOutlineMenu className="hover:cursor-pointer" onClick={handleToggleSidebar} />
                <img 
                src={state.theme === "dark" ? "./darklogo.png" : "./logo.png"}
                className="h-8 w-32" 
                alt="logo" />
            </div>
            <div className=" flex gap-4 text-2xl">
                <IoSearch className="hover:cursor-pointer" />
                <LuLayoutGrid className="hover:cursor-pointer" />
                {state.theme === "light" && <LuMoonStar className="hover:cursor-pointer" onClick={handleToggleTheme}/>}
                {state.theme === "dark" && <MdOutlineLightMode className="hover:cursor-pointer" onClick={handleToggleTheme}/>}
            </div>
        </div>
    );
};

export default Navbar;

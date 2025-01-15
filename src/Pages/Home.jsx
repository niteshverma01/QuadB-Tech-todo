import Navbar from "../Components/Navbar.jsx"
import React, { useState, useEffect, useContext } from "react"
import Sidebar from "../Components/Sidebar.jsx"
import { GlobalContext } from "../Context/GlobalState.jsx";
import Todos from "../Components/Todos.jsx";

import { Navigate } from "react-router-dom";

const Home = () => {
    const {state , dispatch} = useContext(GlobalContext);

    const isLoggedIn = state.isAuthenticated;
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    const handleToggleSidebar = () => {
        dispatch({type:"TOGGLE_SIDEBAR"})
    }

    return (
        <div className={`${state.theme === "dark" ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"}  w-full overflow-y-visible pointer-events-auto`}>
            <Navbar />
            <div className="w-full flex flex-row ">
            {state.isSidebarVisible && <Sidebar className="px-10 "/>}
            <Todos/>

           
            </div>
        </div>
    )
}

export default Home
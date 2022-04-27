import React from "react";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import {
  MenuIcon,
  MailIcon,
  BellIcon,
  CalendarIcon,
  UserCircleIcon,
  CogIcon,
} from "@heroicons/react/outline";

export default function Nav() {

    const [displaySide,setDisplaySide]=useState(false);


    const handleSidebar=()=>{
        setDisplaySide(!displaySide);
    }

  return (
    <>
      {/* topbar */}

      <header className="body-font flex">
          <button onClick={handleSidebar}>
              <MenuIcon  className="h-8 m-6 cursor-pointer" />
          </button>
      
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        
          <a
            href="#!"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          > 
            <span className="ml-3 text-3xl pl-10 font-bold">Dashboard</span>
          </a>
          <nav className="hidden md:mr-[-10px] md:ml-auto md:flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 text-blue-500 border-2 p-1 rounded-md border-blue-500" href="#!">
              <MailIcon className="h-8 cursor-pointer" />
            </a>
            <a className="mr-5 text-blue-500 border-2 p-1 rounded-md border-blue-500" href="#!">
              <BellIcon className="h-8 cursor-pointer" />
            </a>
            <a className="mr-5 text-blue-500 border-2 p-1 rounded-md border-blue-500" href="#!">
              <CalendarIcon className="h-8 cursor-pointer" />
            </a>
            <a className="mr-5 text-blue-500 border-2 p-1 rounded-md border-blue-500" href="#!">
              <UserCircleIcon className="h-8 cursor-pointer" />
            </a>
            <a className="mr-5 text-blue-500 border-2 p-1 rounded-md border-blue-500" href="#!">
              <CogIcon className="h-8 cursor-pointer" />
            </a>
          </nav>
        </div>
      </header>

        <Sidebar displaySide={displaySide}/>

    
    </>
  );
}

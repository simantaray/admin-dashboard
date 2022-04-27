import React from "react";
import { ChartSquareBarIcon,BookOpenIcon, ClipboardIcon } from "@heroicons/react/outline";

export default function Sidebar({displaySide}) {
  console.log(displaySide);
  return (
    <div className={` absolute left-[-250px] ${displaySide && "left-0 "} w-60 h-[calc(100vh-80px)] shadow-md bg-white px-1 absolute  trasition ease-in-out duration-100  `}>
      <div>
        <ul className="relative font-bold">
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            ><ChartSquareBarIcon className="h-8 mr-3" />
              Dashboard
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            ><BookOpenIcon className="h-8 mr-3" />
              Courses
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hiddentext-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            ><ClipboardIcon className="h-8 mr-3" />
              Assignments
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

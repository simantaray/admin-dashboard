import React from "react";
import {
  ChartSquareBarIcon,
  BookOpenIcon,
  ClipboardIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  LibraryIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline";

export default function Sidebar({ displaySide }) {
  console.log(displaySide);
  return (
    <div
      className={` absolute xl:left-[-0px] md:left-[-250px] ${
        displaySide && "md:left-[0px]"
      } w-60 h-[calc(100vh-80px)] shadow-md bg-white px-1 absolute  trasition ease-in-out duration-100 z-50`}
    >
      <div>
        <ul className="relative font-bold">
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <ChartSquareBarIcon className="h-8 mr-3" />
              Dashboard
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <BookOpenIcon className="h-8 mr-3" />
              Courses
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hiddentext-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <ClipboardIcon className="h-8 mr-3" />
              Assignments
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hiddentext-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <AcademicCapIcon className="h-8 mr-3" />
              Exam
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hiddentext-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <VideoCameraIcon className="h-8 mr-3" />
              Session
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hiddentext-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <LibraryIcon className="h-8 mr-3" />
              Library
            </a>
          </li>
          <li className="relative p-2 mt-2 rounded-xl hover:bg-blue-500 hover:text-white transition duration-100 ease-in">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hiddentext-ellipsis whitespace-nowrap rounded  "
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <VolumeUpIcon className="h-8 mr-3" />
              Announcements
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

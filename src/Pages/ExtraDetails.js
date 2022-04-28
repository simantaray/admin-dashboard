import React from "react";
import { CalendarIcon, PlusSmIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
export default function ExtraDetails() {
  const dates = [
    { day: "Thu", date: 18, today: false },
    { day: "Wed", date: 19, today: false },
    { day: "Fri", date: 20, today: true },
    { day: "Sat", date: 21, today: false },
    { day: "Sun", date: 22, today: false },
  ];
  const upcomingTasks = [
    { title: "English Assignment Submission", time: "09:00AM" },
    { title: "Algebra Assignment Submission", time: "10:00AM" },
    { title: "Human Psychology Discussion", time: "12:00AM" },
    { title: "English Assignment Submission", time: "10:00AM" },
    { title: "English Assignment Submission", time: "08:00PM" },
    { title: "English Assignment Submission", time: "01:00PM" },
  ];
  return (
    <div className="bg-white w-[25vw] h-[calc(100vh-100px)] relative flex justify-center text-blue-700">
      <div className="flex flex-col ">
        <div class="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  w-[25vw]">
          <div className="flex justify-between">
            <h1 className="p-2 font-semibold">Calender</h1>
            <p className="flex border-2 border-blue-500 bg-blue-200 p-2 rounded-md">
              Feb
              <CalendarIcon className="h-6 ml-2" />
            </p>
          </div>
          <div className="flex justify-between text-black mt-4">
            {dates.map((ele) => (
              <div
                key={ele.index}
                className={`flex flex-col justify-center text-center shadow-md rounded-md p-2 w-1/6 ${
                  ele.today && "bg-blue-600 text-white"
                }`}
              >
                <h1
                  className={`text-md  ${ele.today && "text-white"} opacity-80`}
                >
                  {ele.day}
                </h1>
                <h1 className="text-lg font-semibold">{ele.date}</h1>
              </div>
            ))}
          </div>
        </div>
        <div class="p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  w-[25vw] mt-4">
          <div className="flex justify-between mb-4 cursor-pointer">
            <h1 className="p-2 font-semibold">Upcomming Tasks</h1>
            <p className="flex border-2 border-blue-500 bg-blue-200 px-3 py-2 rounded-md">
              Add New
              <PlusSmIcon className="h-6 ml-2" />
            </p>
          </div>
          <div className="h-[400px] overflow-auto scrollbar-hide">
            {upcomingTasks.map((task) => (
              <div className="text-black p-4">
                <div className="flex justify-between">
                  <h1 className="font-semibold">{task.title}</h1>
                  <PencilIcon className="h-5 ml-2 text-blue-600 cursor-pointer" />
                </div>
                <h1 className="text-sm">{task.time}</h1>
                <div className="w-100 h-[1px] bg-gray-300 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { CircularProgressbar, buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Statics() {
  const percentages = [{number:67, color:"rgb(42, 52, 235)",subject:"Maths"}, {number:80, color:"rgb(230, 101, 41)",subject:"English"}, {number:73, color:"rgb(98, 41, 230)",subject:"Psychology"}];
  const datas = [
    { days: 210, des: "Total Days" },
    { days: 194, des: "Present" },
    { days: 16, des: "Absent" },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container md:px-1 xl:px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 font-semibold text-lg title-font ">
                    Attendance Overview
                  </h2>
                </div>
                <div className="flex w-[100%] xl:p-4 md:pt-2 justify-between">
                  {datas.map((data) => (
                    <div
                      key={data.index}
                      className="text-center  border-2 border-blue-900 rounded-md p-1 xl:p-4 xl:mr-5 xl:ml-5 lg:mr-0 lg:ml-0 mr-1 ml-1 w-1/3"
                    >
                      <p className="font-bold text-2xl xl:text-3xl">{data.days}</p>
                      <p className="text-sm xl:text-md font-semibold">{data.des}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">
                    Improvement Rate
                  </h2>
                </div>
                <div className="flex w-[100%] xl:p-4 md:pt-2 justify-between">
                  {percentages.map((percentage) => (
                      <div className="flex flex-col">
                    <CircularProgressbar
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 25,
                    
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',
                    
                        // Text size
                        textSize: '16px',
                    
                        // How long animation takes to go from one percentage to another, in seconds
                        // pathTransitionDuration: 0.5,
                    
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                    
                        // Colors
                        pathColor: `${percentage.color}`,
                        textColor: '#000',
                        // trailColor: '#d6d6d6',
                        // backgroundColor: `${percentage.color}`,
                      })}
                      className="h-[60px] xl:h-[95px] text-black"
                      key={percentage.index}
                      value={percentage.number}
                      text={`${percentage.number}%`}
                    />
                    <h1 className="flex justify-center pt-2 font-semibold">{percentage.subject}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

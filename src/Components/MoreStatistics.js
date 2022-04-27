import React from 'react'
import Graph from './Graph'

export default function MoreStatistics() {
    const classes=[
        {id:1,title:"English", startingTime:"09am" ,endingTime:"09:45am"},
        {id:2,title:"Maths", startingTime:"09am" ,endingTime:"09:45am"},
        {id:3,title:"Science", startingTime:"09am" ,endingTime:"09:45am"},
        {id:4,title:"Psychol..", startingTime:"09am" ,endingTime:"09:45am"},
    ]
  return (
    <div>
      <section className="text-gray-600 body-font  z-[-1]">
        <div className="container px-1 xl:px-5 py-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-4 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 font-semibold text-lg title-font ">
                    Today's Schedule
                  </h2>
                </div>
                <div className="relative flex flex-col w-[100%] xl:p-4 md:pt-2 justify-between">
                 {classes.map((data)=>(
                         <div key={data.id} className='flex flex-raw justify-between shadow-md p-1 m-1 text-center rounded-md'>
                             <div className='flex  justify-between  p-1 '>
                                <h1 className='text-md xl:text-xl rounded-full p-1 text-red-600 h-8 w-8 xl:h-10 xl:w-10 bg-red-100'>{data.id}</h1>
                                <h1 className='p-0 xl:p-1.5 font-line xl:font-semibold xl:pl-6'>{data.startingTime} - {data.endingTime}</h1>
                                <h1 className='p-0 xl:p-1.5 font-line xl:font-semibold xl:pl-8'>{data.title}</h1>
                             </div>
                             
                             <button type="button" class=" hover:text-white border-2 border-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm xl:text-md px-2 xl:px-8 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Join Class</button>
                         </div>
                     ))}
                     <button type="button" class="relative md:left-[57%] xl:left-[57%] w-[40%] mt-2 hover:text-white border-2 border-blue-700 hover:bg-blue-800  font-semibold rounded-lg text-sm xl:text-md px-8 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">View All</button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="flex rounded-lg h-full bg-white p-4 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-semibold">
                    Monthly Performance
                  </h2>
                </div>
                <div className="flex w-[100%] xl:p-4 md:pt-2 justify-between">
              <Graph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

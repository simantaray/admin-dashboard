import React from 'react'
import MoreStatistics from '../Components/MoreStatistics'
import Statics from '../Components/Statics'

export default function Body() {
  return (
    <div className='border-2 bg-gray-200 h-[calc(100vh-80px)] xl:w-[80vw] md:w-screen'>
        <Statics />
        <MoreStatistics />
    </div>
  )
}

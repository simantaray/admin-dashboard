import React from 'react'
import MoreStatistics from '../Components/MoreStatistics'
import Statics from '../Components/Statics'

export default function Body() {
  return (
    <div className='relative xl:left-[235px] bg-gray-200 h-[calc(100vh-80px)] xl:w-[62vw]'>
        <Statics />
        <MoreStatistics />
    </div>
  )
}

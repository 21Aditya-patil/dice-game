import React from 'react'

function Rules() {
  return (
    <div className='flex flex-col justify-center items-start mt-3 bg-gray-300 px-4 py-2 rounded-lg'>
        <h1 className='font-bold text-[24px]'>How to play dice game</h1>
        <div className='flex flex-col justify-center items-start mt-1'>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>If you get wrong guess then 1 point will be dedcuted </p>
        </div>  
    </div>
  )
}

export default Rules
 
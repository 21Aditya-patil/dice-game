import React from 'react'

function Score({score}) {
  return (
    <div className='max-w-52 text-center'>
      <h1 className='text-[100px] mb-1 font-bold'>{score}</h1>
      <p className='text-[24px] font-semibold mt-0'>Total Score</p>
    </div>
  )
}

export default Score
import React from 'react'
import { useState } from 'react'

function NumberSelector({selected ,setSelected, error, setError}) {
    const arr = [1,2,3,4,5,6]
    
    const handleClick = (value) => {
      setSelected(value)
      setError("")
    }
     
  return (
    <div className='flex flex-col items-end'>
      <p className='text-red-700'>{error}</p>
      <div className='flex gap-4'>
      {
        
        arr.map((value, i) => (
            <div key={i}  
            
            className={`w-[72px] h-[72px] border-black border-2 text-[24px] font-semibold flex gap-4 justify-center items-center ${value===selected ? "bg-black text-white" : "bg-whites"}`} onClick={() => handleClick(value)} 
            >{value}</div>
            
        ))
      }
      </div>
      <p className='text-[24px] font-bold mt-2'>Select Number</p>
    </div>

  )
}

export default NumberSelector
{}
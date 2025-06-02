import React from 'react'

function Start({toggle}) {
  return (
    <>
        <div className='flex justify-center items-center w-full h-screen'>
          <div className='max-w-[1182px] h-[522px] flex items-center'>
            <img src="\public\images\dices.png " alt="dice" width={649} height={542}/>
            <div className='w-[528px] h-[118px] flex flex-col items-end'>
              <h1 className='font-extrabold text-[76px]'>DICE GAME</h1>
              <button className='min-w-[220x] h-[44px] bg-black py-[10px] px-[18px] gap-10 text-white rounded-md hover:bg-slate-900 cursor-pointer  shadow-2xl shadow-black' onClick={toggle}>Play Now</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Start

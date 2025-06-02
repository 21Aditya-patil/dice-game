import React, { useState } from 'react'
import Score from './Score'
import NumberSelector from './NumberSelector'
import Dice from './Dice'
import Rules from './Rules'

function Gameplay() {
  const [score, setScore] = useState(0)
  const [current, setCurrent] = useState(1)
  const [selected, setSelected] = useState()
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState()

  const randomNum = () => {
        return Math.floor(Math.random()*(7-1)+1)
    }

  const rollDice = () => {
    if(!selected){
      setError("You Have not selected any Number");
      return;
    }

    const randomN = randomNum() 
    setCurrent((prev) => randomN)

    if(selected === randomN)
    {
      setScore((prev) => prev + 1)
    }
    else
    {
      setScore((prev) => prev - 1)
    }
  }

  


  return (
    <>
      <div className='flex items-start justify-between m-8'>
        <Score score={score}/>
        <NumberSelector selected={selected} setSelected={setSelected} error={error} setError={setError}/>
      </div>
      <div>
        <Dice current={current} randomNum={rollDice}/>
      </div>
      <div className='flex flex-col items-center mt-4'>
        <button className='bg-white border-black border-2 w-[220px] h-[40px] text-xl rounded-md font-semibold mb-2 hover:bg-slate-500'
        onClick={() => setScore(0)} 
        >Reset Score</button>
        <button className='bg-black text-white border-black border-2 w-[220px] h-[40px] text-xl rounded-md font-semibold mt-2 hover:bg-white hover:border-black hover:text-black'
        onClick={() => setShowRules((prev) => !prev)}
        >Show Rules</button>
        {
          showRules ? <Rules /> : null
        }
      </div>
    </>
  )
}

export default Gameplay
Gameplay
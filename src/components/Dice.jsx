function Dice({current, randomNum}) {
    
  return (      
    <div className='flex flex-col items-center'>
      <img onClick={randomNum} src={`/images/dice_${current}.png`} alt="Dice image" />
      <p className="font-semibold">Click on Dice to roll</p>
    </div>
  )
}

export default Dice

import React from 'react'

const BenifitCard = ({img,text}) => {
  return (
    <div className='h-[230px] w-[180px] md:h-[330px] md:w-[268px] bg-white flex flex-col items-center md:gap-[20px] shadow-lg rounded-[8px] px-[10px] cursor-pointer hover:scale-110 transition'>
      <img src={img} alt="Befinits"/>
      <p className='font-medium px-[10px] text-center'>{text}</p>
    </div>
  )
}

export default BenifitCard

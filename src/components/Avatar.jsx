import React from 'react'
import code from '../assets/code.png'

const Avatar = ({ branch, roll, image, type, name, qualification }) => {
  return (
    <div className='w-[300px] h-[300px] md:h-[400px] flex items-center justify-center flex-col'>
      <div className='rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-slate-900 outline outline-[0.5px] outline-black overflow-hidden'>
        <img src={image!=' ' ? image : code} className='w-full h-full object-cover bg-white' />
      </div>
      <div className='flex flex-col items-center mt-[10px]'>
        {
          type!=="staff"?(<h1 className='font-bold'>{type}</h1>):''
        }
        <h1 className='font-Poppins font-bold md:text-[24px] text-[20px] text-center'>{name}</h1>
        {
          type === 'staff' ? (<h1>{qualification}</h1>) :
            <>
              <h1>{branch}</h1>
              <h1>{roll}</h1>
            </>
        }
      </div>
    </div>
  )
}

export default Avatar

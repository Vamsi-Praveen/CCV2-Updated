import React from 'react'
import coding from '../assets/code.png'
import Calender from '../assets/calender.svg'
import Button from './Button'


const Card = ({ date,dept,action="0",type, text = "Register Now" }) => {
    return (
        <div className='w-[180px] h-[280px] md:w-[270px] md:h-[370px] flex flex-col gap-[15px] my-[10px]'>
            <div>
                <img src={coding} alt='Code' />
            </div>
            <div className='flex flex-col items-center md:gap-[15px] gap-[12px]'>
                <div>
                    <h1 className='text-[15px] md:text-[18px]'>Code Carnival - <span className='uppercase'>{dept}</span></h1>
                    <p className='text-[#B5ABAB] flex gap-[10px] text-[16px] items-center'>
                        <img src={Calender} alt='Calender' />
                       {date}
                    </p>
                </div>
                <Button action={action} type={type} text={text} date={date}/>
            </div>
        </div>
    )
}

export default Card

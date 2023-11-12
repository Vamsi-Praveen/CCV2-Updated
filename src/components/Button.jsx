import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ action, date, text }) => {
  const navigate = useNavigate();
  const view_function = () => {
    navigate(`/contest/${date}`)
  }
  const register_function = () => {
    navigate(`/register/${date}`)
    // navigate(`/register/`)
  }
  return (
    <button onClick={() => { action == '1' ? view_function() : register_function() }} className='w-[180px] h-[35px] md:w-[238px] md:h-[37px] rounded-[11px] bg-black text-white hover:scale-105 transition'>{text}</button>
  )
}

export default Button

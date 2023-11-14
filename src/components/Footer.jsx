import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/logo-facebook.svg'
import twitter from '../assets/logo-twitter.svg'
import youtube from '../assets/logo-youtube.svg'
import linkedin from '../assets/logo-linkedin.svg'

const Footer = () => {
    return (
        <footer className='flex p-[20px] border-t-[1px] flex-col gap-[10px] h-[200px] items-center'>
            <div className='mb-[10px] md:flex md:flex-row md:items-center md:justify-around justify-center flex flex-col w-full'>
                <div>
                    <Link to="/">
                        <h1 className='text-[24px]'><b>Code Carnival.</b></h1>
                    </Link>
                    <p className='text-[#978F8F] text-[12px] w-[180px]'>Weekly Coding Contest <br />Conducted by CSE/IT/AIML Department.</p>
                </div>
                <div className='flex md:flex-col gap-[20px] md:gap-0 mt-[20px] md:mt-0 md:mr-[45px]'>
                    <p className='text-[#978F8F] text-center mb-3'>Follow Us</p>
                    <div className='flex gap-[20px]'>
                        <Link to="/">
                            <img src={facebook} alt="Facebook" className='w-[24px] hover:-translate-y-2 transition'/>
                        </Link>
                        <Link to="/">
                            <img src={twitter} alt="Facebook" className='w-[24px] hover:-translate-y-2 transition'/>
                        </Link>
                        <Link to="/">
                            <img src={linkedin} alt="Facebook" className='w-[24px] hover:-translate-y-2 transition'/>
                        </Link>
                        <Link to="/">
                            <img src={youtube} alt="Facebook" className='w-[24px] hover:-translate-y-2 transition'/>
                        </Link>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <p className='mb-[5px] text-center text-[#978F87]'>Quick Links</p>
                    <ul className='text-center'>
                        <li>
                            <Link to='/'>
                               Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                               About
                            </Link>
                        </li>
                        <li>
                            <Link to='/contest'>
                               Contest
                            </Link>
                        </li>
                        <li>
                            <Link to='/annonucements'>
                               Annonucements
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='text-slate-500 text-[11px] text-center'>All Rights Reserved </p>
            <p className='text-slate-500 text-[9px] text-center pb-[10px]'>&copy;&nbsp;Copyright 2023 | AEC CSE | Made with <span className='text-slate-500'>❤</span> by Vamsi.</p>
            </div>
        </footer>
    )
}

export default Footer

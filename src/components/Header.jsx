import React from 'react'
import logo from '../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import menu from '../assets/Menu.svg'
import close from '../assets/Cancel.svg'

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen)
    }
    return (
        <motion.header className='bg-white shadow-md flex h-[80px] items-center justify-between px-[30px] fixed top-0 left-0 z-[99] w-full '
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            <Link to='/' onClick={() => { window.scrollTo(0, 0) }}>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', delay: 0.35 }}
                >
                    <img src={logo} alt='Code Carnival' />
                </motion.div>
            </Link>
            <motion.div onClick={handleClick} className='flex items-center mt-[4px] md:hidden'
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {isOpen ? <img src={close} className='w-[30px] cursor-pointer' /> : <img src={menu} className='w-[30px] cursor-pointer' />}
            </motion.div>
            <nav className={`bg-white md:relative md:top-0 absolute md:min-h-fit min-h-[250px] left-0 md:w-auto w-full shadow-xl md:shadow-none flex items-center justify-center border-t-[1px] border-black-50 md:border-none -z-50 transition-all ease-in ${isOpen ? 'top-[80px]' : 'top-[-400px]'}`}>
                <ul className='flex md:flex-row flex-col items-center justify-center md:gap-[20px] gap-[25px]'>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <HashLink smooth to='/#about'>
                            About
                        </HashLink>
                    </motion.li>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                    >
                        <HashLink smooth to='/#contest'>
                            Contests
                        </HashLink>
                    </motion.li>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}>
                        <NavLink to='/gallery'>
                            Gallery
                        </NavLink>
                    </motion.li>
                    <motion.li
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.55 }}
                    >
                        <NavLink to='/announcements'>
                            Announcements
                        </NavLink>
                    </motion.li>

                </ul>
            </nav>
        </motion.header>
    )
}

export default Header

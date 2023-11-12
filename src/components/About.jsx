import React from 'react'
import { motion } from "framer-motion"
import about from '../assets/about.png'
import line from '../assets/line.svg'

const About = () => {
    return (
        <section className='pt-[30px] flex items-center flex-col gap-[40px]' id="about">
            <div className='relative'>
                <h1 className='text-center font-medium text-2xl md:text-[40px] text-black'>About</h1>
                <div className='md:hidden absolute left-[20px] mb-[20px] '>
                    <img src={line} className='w-[100px] ' />
                </div>
            </div>
            <div className='md:px-[120px]'>
                <div className='md:flex items-center gap-[60px]'>
                    <motion.div className='md:w-1/2 w-full'
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={
                            {
                                delay: 0.1,
                                duration: 0.7
                            }
                        }
                    >
                        <img src={about} alt='About' className='w-full h-[200px] md:h-[300px] md:rounded-[33px] object-cover' />
                    </motion.div>
                    <motion.div className='md:w-1/2 w-full md:p-0 p-[20px]'  
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={
                            {
                                delay: 0.2,
                                duration: 0.6
                            }
                        }
                    >
                        <p className='text-[18px] md:text-[20px]'><b>Code Carnival</b> is the coding competition conducted every week by the department of CSE, IT & AIML in association with the CSI Student chapter. This aims in building the competitive spirit of coding skills in students.</p>
                    </motion.div>
                </div>
            </div>
            <div className='md:px-[120px] md:mt-[40px] '>
                <div className='flex items-center md:gap-[60px] flex-col-reverse md:flex-row'>
                    <motion.div className='md:w-1/2 w-full md:p-0 p-[20px]'
                        initial={
                            {
                                opacity: 0,
                                x: -10
                            }
                        }
                        whileInView={
                            {
                                opacity: 1,
                                x: 0
                            }
                        }
                        transition={
                            {
                                delay: 0.3,
                                duration: 0.7
                            }
                        }
                    >
                        <p className='text-normal text-[18px] md:text-[20px]'><b>Competitive programming</b> is a sport where contestants solve algorithmic problems within a time limit using a programming language of their choice. It tests problem-solving skills, knowledge of algorithms, and ability to write efficient code.</p>
                    </motion.div>
                    <motion.div className='md:w-1/2 w-full'
                        initial={
                            {
                                opacity: 0,
                                y: -10
                            }
                        }
                        whileInView={
                            {
                                opacity: 1,
                                y: 0
                            }
                        }
                        transition={
                            {
                                delay: 0.3,
                                duration: 0.7
                            }
                        }
                    >
                        <img src={about} alt='About' className='w-full h-[200px] md:h-[300px] md:rounded-[33px] object-cover' />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About

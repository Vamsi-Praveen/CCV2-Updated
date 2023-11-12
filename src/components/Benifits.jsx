import React from 'react'
import { motion } from 'framer-motion'
import b1 from '../assets/b-1.png'
import b2 from '../assets/b-2.png'
import b3 from '../assets/b-3.png'
import b4 from '../assets/b-4.png'
import b5 from '../assets/b-5.png'
import BenifitCard from './BenifitCard'
import line from '../assets/line.svg'

const Benifits = () => {
    return (
        <section className='py-[80px] bg-slate-50/5'>
            <h1 className='text-[20px] md:text-[40px] text-black font-bold text-center relative'>Benefits of Learning to Code</h1>
            <div className='absolute right-[10px] md:right-[22rem] mb-[20px] '>
                <img src={line} className='w-[100px] md:w-[200px] ' />
            </div>
            <div className='flex items-center flex-col gap-[60px] mt-[50px] md:px-0 px-[25px]'>
                <motion.div className='flex gap-[50px] flex-wrap justify-center'
                    initial={{
                        opacity: 0,
                        x: -5
                    }}
                    whileInView={
                        {
                            opacity: 1,
                            x: 0
                        }
                    }
                    transition={
                        {
                            delay: 0.5,
                            duration: 0.4
                        }
                    }
                >
                    <BenifitCard img={b1} text={"Coding can help you understand technology."} />
                    <BenifitCard img={b2} text={"It can enhance problem-solving skills."} />
                    <BenifitCard img={b3} text={"Coding can be applied to data visualisation."} />
                </motion.div>
                <motion.div className='flex gap-[50px] flex-wrap justify-center md:px-0 px-[20px]'
                    initial={{
                        opacity: 0,
                        y:-100
                        
                    }}
                    whileInView={
                        {
                            opacity: 1,
                            y: 0
                        }
                    }
                    transition={
                        {
                            delay: 0.5,
                            duration: 0.4
                        }
                    }
                >
                    <BenifitCard img={b4} text={"Coding can complement creativity."} />
                    <BenifitCard img={b5} text={"Coding is a universal language."} />
                </motion.div>
            </div>
        </section>
    )
}

export default Benifits

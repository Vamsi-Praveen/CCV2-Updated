import React from 'react'
import { motion } from 'framer-motion'
import banner from '../assets/hero-banner.jpg'
import Card from './Card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useData } from '../context/DataContext'

const Hero = () => {
    const [cardsShow, setCardsShow] = useState(3)
    const [data, setData] = useState([]);
    const [upcoming, setUpcoming] = useState([])
    const { setDataContext } = useData()
    useEffect(() => {  
        window.scrollTo(0,0)
        const get_data = async () => {
            const { data } = await axios.get('http://localhost:8000/coding/all');
            const upcoming = data.filter((item) => {
                return !item.completed
            })
            const past = data.filter((item) => {
                return item.completed
            })
            setData(past.reverse())
            setUpcoming(upcoming)
            setDataContext(upcoming)
        }
        get_data();
    }, [])


    //load more button 
    const loadmore = () => {
        setCardsShow(cardsShow + 3)
    }
    return (
        <motion.section id="home" className='w-full bg-slate-50/10 flex items-center justify-center flex-col pb-[30px] mt-[80px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            <div className='relative w-screen md:h-[620px] h-[60vh]'>
                <img src={banner} alt="Code Carnival Banner" className='w-full shadow-sm h-full object-cover' />
                <div className='absolute w-full h-full flex left-0 top-0 items-center justify-center'>
                    <h1 className='text-center font-medium text-[30px] md:text-[60px] text-white'>Welcome to <br></br> Code Carnival</h1>
                </div>
                <div className='absolute bottom-10 left-1/2 md:h-[40px] h-[30px] md:w-[22px] w-[20px] rounded-[32px] border border-1 border-slate-500 flex justify-center md:pl-[1px] pl-[0px]'>
                    <div className='h-[10px] w-[10px] md:h-[13px] md:w-[13px] bg-slate-300 rounded-full my-[5px] md:animate-scroll animate-scrollSmall'></div>
                </div>
            </div>
            <div className='mt-[20px] flex flex-col items-center gap-[40px] pt-[30px]'>
                <h1 className='text-2xl md:text-4xl font-bold text-black'>UpComing Contests</h1>
                <div className='flex flex-col md:flex-row gap-[20px]'>
                    {
                        upcoming.length != 0 ?
                            (
                                upcoming.map((item, index) => {
                                    return (
                                        <motion.div key={index}
                                            initial={{ opacity: 0, y: -50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={
                                                {
                                                    delay: 0.2,
                                                    duration: 2,
                                                    type: "spring"
                                                }
                                            }
                                        >
                                            <Card action={"0"} date={item.date} dept={item.dept_conducted} />
                                        </motion.div>
                                    )
                                })
                            ) : (
                                <ul className='stripped-li px-[20px]'>
                                    <li>Upcoming Contest Updated Soon...</li>
                                </ul>
                            )
                    }
                </div>
                <section id="contest" className='mt-[40px]'>
                    <h1 className='text-2xl md:text-4xl font-bold text-black pt-[20px] text-center'>Past Contests</h1>
                    <div className='flex gap-[20px] flex-col items-center'>
                        <div className='flex gap-[15px] md:gap-[60px] flex-col md:flex-row flex-wrap max-w-[70vw] my-[40px]'>

                            {
                                data.slice(0, cardsShow).map((items, index) => {
                                    return (
                                        <motion.div key={index}
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={
                                                {
                                                    delay: 0.4,
                                                    duration: 0.5,
                                                }
                                            }
                                        >
                                            <Card date={items.date} dept={items.dept_conducted} text={"View Details"} action="1" />
                                        </motion.div>
                                    )
                                })
                            }
                            {/* 
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={
                                    {
                                        delay: 0.4,
                                        duration: 0.5,
                                    }
                                }
                            >
                                <Card />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={
                                    {
                                        delay: 0.4,
                                        duration: 0.5,
                                    }
                                }
                            >
                                <Card />
                            </motion.div>
                            */}


                        </div>
                        <button onClick={loadmore}>Load More</button>
                    </div>
                </section>

            </div>
        </motion.section>
    )
}
export default Hero

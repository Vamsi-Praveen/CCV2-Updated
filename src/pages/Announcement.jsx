import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'
import announcement from '../assets/announcements.jpg'
import axios from "axios";

const Announcement = () => {
    const [content,setContent] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0)
        const get_annon = async () => {
            await axios.get('http://localhost:8000/announcements/all')
            .then((res)=>{
                setContent(res.data.reverse())
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        get_annon();
    },[])
  
    return (
        <section className='mt-[80px]'>
            <Header />
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <img src={announcement} className='md:h-[400px] object-cover w-full' />
                </motion.div>
                <div className='md:px-[40px] py-[30px] px-[20px]'>
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className='font-bold text-black md:text-4xl text-2xl text-center'>Recent Announcements</motion.h1>
                    <div className='mt-[40px] flex justify-center'>
                        <ul className='flex flex-col gap-[20px] w-full px-[40px] py-[10px] stripped-li list-disc font-Poppins font-medium'>
                            {
                                content.map((item, index) => (
                                    <motion.li key={index}
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.7 }}
                                    >{item.description}</motion.li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Announcement
